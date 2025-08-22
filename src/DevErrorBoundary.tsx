import React from "react";

export class DevErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { error: any }
> {
  constructor(props: any) { super(props); this.state = { error: null }; }
  static getDerivedStateFromError(error: any) { return { error }; }
  componentDidCatch(err: any, info: any) { console.error("App crash:", err, info); }
  render() {
    if (this.state.error) {
      return (
        <pre style={{
          whiteSpace: "pre-wrap", padding: 16, margin: 24,
          background: "#1b1b1b", color: "#ffdada", borderRadius: 8
        }}>
{String(this.state.error?.stack || this.state.error || "Unknown error")}
        </pre>
      );
    }
    return this.props.children as any;
  }
}



