var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: './app/index.tsx',
        vendor: 'moment'
    },
    output: {
        filename: '[name].[chunkhash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: "source-map",
    devServer: {
        contentBase: "./dist",
        compress: true,
        port: 5000
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]

            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist'], {
            verbose: true,
            dry: false
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            }
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'manifest'
        }),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: 'app/index.html',
        })
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};
