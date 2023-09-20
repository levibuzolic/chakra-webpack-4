const {DefinePlugin} = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const DEV = process.env.NODE_ENV !== 'production';

/** @type {import('webpack').Configuration} */
module.exports = {
  mode: DEV ? 'development' : 'production',
  entry: './index.tsx',
  devtool: DEV ? 'inline-source-map' : undefined,
  output: {
    filename: DEV ? '[name].js' : '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/i,
        type: 'javascript/auto',
        exclude: /node_modules\/(?!@zag-js)/,
        use: [{loader: 'babel-loader'}],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
        use: [{loader: 'babel-loader'}],
      },
    ].filter(Boolean),
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      templateContent: ({htmlWebpackPlugin}) => `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8" />
            ${htmlWebpackPlugin.tags.headTags}
          </head>
          <body>
            <div id="root" />
            ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
      `,
    }),
  ].filter(Boolean),
};
