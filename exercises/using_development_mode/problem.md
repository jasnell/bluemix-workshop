Using Development Mode

----------------------------------------------------------------------
## HINT
This lesson is optional. To skip or complete this lesson, run `{appname}
verify`.

Development Mode is an extension to the Cloud Foundry command line client
that enables additional commands for Bluemix application developers. The
plugin is not specific to Node.js development, but can prove quite useful.

To install:
```
    $ cf add-plugin-repo bluemix http://plugins.ng.bluemix.net
    $ cf repo-plugins
    $ cf install-plugin dev_mode -r bluemix
```

Once installed, use the command `cf mode helloworld dev` to put the
`helloworld` application into "development mode". Note that this will
cause your application to be restaged and restarted. Once the application
comes back up, the additional developer mode functionality will be enabled.

For instance, if you are working to debug your application and have made a
change to a single file that needs to be tested, you can upload just the
one file using the `cf update-file` command:
    `cf update-file helloworld <remote path> <local path>`

You can then restart your application without forcing the container to be
reconstructed using the `cf restart-inplace helloworld` command.

Once you're done with development, be sure to switch your application back to
production mode using `cf mode helloworld normal`

Source: `https://www.ng.bluemix.net/docs/cli/plugins/dev_mode/index.html`

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify`
 __»__ For help run: `{appname} help
