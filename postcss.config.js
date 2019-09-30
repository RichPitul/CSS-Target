const postcssPresetEnv = require('postcss-preset-env');
if (process.env.NODE_ENV === 'production') {
  module.exports = {
    plugins: [
      postcssPresetEnv({
        browsers: ["> 0.25%", "IE 10"]
      }),
      require('cssnano')
    ]
  };
  return;
}
module.exports = {};