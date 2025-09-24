const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "bundle.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            { test: /\.css$/i, use: ["style-loader", "css-loader"] }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            inject: "body"
        }),
    ],
    devServer: {
        static: false,          // nincs dist, minden memóriában
        hot: false,             // nem HMR, hanem full reload
        liveReload: true,
        port: 8080,
        open: true,
        watchFiles: ["src/**/*"]
    }
};
