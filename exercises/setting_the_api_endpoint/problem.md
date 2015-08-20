Install the API Endpoint and Login

----------------------------------------------------------------------
## HINTS

The `cf` command line client interacts with Bluemix using the Cloud Foundry
API. Now that you have `cf` installed, you need to set the API endpoint and
login using your Bluemix credentials. The API endpoint is the URL of the
Bluemix service. Bluemix applications can be deployed to different geographical
territories called regions. Each region has it's own separate URL.

Currently, there are two supported Bluemix regions:

* US South (`us-south`): `https://api.ng.bluemix.net`
* Europe United Kingdom (`eu-gb`): `https://api.eu-gb.bluemix.net`

To set the region, use the `cf api` command:
  `$ cf api https://api.eu-gb.bluemix.net`

The `cf` tool will respond with the status of the operation:
```
   Setting api endpoint to https://api.eu-gb.bluemix.net...
   OK

   API endpoint:   https://api.eu-gb.bluemix.net (API version: 2.27.0)
   Not logged in. Use 'cf login' to log in.
```

Note that the tool lets you know that you still need to login. Type `cf login`
and press enter. You will be prompted to enter the email address you used to
signup for Bluemix and your chosen password.

       (run `{appname} more` to view additional information)

When you're ready to continue, run `{appname} verify` to verify that you have
set the API and logged in correctly.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view additional information, run: `{appname} more`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify`
 __»__ For help run: `{appname} help`
