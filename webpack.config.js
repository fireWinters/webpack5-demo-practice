const path=require('path');
module.exports={
entry:{
    index:'./src/index.js',
    print:'./src/print.js'
},
output:{
path:path.resolve(__dirname,'dist'),
// filename:'bundle.js'
filename:'[name].bundle.js'
},
}