Adding Bluemix Support

----------------------------------------------------------------------
## HINTS

Now that you have a basic web application up and running, let's start getting it ready for deployment to Bluemix.

First, open the `index.js` (or whatever you called your entry point file) and remove that `process.exit(0)` line. We don't want the application you deploy to keep exiting after it serves a single request!

Second, while you have `index.js` open, change `server.listen(8888, ...` to `server.listen(process.env.VCAP_APP_PORT || 8888, ...)`. Bluemix uses the environment to let your applications know the HTTP port, domain name and other key bits of information the application may need to know.

Third, create a new file called `.cfignore` and add a single line `node_modules` and save. This tells the `cf` command line to ignore the `node_modules` directory when it uploads your application. Bluemix will take care of installing npm dependencies for you.

Finally, create a file called `manifest.yml` and set it's contents to:
```
---
applications:
- name: {yourappname}
  mem: 128M
  instances: 1
  path: .
  host: {yourappname}
  command: node index.js
```
Where {yourappname} is a unique name you choose for your application. You will definitely want to choose something unique but memorable here because the name will become part of the applications public URL. Also, make sure that the command uses the proper entry point file name for your application.

When you've completed these steps, run `{appname} verify {dir}` where {dir} is
the relative or absolute path to the directory containing your simple web application.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To verify your work, run: `{appname} verify {dir}`
 __»__ For help run: `{appname} help
