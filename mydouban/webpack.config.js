var path = require("path")
var htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    entry:path.join(__dirname,"./src/js/main.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"bundle.js"
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        })
    ],
    module:{
        rules:[
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},//exclude意思是把xx排除在外
            {test:/\.css$/,use:["style-loader","css-loader"]}
        ]
    }
}