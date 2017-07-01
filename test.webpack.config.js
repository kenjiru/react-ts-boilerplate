var path = require("path");
var nodeExternals = require("webpack-node-externals");

module.exports = {
    target: "node",
    externals: [nodeExternals()],
    devtool: "inline-cheap-module-source-map",
    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        modules: [
            path.resolve("./src")
        ]
    },
    module: {
        loaders: [
            {
                test: /\.(tsx|ts)$/,
                loader: "ts-loader",
                exclude: /node_modules/
            }
        ]
    }
};
