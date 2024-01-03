const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

var extractPlugin = new MiniCssExtractPlugin({
    filename: 'bundle.css'
});

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "client.js",
        path: __dirname + "/build/public"
    },

    devServer: {
        static: {
            directory: path.join(__dirname, 'build/public'),
        },
        compress: true,
        port: 9000,
    },

    devtool: "source-map",

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"],
        plugins: []
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    },

    plugins: [
        extractPlugin,
    ],

};