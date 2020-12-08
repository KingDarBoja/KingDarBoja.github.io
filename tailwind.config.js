module.exports = (isProd) => ({
    prefix: '',
    purge: {
      enabled: isProd,
      content: ['**/*.html', '**/*.ts']
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
      // extend: {},
      colors: {
        transparent: "transparent",
        oxford: {
          DEFAULT: "#14213D",
          dark: "#00132D"
        },
        orange: {
          DEFAULT: "#FCA311"
        },
        platinum: {
          DEFAULT: "#E5E5E5"
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
});
