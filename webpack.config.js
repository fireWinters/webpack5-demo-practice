const path=require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    mode:'development',
entry:{
    index:'./src/index.js',
    print:'./src/print.js'
},
devtool:'inline-source-map',
plugins:[
    new HtmlWebpackPlugin({
        title:'development'
    }),
],
output:{
path:path.resolve(__dirname,'dist'),
// filename:'bundle.js'
filename:'[name].bundle.js',
clean:true //清理dist文件夹
},
}