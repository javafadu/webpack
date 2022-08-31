const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge (common, {
    mode: "development",
    devServer: {
        static: {
            directory: path.join(__dirname, "dist")
        },
        port: 9000,
        watchFiles: ["src/*.html", "src/*.scss"],
        hot: true
    },
    
    output: {
        filename: "./js/[name].js", // to be created bundle file name
        path: path.resolve(__dirname, "dist"), // the location (folder) of created bundle file
        clean: false
    },
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/, // files ends with .scss or .sass 
                use: [
                    'style-loader', // Step3: load parsed css into the DOM
                    'css-loader' , // Step2: get converted css codes and parse them
                    'sass-loader' // Step1: get sass/scss and convert to css
                ],
            },
        ]
    }
});