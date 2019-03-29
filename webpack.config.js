const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-bundle.js'

    },
    module: {
        rules: [

            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    { loader: 'style-loader',
                    options: {
                      sourceMap: true
                  } },
                    { loader: 'css-loader',  options: {
                      sourceMap: true
                  } },
                    { loader: 'sass-loader',
                      options: {
                        sourceMap: true,
                        includePaths: ["absolute/path/a", "absolute/path/b"]
                    } 
                }]
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },

    devServer: {
        contentBase: './dist',
        historyApiFallback: true,
        port: 8080
    },


}