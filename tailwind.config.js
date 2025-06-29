export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' }, //À 0% du temps l’élément est invisible
          '100%': { opacity: '1' }, 
        },
      },
      animation: {
        'fade-in': 'fade-in 1s ease-in forwards',
      },
    },
  },
  plugins: [],
};
