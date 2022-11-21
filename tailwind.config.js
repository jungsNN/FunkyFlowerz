module.exports = {
  content: ['./src/**/*.tsx'],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
  presets: [],
  theme: {
    fontFamily: {
      sans: ['Railway', 'sans-serif'],
    },
    extend: {
      flexGrow: {
        2: '2',
        3: '3',
      },
      zIndex: {
        60: '60',
        70: '70',
        80: '80',
        90: '90',
        100: '100',
      },
      transitionProperty: {
      },
    }
  },
};
