module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse-slow 10s ease-in-out infinite',
      },
      keyframes: {
        'pulse-slow': {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.01)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDelay: {
    	'2000': '2000ms',
      },
    },
  },
  plugins: [],
};
