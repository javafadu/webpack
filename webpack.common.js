const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   
    entry: { 
        main: "./src/index.js", 
        vendor: "./src/vendor.js",

            }, // webpack entry point of Project Packaging
    
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
              },
              {
                 test: /\.(png|jpg|jpeg|gif|svg)$/,
                 type: "asset/resource"   
              },

            
        ],
    },

    plugins: [new HtmlWebpackPlugin({
        template: "./src/index.html",
        inject: "body"
      })],
    };