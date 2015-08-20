----------------------------------------------------------------------
Once you've authenticated, if your account is associated with multiple organizations within Bluemix, you may be prompted to select one.
```
   Authenticating...
   OK

   Select an org (or press enter to skip):
   1. Acme, Inc.
   2. CoolCo

   Org> 2
```

Finally, you will be prompted to select a Bluemix workspace.
```
  Targeted org CoolCo

  Select a space (or press enter to skip):
  1. dev
  2. main

  Space> 1
```

Once you've made your selections, the `cf` tool will confirm your choices and exit.
```
API endpoint:   https://api.eu-gb.bluemix.net (API version: 2.27.0)
User:           sally@example.org
Org:            CoolCo
Space:          dev
```

When you're ready to continue, run `{appname} verify` to verify that you have set the API and logged in correctly.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To verify you have the correct environment, run: `{appname} verify`
 __»__ For help run: `{appname} help`
