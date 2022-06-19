const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtrackPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: {
        'main': ['@babel/polyfill', './src/js/index.js'],
        'somejs': './src/js/some.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
      splitChunks: {
          chunks: "all"
      }
    },
    devServer: {
        port: 4200
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body',
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtrackPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtrackPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|jpg|svg|gif)$/,
                use: ['file-loader']
            },
            {
                test: /\.sass$/,
                use: [MiniCssExtrackPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }


        ]
    }
}