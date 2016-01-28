var fs = require('fs');


var rs = fs.createReadStream('file.txt');
var ws = fs.createWriteStream('myOutput.txt');

ws.on('pipe', function(source){
    console.log('pipe event fired');
    //console.log(source);
});

rs.pipe(ws);