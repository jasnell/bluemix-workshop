Using the Latest Version of Node.js

----------------------------------------------------------------------
## HINT
This lesson is optional. To skip or complete this lesson, run `{appname}
verify`.

Aside from using a tool like `node-inspector`, one of the most effective
and straightforward debugging methods available is to enable tracing using
the Bluemix Application Management features:
    `cf set-env helloworld BLUEMIX_APP_MGMT_ENABLE trace`

Once the environment variable is set, you will need to use either the `log4js`
(version `<=0.6.22`), `bunyan` or `ibmbluemix` modules from npm to output
the trace information.

When your application has been modified to output the trace detail, you can
use `cf push` to deploy your modified code to Bluemix and restage. Then,
from within the Bluemix UI, following the steps illustrated in the
developerWorks article, "Node.js debugging with better logs and error filters"
(which you can view by running `{appname} open`), you can dynamically modify
the tracing level for your application. If tracing is configured to output
to the console, running `cf logs appname` will tail the trace log to your
local terminal.

Source: `https://developer.ibm.com/bluemix/2015/06/23/better-node-js-debugging/`

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify`
 __»__ For help run: `{appname} help
