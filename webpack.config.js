const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    entry: './src/index.js',
    mode: isProd ? 'production' : 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true
                        }
                    }
                ]
            }
        ],
    },
    devServer: {
        contentBase: './',
    },
    devtool: isProd ? false : 'source-map',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './'),
    },
    plugins: isProd ? [new UglifyJsPlugin()] : [],
};
