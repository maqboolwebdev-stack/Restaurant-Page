// webpack.common.js
import path from 'node:path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  entry: './src/index.js',
  target: 'browserslist',

  output: {
    filename: 'main.js',
    path: path.resolve(import.meta.dirname, 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html',
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [['autoprefixer']],
              },
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        use: ['html-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};