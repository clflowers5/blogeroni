const cssnano = require('cssnano');
const tailwindcss = require("tailwindcss");

const production = process.env.NODE_ENV === 'production';

module.exports = {
  plugins: [
    tailwindcss("./tailwind.js"),
    production ? cssnano({ preset: 'default' }) : null,
  ]
};