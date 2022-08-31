const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");

module.exports = merge(common, {
    mode: "production",
    
    output: {
        filename: "./js/[name].[contenthash].js", // to be created bundle file name
        path: path.resolve(__dirname, "dist"), // the location (folder) of created bundle file
        clean: true,
        assetModuleFilename: "img/[hash][ext]"
    },
    module: {
        rules: [
            {
                test: /\.s(a|c)ss$/, // files ends with .scss or .sass 
                use: [
                    MiniCssExtractPlugin.loader, // Step3: load parsed css into folder defined in below plugin area
                    'css-loader' , // Step2: get converted css codes and parse them
                    'sass-loader' // Step1: get sass/scss and convert to css
                ],
            },

            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/, // exclude these folders
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'] // for translation of babel, set preset
                    // preset-env: convert classic js to es5
                  }
                }
            }


        ]
    },
    plugins:[
        new MiniCssExtractPlugin({
            filename: "./css/[name].[contenthash].css"
        })
    ]
   
    });