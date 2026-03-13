/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "#007AFF", // iOS Blue
        "primary-hover": "#005bb5",
        "secondary": "#5AC8FA", // iOS Light Blue
        "background-light": "#f2f2f7", // iOS background
        "background-dark": "#000000",
        "admin-bg": "#1c1c1e", // iOS dark elevated
        "midnight": "#0f172a",
        "midnight-dark": "#020617",
        "danger": "#ff3b30", // iOS Red
        "success": "#34c759", // iOS Green
        "warning": "#ffcc00"  // iOS Yellow
      },
      fontFamily: {
        "sans": ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"],
        "display": ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica", "Arial", "sans-serif"]
      },
      backgroundImage: {
        'admin-radial': 'radial-gradient(circle at top left, #1c1c1e 0%, #000000 100%)',
        'user-radial': 'radial-gradient(circle at center, #000000 0%, #000000 100%)',
      },
      animation: {
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          from: { backgroundPosition: '200% 0' },
          to: { backgroundPosition: '-200% 0' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'glow-primary': '0 0 20px rgba(0, 122, 255, 0.4)',
        'glow-danger': '0 0 20px rgba(255, 59, 48, 0.4)'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
