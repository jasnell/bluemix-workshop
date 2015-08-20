Creating a Bluemix Service Instance

----------------------------------------------------------------------
## HINTS

One of the most powerful features of the Bluemix environment are the host of
additional services that are available. If you need analytics, data store,
mobile device registration and security, single signon, push notifications, and
so on, services can be easily provisioned into your account and bound to your
applications. Bluemix takes care of the configuration and maintenance of these
services. In this exercise, you'll create a redis service instance. Start, by
entering the command:
    `cf marketplace`

This fetches the complete listing of services from Bluemix. Note that the
command may take a minute to complete.

The specific service we are interested in as part of this exercise is the
`rediscloud` service. Use the following command to get specific details about
the `rediscloud` service:
    `cf marketplace -s rediscloud`

You should get back a listing of the service plans supported by the
`rediscloud` service. We are going to use the free 30mb service plan for this
exercise. To do so, run the command:
    `cf create-service rediscloud 30mb myrediscloud`

If the command was successful you will be rewarded with a simple `OK` message.

Once you've created the service instance, run `{appname} verify myrediscloud`
to complete this exercise.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify myrediscloud`
 __»__ For help run: `{appname} help
