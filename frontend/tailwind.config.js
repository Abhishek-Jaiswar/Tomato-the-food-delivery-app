module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: 0,
            transform: 'translateY(20px)', // Optional: Add a slight upward motion
          },
          '100%': {
            opacity: 1,
            transform: 'none',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-out', // Adjust timing and easing as needed
      },
    },
  },
  plugins: [],
};
