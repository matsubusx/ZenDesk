const path = require('path');

module.exports = {
    entry: "./src/js/script.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./build/script")
    },
    mode: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/env']
                    }
                },
                exclude: /node_modules/
            }
        ]
    }
}