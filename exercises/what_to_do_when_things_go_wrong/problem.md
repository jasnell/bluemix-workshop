What To Do When Things Go Wrong

----------------------------------------------------------------------
## HINTS
This lesson is optional. To skip or complete this lesson, run `{appname} verify`.

Things can always go wrong. If you deploy your application to Bluemix and it keeps crashing, it can be difficult at times to understand what is happening. Fortunately there are a number of tools available.

First, to view the stdout and stderr logs for an application running on Bluemix, use the `cf logs {app-name} --recent` command. This will return and print the most recent logs to the terminal. If you want to actively monitor the logs, omit the `--recent`.

You can use the `cf events {app-name}` command to view recent events involving your application. This can be helpful to determine the stability of your application in production.

The `cf env`, `cf set-env` and `cf unset-env` commands can be used to view and manipulate the environment variables for the deployed application.

----------------------------------------------------------------------

__»__ To print these instructions again, run: `{appname} print`
__»__ To verify you work, run: `{appname} verify`
__»__ For help run: `{appname} help`
