var http = require('http');
var fs = require('fs');


/*myReadStream.on('data', function(chunk){
  console.log('new chunk received:');
  myWriteStream.write(chunk);
});*/


// var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');




// Request and response
var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html', 'utf8').pipe(res);
  } else if (req.url === '/api/ninjas') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var myObj = {
      name: 'Ryu',
      job: 'Ninja',
      age: 29
    }
    res.end(JSON.stringify(myObj));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
