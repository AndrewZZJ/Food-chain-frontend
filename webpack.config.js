const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: { index: Path.resolve(__dirname, "src", "index.js") },
    output: {
        path: Path.resolve(__dirname, "build"),
        publicPath: '/'
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
            }
        ]
    },
    optimization: {
        splitChunks: { chunks: "all" }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: Path.resolve(__dirname, "src", "index.html")
        })
    ],
    devServer: {
        open: true,
        hot: true,
        contentBase: Path.join(__dirname, 'public')
    }
};
