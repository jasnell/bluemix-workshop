Using a Custom Domain Name

----------------------------------------------------------------------
## HINT
This lesson is optional. To skip or complete this lesson, run `{appname}
verify`.

When you deploy an application to Bluemix it will, by default, be assigned
a sub-domain under the shared `*.mybluemix.net` host. For many applications,
this shared domain space works well but in most cases, you'll want to use
your own domain. Bluemix makes it quite simple.

First, use the the `cf create-domain` command to create a domain record in
your account (e.g. `myorg`):
    `cf create-domain myorg example.org`

Once created, use the `cf map-route` to associate the domain with a specific
application instance. You can map the application to the domain directly or
create a new sub-domain. The following, for instance, maps the `helloworld`
application to the domain `http://helloworld.example.org`:
    `cf map-route helloworld example.org -n helloworld`

Once the route has been created, you will need to create a `CNAME` entry in
your DNS Management tool to point the `helloworld.example.org` domain to the
application running in Bluemix:
    `helloworld.example.org CNAME 1h helloworld.mybluemix.net`

Using the Bluemix UI, you can upload TLS/SSL certificates to secure your
custom domain to allow https access.

----------------------------------------------------------------------

 __»__ To print these instructions again, run: `{appname} print`
 __»__ To view the Bluemix Documentation, run: `{appname} open`
 __»__ To verify your work, run: `{appname} verify`
 __»__ For help run: `{appname} help
