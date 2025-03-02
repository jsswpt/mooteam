/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: [
    require('cssnano')({
      preset: require('cssnano-preset-default'),
      plugins: [require('autoprefixer')],
    }),
  ],
}

module.exports = config
