const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const { NxReactWebpackPlugin } = require('@nx/react/webpack-plugin');
const { join,resolve } = require('path');

module.exports = {
  output: {
    path: join(__dirname, 'dist'),
  },
  devServer: {
    port: 4200,
    historyApiFallback: {
      index: '/index.html',
      disableDotRule: true,
      htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
    },
  },
  plugins: [
    new NxAppWebpackPlugin({
      tsConfig: './tsconfig.app.json',
      compiler: 'babel',
      main: './src/main.tsx',
      index: './src/index.html',
      baseHref: '/',
      assets: ['./src/favicon.ico', './src/assets'],
      styles: ['./src/styles.scss'],
      outputHashing: process.env['NODE_ENV'] === 'production' ? 'all' : 'none',
      optimization: process.env['NODE_ENV'] === 'production',
    }),
    new NxReactWebpackPlugin({
      // Uncomment this line if you don't want to use SVGR
      // See: https://react-svgr.com/
      // svgr: false
    }),
  ],

  resolve: {
    alias: {
      'react-native$': 'react-native-web', // 👈 redirect React Native to web version
      ui: resolve(__dirname, '../../libs/ui/src'), // 👈 alias for shared UI package
    },
    extensions: ['.web.js', '.js', '.jsx', '.ts', '.tsx', '.json'], // 👈 optional: prioritize web files
  },
};
