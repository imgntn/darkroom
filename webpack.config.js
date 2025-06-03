const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './app/main.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      jquery: 'jquery',
      underscore: 'underscore',
      backbone: 'backbone',
      three: 'three',
      threex: path.resolve(__dirname, 'vendor/THREEx.KeyboardState'),
      _typeface_js: path.resolve(__dirname, 'vendor/typeface-0.15'),
      helvetiker: path.resolve(__dirname, 'vendor/helvetiker_regular.typeface.js'),
      audioToggle: path.resolve(__dirname, 'app/audioToggle'),
      modules: path.resolve(__dirname, 'app/modules')
    }
  },
  plugins: [
    new WorkboxPlugin.InjectManifest({
      swSrc: './service-worker.js',
      swDest: '../service-worker.js',
      additionalManifestEntries: [{url: '/offline.html', revision: null}]
    })
  ],
  mode: 'production'
};
