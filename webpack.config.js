const HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src", "index.html"),
            hash: true
        })
    ]
};