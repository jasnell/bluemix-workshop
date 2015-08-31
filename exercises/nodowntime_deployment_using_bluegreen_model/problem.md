No-Downtime Deployment Using the Blue-Green Model

----------------------------------------------------------------------
## HINT
This lesson is optional. To skip or complete this lesson, run `{appname}
verify`.

Blue-Green Deployment is a common approach for seamlessly rolling out new
versions of an application without introducing downtime. The approach is
to simply keep the existing application running while a new version is
deployed along side. While both instances are running, a load balancer
evenly distributes traffic between the two. During this time, some users
will see the old version, while others will see the new. When you are
satisfied that everything is working correctly, you can delete the old
instance and all users will be moved to the new app automatically.

Within Bluemix, this can be achieved with three simple commands:
```
    $ cf rename helloworld helloworld-old
    $ cf push
    $ cf delete helloworld-old
```

The first `cf rename` will change the name of the existing application but
will not alter the routes and domains to which it is bound. Renaming occurs
on the backend without affecting any of the exiting users at all. Calling
`cf push` deploys the updated version of the application using the original
configuration. When complete, you will have two separate instances of the
application bound to the same route. Bluemix will automatically load balance
between these two instances. The third command, `cf delete`, deletes the
originally renamed instance of the application. The load balancer would
automatically send all users to the newly deployed version.

Source: `http://jamesthom.as/blog/2014/07/22/zero-downtime-deployments-using-bluemix/`

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify`
 __»__ For help run: `{appname} help
