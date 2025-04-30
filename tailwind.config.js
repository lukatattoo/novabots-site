/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Adăugăm culori personalizate fără a elimina pe cele default
        primary: '#0f172a', // albastru închis
        secondary: '#1e293b', // gri-albastru închis
        accent: '#38bdf8', // albastru deschis (sky-400)
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
