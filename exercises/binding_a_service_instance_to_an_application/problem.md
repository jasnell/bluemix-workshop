Binding a Sevice Instance to an Application

----------------------------------------------------------------------
## HINT

In prior exercises, you created and deployed a simple Node.js web application to Bluemix then created an instance of a redis service. In this exercise you will simply bind that redis service to your web application. We will modify that web application to make use of the redis service in the next exercise.

In order to bind a service instance to the application, you need to know the name of both your application instance and your service instance. For the sake of this example, let's assume that your application name is `helloworld` and your service name is `myrediscloud`. To bind the service, simply enter the command:

    `cf bind-service helloworld myrediscloud`

Note: if you cannot remember the exact name of your application or service, you can list all available apps and services using the commands `cf apps` and `cf services`, respectively

Once you've successfully bound the service instance to the application, run the command `{appname} verify {bluemix-appname} myrediscloud` (substituting in the names of your specific application and service instances) to complete the exercise.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To verify your work, run: `{appname} verify {bluemix-appname} myrediscloud`
 __»__ For help run: `{appname} help
