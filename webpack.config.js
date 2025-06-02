const path = require('path');

module.exports = {
  entry: './app/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
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
  mode: 'production'
};
