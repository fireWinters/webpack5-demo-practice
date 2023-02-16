const path=require('path');
module.exports={
entry:'./src/index.js',
output:{
path:path.resolve(__dirname,'dist'),
filename:'bundle.js'
},
module:{
rules:[
    {
    test:/\.css$/i,
    use:['style-loader','css-loader'],
    },
    {
    test:/\.(png|svg|jpg|jpeg|gif|tif|tiff)$/i,
    type:'asset/resource',
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
]
},
}