/* eslint-disable no-undef */
const Path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = env => ({
    entry: { index: Path.resolve(__dirname, "src", "index.js") },
    output: {
        path: Path.resolve(__dirname, "build"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ["babel-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: ["file-loader?name=[name].[ext]"]
            },
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, "src", "index.html")
        }),
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new CopyPlugin({
            patterns: [
                {from: "public/**/*", to: "[name].[ext]"},
            ],
            options: {
                concurrency: 100,
            },
        }),
        new webpack.EnvironmentPlugin({
            "API_HOST": env.API_HOST || "http://localhost:3000"
        })
    ],
    devServer: {
        open: true,
        hot: true,
        contentBase: Path.join(__dirname, "public"),
        historyApiFallback: true
    }
});
