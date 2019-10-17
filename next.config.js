module.exports = {
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  };
// next.config.js
const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    cssLoaderOptions: {
    url: false
    }
}) 