import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: {
				DEFAULT: '1rem',
				sm: '2rem',
				lg: '2rem',
				xl: '2rem',
				'2xl': '2rem',
				'3xl': '3rem',
				'4xl': '4rem'
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1400px',
				'3xl': '1600px',
				'4xl': '1920px'
			}
		},
		screens: {
			xs: '475px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1440px',
			'3xl': '1920px',
			'4xl': '2560px',
		},
		extend: {
			fontFamily: {
				'sans': ['Inter', 'system-ui', 'sans-serif'],
				'serif': ['Crimson Text', 'Georgia', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Warm earth tone palette
				'warm-cream': 'hsl(var(--warm-cream))',
				'soft-sage': 'hsl(var(--soft-sage))',
				'gentle-terracotta': 'hsl(var(--gentle-terracotta))',
				'cozy-brown': 'hsl(var(--cozy-brown))',
				'forest-green': 'hsl(var(--forest-green))',
				'sunset-peach': 'hsl(var(--sunset-peach))',
				'earth-clay': 'hsl(var(--earth-clay))',
				'natural-beige': 'hsl(var(--natural-beige))',
				'hover-warm': 'hsl(var(--hover-warm))',
				'focus-glow': 'hsl(var(--focus-glow))',
				'success-earth': 'hsl(var(--success-earth))',
				// HIGH-CONTRAST ACTION COLORS FOR MAXIMUM ACCESSIBILITY
				'action-primary': 'hsl(var(--action-primary))',
				'action-primary-hover': 'hsl(var(--action-primary-hover))',
				'action-primary-active': 'hsl(var(--action-primary-active))',
				'action-primary-foreground': 'hsl(var(--action-primary-foreground))',
				'action-secondary': 'hsl(var(--action-secondary))',
				'action-secondary-hover': 'hsl(var(--action-secondary-hover))',
				'action-secondary-foreground': 'hsl(var(--action-secondary-foreground))',
				// Legacy support
				'trust-blue': 'hsl(var(--trust-blue))',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
