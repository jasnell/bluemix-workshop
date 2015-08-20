Creating a Simple Webapp

----------------------------------------------------------------------
## HINTS

Let's start with a simple example. Create a new Simple web application using
the following steps:
    `$ mkdir helloworld && cd helloworld && npm init`

Enter whatever values you'd like when prompted by the npm tool. However,
remember the js filename you select for the `entry point` (the default is
`index.js`) as that is the file you need to create next.

Using whatever editor you prefer, create your entry point (e.g. `index.js`):
```
var http = require('http');
var server = http.createServer(function(req,res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World');
  process.exit(0);
});
server.listen(8888, function() {
  console.log('The server is running');
});
```
Next, use your editor or IDE to open the `package.json` file that was generated
for you when you ran `npm init`. Find the `scripts` section and add `"start":
"node index.js"`. Adding the start script to `package.json` makes it possible
to run the application using `npm start`.

When you're done, run `{appname} verify {dir}` where {dir} is the relative or
absolute path to the directory containing your simple web application.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To verify your work, run: `{appname} verify {dir}`
 __»__ For help run: `{appname} help`
