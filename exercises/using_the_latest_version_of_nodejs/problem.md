Using the Latest Version of Node.js

----------------------------------------------------------------------
## HINT
This lesson is optional. To skip or complete this lesson, run `{appname}
verify`.

The current version of the Bluemix Buildpack for Node.js supports the
most recent patch versions of v0.10.x and v0.12.x, with v0.12.7 being
the current default. It's possible, however, to use newer versions of
Node.js by using a third party Buildpack. For instance, if you'd like
to use io.js v3.2, you can point to the latest version of the Heroku
Node.js Buildpack in your `manifest.yml` and identify `io.js` as the
engine target in your `package.json`. (Note, however, that when using a
custom buildpack, the integrated `node-inspector` and development console
functionality provided by Bluemix will not be available.)

manifest.yml:
```
---
applications:
- name: helloworld
  mem: 128M
  instances: 1
  path: .
  host: helloworld
  buildpack: https://github.com/heroku/heroku-buildpack-nodejs.git
  command: node app
```

package.json
```
{
  "name": "helloworld",
  "version": "1.0.0",
  "main": "./app.js",
  "scripts": {
    "start": "node app"
  },
  "author": "James M Snell <jasnell@gmail.com>",
  "license": "MIT",
  "dependencies": {
    "redis": "^0.12.1"
  },
  "engines": {
    "iojs" : "*"
  }
}
```

Source: `https://developer.ibm.com/bluemix/2015/01/20/using-io-js-bluemix/`

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify`
 __»__ For help run: `{appname} help
