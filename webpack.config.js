const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  devServer: {
    static: {
      directory: './dist',
    },
  },
  mode: 'development',
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  devtool: 'source-map', // 将编译后的代码映射回原始源代码
  plugins: [
    new CleanWebpackPlugin(), // 清理 /dist
    new HtmlWebpackPlugin({ // 每次 让 dist下的index.html都重新生成最新的
        title: 'Caching'
    })
  ],
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/'
  },
  optimization: {
    // splitChunks: {
    //   chunks: 'all'
    // },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    },
    runtimeChunk: 'single'
  },
  module: {
      rules: [
          //   样式 loader
          {
              test: /\.(css|less)$/,
              use: [
                  'style-loader',
                  'css-loader',
                  'less-loader'
              ]
          }, 
          // 图片 loader
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
          }
      ]
  }
};