var http = require('http');
var redis = require('redis');

var vcap_services = process.env.VCAP_SERVICES;
var rediscloud_service = JSON.parse(vcap_services)["rediscloud"][0];
var credentials = rediscloud_service.credentials;

var client = redis.createClient(
  credentials.port,
  credentials.hostname,
  {no_ready_check: true});

client.auth(credentials.password);
client.on('connect', function() {
    console.log('Connected to Redis');
});

var server = http.createServer(function(req,res) {
  client.get('last-visit', function(err, reply) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    client.set('last-visit', new Date().toISOString());
    res.write('Last Visit: ' + reply + '\n');
    res.end('Hello World');
  });
});
server.listen(process.env.VCAP_APP_PORT || 8888, function() {
  console.log('The server is running');
});
