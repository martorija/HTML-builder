const fs = require('fs');
const stream = new fs.ReadStream( "01-read-file/text.txt", "utf8");
stream.on('readable',function(err, data){
    if(err) throw err;
    data = stream.read();
    if(data !=null)console.log(data);
});