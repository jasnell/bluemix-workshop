Using node-inspector to debug

----------------------------------------------------------------------
## HINT

When things do go wrong, it's always helpful to have a debugging tool.
Fortunately, Node.js applications deployed to Bluemix have built-in
support for `node-inspector`, a full-featured debug tool for Node.js
that is built on top of webkit. All you need to do is enable it:
```
  cf set-env helloworld BLUEMIX_APP_MGMT_ENABLE proxy+devconsole+inspector
  cf restage helloworld
```

When the application comes back up, open your browser and navigate to
`https://helloworld.mybluemix.net/bluemix-debug/manage` and you ought
to be presented with the Bluemix developers console. Click on "Open
Debugger" to launch `node-inspector`

Once you have enabled the `node-inspector`, run `{appname} verify
{bluemix-appname}` to complete this exercise.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify {bluemix-appname}`
 __»__ For help run: `{appname} help
