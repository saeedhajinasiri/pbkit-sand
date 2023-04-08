const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = async ({ config }) => {
  // fonts
  config.plugins.push(
      new CopyWebpackPlugin({patterns: [
          {
            from: path.resolve(__dirname, '../public/fonts/Roboto'),
            to: 'fonts/Roboto'
          },
        ]}),
  );

  return config;
};
