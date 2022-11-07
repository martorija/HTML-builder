const fs = require('fs');
const path = require('path');
let data = '';
fs.writeFile(path.join(__dirname, 'text.txt'), data, (err, data)=>{
  if(err) throw err;
  console.log('Please enter your data: ');
  data = process.stdin.read();
  process.stdin.on('readable', () => {
    let chunk;
    while ((chunk = process.stdin.read()) !== null) {
      fs.createWriteStream(path.join(__dirname, 'text.txt'), data, (err) => {
        if (err) throw err;
      });
    }
  });
});
