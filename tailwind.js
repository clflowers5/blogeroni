module.exports = {
  purge: {
    content: [
      './src/**/*.html',
      './src/**/*.svelte'
    ],
    options: {
      whitelistPatternsChildren: [/prose$/]
    }
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
