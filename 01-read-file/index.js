const fs = require('fs');
const path = require('path');
const stream = new fs.ReadStream( path.join(__dirname, "text.txt"), 'utf-8');
stream.on('readable',(err, data) => {
    if(err) throw err;
    data = stream.read();
    if(data !=null)console.log(data);
});