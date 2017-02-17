var path = require('path');
var webpack = require('webpack');
// const serverConfig = {
//   target: 'node',
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'lib.node.js'
//   },
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       exclude: /(node_modules)/,
//       loader: 'babel-loader',
//       query: {
//         presets: [['es2015', {modules: false}]],
//         plugins: ['syntax-dynamic-import']
//       }
//     }]
//   }
// };

const clientConfig = {
  entry: './main.js',
  node: {
    fs: "empty"
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
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
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    })
  ]
};

// module.exports = [ clientConfig, serverConfig  ];
module.exports = [clientConfig];
