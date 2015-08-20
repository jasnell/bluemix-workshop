Using Bluemix Live Sync (Optional)

----------------------------------------------------------------------
## HINTS
This lesson is optional. To skip or complete this lesson, run `{appname} verify`.

Bluemix Live Sync is an add-on utility that allows local project changes to be
synchronized with an application instance running on Bluemix without having to
redeploy. The tool is currently available for Windows and Mac OSX devices only
and can be downloaded from:
  `https://www.ng.bluemix.net/docs/manageapps/bluemixlive.html#bluemixlive`

Once installed, use of the tool is straightforward:

From the command line, log in with your Bluemix id and password:

    `bl login -u {email} -p {password}`

View the list of projects that are available for Bluemix Live Sync
synchronization:

    `bl projects`

Synchronize your local environment with your project on Bluemix:

    `bl sync projectName -d localDirectory --verbose`

Remember to set `projectName` to your actual project name and `localDirectory`
to the local project path.

From a separate command line window and within the local project directory,
deploy the application to Bluemix in Live Edit mode using the command:

    `bl start`

When files in the local project directory are updated, the changes are
automatically propagated to the application running on Bluemix.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify`
 __»__ For help run: `{appname} help
