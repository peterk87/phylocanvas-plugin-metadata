const path = require('path');
const webpack = require('webpack');

const loaders = [
  { test: /\.js$/,
    exclude: path.join(__dirname, 'node_modules'),
    loader: 'babel',
    query: {
      presets: [ 'es2015', 'stage-0' ],
    },
  },
];

const devConfig = {
  entry: './dev/index.js',
  output: {
    filename: 'metadata-dev.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders,
  },
};

const buildConfig = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.min.js',
    libraryTarget: 'umd',
  },
  module: {
    loaders,
  },
  externals: 'phylocanvas',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      },
    }),
  ],
};

const isBuild = process.env.NODE_ENV && process.env.NODE_ENV === 'production';

module.exports = isBuild ? buildConfig : devConfig;
