/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tie: {
          navy: {
            950: '#060F1E',
            900: '#0A192F',
            800: '#0D254C',
            700: '#13356E',
          },
          blue: {
            DEFAULT: '#1E56A0',
            royal: '#0052D4',
            light: '#2563EB',
            dark: '#163E75',
          },
          sky: {
            DEFAULT: '#38BDF8',
            cyan: '#00D2FF',
            soft: '#BAE6FD',
          },
          ice: {
            50: '#F5F9FD',
            100: '#EEF4FA',
            200: '#E2ECF7',
            300: '#D0E1F4',
          }
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'clay-card': '0 20px 40px -15px rgba(10, 25, 47, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.95), inset 0 -2px 4px rgba(10, 25, 47, 0.03)',
        'clay-card-hover': '0 30px 60px -15px rgba(30, 86, 160, 0.16), inset 0 3px 6px rgba(255, 255, 255, 1)',
        'clay-badge-blue': '0 12px 25px -5px rgba(30, 86, 160, 0.2), inset 0 3px 5px rgba(255, 255, 255, 0.95), inset 0 -3px 5px rgba(13, 37, 76, 0.08)',
        'clay-btn': '0 10px 24px -5px rgba(30, 86, 160, 0.45), inset 0 2px 3px rgba(255, 255, 255, 0.4), inset 0 -3px 5px rgba(10, 25, 47, 0.3)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.04)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
