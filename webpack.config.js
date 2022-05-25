const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ["./src/index.js"],
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    devServer: {
        static: __dirname + '/dist',
        port: 3000,
    },
    plugins: [new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html"
    })],
    resolve: {
        extensions: ['.js']
    }
}