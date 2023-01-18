var path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
    mode: "development",

    //진입점
    entry: {
        // 각 html에 필요한 entry 파일
        cart: ".src/cart.js",
        mainApp: "./src/mainApp.js",
        menu: "./src/menu.js",
    },
    //결과물
    output: {
        path: __dirname + "/dist",
        filename: "[name].js", // entry에 선언된 객체의 각 프로퍼티가 [name]과 치환되어 파일이 생성
        // index.bundle.js, multiple.bundle.js
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "index.html",
        }),

        new HtmlWebpackPlugin({
            filename: "menu.html",
            template: "menu.html",
        }),
        new HtmlWebpackPlugin({
            filename: "cart.html",
            template: "cart.html",
        }),
        new MiniCssExtractPlugin({ filename: "styles.css" }),
        new CleanWebpackPlugin({
            cleanAfterEveryBuildPatterns: ["dist"],
        }),
    ],
};
