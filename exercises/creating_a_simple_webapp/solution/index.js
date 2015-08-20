var http = require('http');
var server = http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
  process.exit(0);
});
server.listen(8888, function() {
  console.log('The server is running');
});
