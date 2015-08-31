Using User-Provided Services for Secrets

----------------------------------------------------------------------
## HINT
This lesson is optional. To skip or complete this lesson, run `{appname}
verify`.

One of the more powerful features of Bluemix (and Cloud Foundry in general)
is the support for User-Provided Services. These allow additional resources
required by an application to be kept isolated from the main application,
but bound dynamically through the `cf` command-line client. User-Provided
Services can be used, for instance, to pass environment specific configuration
parameters to multiple applications.

The IBM developerWorks article, "Keeping secrets – how your cloud application
should access credentials and other private data" (which you can view by
running `{appname} open`) illustrates one particularly helpful use of
User-Provided Services for managing shared application secrets.

First, use the `cf cups` command to create your shared secret:
   `cf cups session-secret -p secret`

You will be prompted to provided the value of the `secret` property.

Next, use the `cf bind-service` command to bind the `session-secret` "service"
to your application:
    `cf bind-service helloworld session-secret`

If you application has already been deployed, you'll need to do a `cf restage`
for the changes to take effect. Once the application is deployed, the value
of the `secret` property will be available in your application via the
`VCAP_SERVICES` environment variable.

Source: `https://developer.ibm.com/bluemix/2014/10/14/keeping-secrets-cloud-application-access-credentials-private-data/`

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify`
 __»__ For help run: `{appname} help
