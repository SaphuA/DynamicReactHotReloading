var path = require("path");
var webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    entry: {
        main: ["react-hot-loader/patch", "./main"],
    },
    output: {
        path: path.join(__dirname, "wwwroot"),
        filename: "[name].js",
        publicPath: "/wwwroot/",
        pathinfo: true,
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
    },
    module: {
        rules: [
            { test: /\.tsx?$/, use: [{ loader: "ts-loader" }] },
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({ "process.env": { "NODE_ENV": JSON.stringify("development") } }),
    ],
    devServer: {
        hotOnly: true,
        inline: true,
    },
};