var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        // 각 html에 필요한 entry 파일
        cart: "./src/cart.js",
        main: "./src/mainApp.js",
        menu: "./src/menu.js",
    },
    output: {
        path: __dirname + "/dist",
        filename: "[name].bundle.js", // entry에 선언된 객체의 각 프로퍼티가 [name]과 치환되어 파일이 생성
        // index.bundle.js, multiple.bundle.js
    },
    module: {
        rules: [{ test: /\.css$/, use: "css-loader" }],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template1: "./index.html",
            template2: "./cart.html",
            template3: "/menu.html",
        }),
    ],
};
