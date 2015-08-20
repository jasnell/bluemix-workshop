Using the Service Instance in your Application

----------------------------------------------------------------------
## HINTS

From the command line, inside the project directory for the simple web application we created earlier, run the following command to install the `node-redis` module from npm:
    `npm install --save redis`

Then, use your favorite editor to open `index.js` (your entry point file). Update the content to the following:
```
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
```

Save your changes and redeploy using `cf push`.

Once you're ready to continue, run `{appname} verify {bluemix-appname}` to verify that the application has been updated correctly.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify you work, run: `{appname} verify {bluemix-appname}`
 __»__ For help run: `{appname} help
