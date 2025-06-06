const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
        use: {
          loader: 'ts-loader',
          options: { transpileOnly: true }
        },
        exclude: [/node_modules/, /vendor/]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(ttf|mp3|png|jpg|jpeg|gif|svg)$/i,
        type: 'asset/resource'
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
      modules: path.resolve(__dirname, 'app/modules'),
      app$: path.resolve(__dirname, 'app/app.js'),
      appRoot: path.resolve(__dirname, 'app')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({filename: 'styles.css'}),
    new HtmlWebpackPlugin({ template: 'index.html' }),
    new HtmlWebpackPlugin({ template: 'offline.html', filename: 'offline.html', inject: false }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'manifest.json', to: 'manifest.json' },
        { from: 'icons', to: 'icons' },
        { from: 'app', to: 'app', globOptions: { ignore: ['**/*.ts'] } },
        { from: 'vendor', to: 'vendor' }
      ]
    }),
    new WorkboxPlugin.InjectManifest({
      swSrc: './service-worker.js',
      swDest: '../service-worker.js',
      additionalManifestEntries: [{url: '/offline.html', revision: null}]
    }),
    new CompressionPlugin()
  ],
  optimization: {
    minimizer: [
      new TerserPlugin({
        exclude: /vendor/
      }),
      new CssMinimizerPlugin()
    ]
  },
  mode: 'production'
};
