var path = require('path');
var webpack = require('webpack');

// const serverConfig = {
//   entry: './node_lib/test.js',
//   target: 'node',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'lib.node.js'
//   },
//   watch: true,
//   module: {
//     loaders: [{
//       test: /(node_lib)\.js$/,
//       exclude: /(node_modules)/,
//       loader: 'babel-loader',
//       query: {
//         presets: [['es2015', { modules: false }]],
//         plugins: ['syntax-dynamic-import']
//       }
//     }]
//   }
// };

const clientConfig = {
  entry: {
    main: './main.js',
    vendor: ['xml2js']
  },
  target: 'node-webkit',
  watch: true,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      loader: 'babel-loader',
      query: {
        presets: [['es2015', { modules: false }]],
        plugins: ['syntax-dynamic-import']
      }
    }]
  },
  // externals: {
  //   xml2js: 'xml2js'
  // },
  // node: {
  //   __filename: true,
  //   __dirname: true
  // },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'] // Specify the common bundle's name.
    })
  ]
};

// module.exports = [clientConfig, serverConfig];
module.exports = [clientConfig];
// module.exports = [serverConfig];
