var fs = require('fs');

// fs.unlink('file.txt', (err) => {});
// Asynchronously is without sync
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');
/*fs.mkdir('stuff', function(){
  fs.readFile('readMe.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeMe.txt', data, (err) => {});
  });
});*/

// Port number for node js is on one port

fs.unlink('./stuff/writeMe.txt', function() {
    fs.rmdir('stuff', (err) => {});
});
