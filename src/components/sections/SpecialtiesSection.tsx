import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

export default function SpecialtiesSection({ withId = true }: { withId?: boolean }) {
  const specialties = [
    {
      tag: "Anxiety",
      icon: "🧠",
      title: "Anxiety",
      subtitle: "Take control of anxiety with proven skills that calm your mind and restore balance.",

      expectation: "Identify your anxiety triggers, learn calming techniques, and gain confidence step by step.",
      color: "cozy-brown",
      bgGradient: "from-warm-cream to-natural-beige"
    },
    {
      tag: "Depression",
      icon: "❤️",
      title: "Depression",
      subtitle: "Regain motivation and reconnect with what matters most.",

      expectation: "Work together to overcome symptoms, rebuild connections, and create sustainable wellness habits.",
      color: "gentle-terracotta",
      bgGradient: "from-warm-cream to-natural-beige"
    },
    {
      tag: "Addiction",
      icon: "🛡️",
      title: "Addiction",
      subtitle: "Break the cycle of addiction and build a life you are proud of.",

      expectation: "Address underlying causes, build a strong support system, and create a personalized recovery plan.",
      color: "earth-clay",
      bgGradient: "from-warm-cream to-natural-beige"
    },
    {
      tag: "Relationships",
      icon: "👥",
      title: "Relationships",
      subtitle: "Enhance communication, set healthy boundaries, and deepen intimacy.",

      expectation: "Learn healthy communication patterns, address challenges, and build stronger bonds.",
      color: "cozy-brown",
      bgGradient: "from-warm-cream to-natural-beige"
    },
    {
      tag: "Life Transitions",
      icon: "🌱",
      title: "Life Transitions",
      subtitle: "Navigate change with confidence and find new purpose.",

      expectation: "Process change together, explore new opportunities, and move forward with intention.",
      color: "cozy-brown",
      bgGradient: "from-warm-cream to-natural-beige"
    }
  ];

  return (
    <section id={withId ? "specialties" : undefined} className="py-6 sm:py-8 lg:py-12 bg-gradient-to-br from-warm-cream via-white to-natural-beige relative overflow-hidden min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-gentle-terracotta/10 to-soft-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-gradient-to-tl from-earth-clay/10 to-cozy-brown/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Much more compact header */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gentle-terracotta/10 to-earth-clay/10 px-3 py-1.5 rounded-full mb-3 sm:mb-4">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-gentle-terracotta to-earth-clay rounded-full"></div>
            <span className="text-xs font-semibold text-cozy-brown uppercase tracking-wider">Areas of Expertise</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-3xl font-heading font-bold text-cozy-brown mb-2 sm:mb-3">
            Specialties That
            <span className="block text-gentle-terracotta">Transform Lives</span>
          </h2>
          <p className="text-sm sm:text-base text-cozy-brown/80 max-w-3xl mx-auto leading-relaxed px-4">
            Expert support for life's most challenging moments. Evidence-based approaches tailored to your unique needs and goals.
          </p>
        </div>

        {/* Much more compact cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br ${specialty.bgGradient} rounded-xl p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/50 backdrop-blur-sm overflow-hidden`}
            >
              {/* Simplified decorative elements */}
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-lg"></div>
              <div
                className="absolute -top-1 -right-1 w-6 h-6 rounded-full opacity-20"
                style={{ backgroundColor: `hsl(var(--${specialty.color}))` }}
              ></div>

              {/* Much more compact card header */}
              <div className="flex items-center justify-between mb-2 sm:mb-3 relative z-10">
                <div
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center text-base sm:text-lg shadow-md group-hover:scale-105 transition-transform duration-300"
                  style={{ backgroundColor: `hsl(var(--${specialty.color}) / 0.15)` }}
                >
                  {specialty.icon}
                </div>
                <Badge
                  variant="outline"
                  className="text-xs font-bold border px-1.5 py-0.5"
                  style={{
                    borderColor: `hsl(var(--${specialty.color}))`,
                    color: `hsl(var(--${specialty.color}))`
                  }}
                >
                  {specialty.tag}
                </Badge>
              </div>

              {/* Much more compact content */}
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-bold text-cozy-brown mb-1.5 group-hover:text-gentle-terracotta transition-colors duration-300">
                  {specialty.title}
                </h3>
                <p className="text-cozy-brown/80 mb-2.5 sm:mb-3 leading-relaxed text-xs sm:text-sm">
                  {specialty.subtitle}
                </p>



                {/* Simplified expectation box */}
                <div className="relative">
                  <div
                    className="absolute inset-0 rounded-lg opacity-50"
                    style={{ backgroundColor: `hsl(var(--${specialty.color}) / 0.05)` }}
                  ></div>
                  <div className="relative p-2 rounded-lg border" style={{ borderColor: `hsl(var(--${specialty.color}) / 0.2)` }}>
                    <div className="flex items-center gap-1.5 mb-1">
                      <ArrowRight className="w-2.5 h-2.5" style={{ color: `hsl(var(--${specialty.color}))` }} />
                      <h4 className="text-xs font-bold text-cozy-brown uppercase tracking-wider">
                        What to Expect
                      </h4>
                    </div>
                    <p className="text-xs text-cozy-brown/80 leading-relaxed">
                      {specialty.expectation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}