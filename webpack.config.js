const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode:'development',
entry:{
    index:'./src/index.js',
    print:'./src/print.js'
},
devtool:'inline-source-map',
devServer:{
    static:'./dist',
},
plugins:[
    new HtmlWebpackPlugin({
        title:'development'
    }),
],
output:{
path:path.resolve(__dirname,'dist'),
// filename:'bundle.js'
filename:'[name].bundle.js',
publicPath: '/',
clean:true //清理dist文件夹
},
//  入口有多个文件时，可以使用optimization.runtimeChunk来将模块的相关代码提取到一个单独的runtime文件中
optimization:{
    runtimeChunk:'single',
}
}