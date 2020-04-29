var fs = require('fs');

// Asyncrhonous
fs.readFile('readMe.txt', 'utf8', function(err, data){
  fs.writeFile('file.txt', data, (err) => {})
});

console.log('test');
// Synchronous
// fs.readFileSync("readMe.txt", 'utf8');
// fs.writeFileSync('writeMe.txt', readMe);

// code
