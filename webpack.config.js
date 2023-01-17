var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        // 각 html에 필요한 entry 파일
        cart: "./src/cart.js",
        mainApp: "./src/mainApp.js",
        menu: "./src/menu.js",
        Data: "./lib/Data.js",
    },
    output: {
        path: __dirname + "/dist/src",
        filename: "[name].js", // entry에 선언된 객체의 각 프로퍼티가 [name]과 치환되어 파일이 생성
        // index.bundle.js, multiple.bundle.js
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                        },
                    },
                    { loader: "sass-loader" },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
        }),
    ],
};
