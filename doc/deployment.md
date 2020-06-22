# Deployment

There are several ways the express backend and the react frontend could
be deployed (and organized in source code)
- e.g. served from the same server instance or different ones.

The approach of this app is having a (small) backend within the
app created by create-react-app. This is mainly done to stay with
the zero-configuration approach and avoiding having to configure
babel and webpack manually. Having just one server is also easier to deploy.

If you want to dig deeper in how to organize backend and frontend,
do some reading on microservices and monorepo pro/con.
E.g. Martin Fowler (2015): [MonolithFirst](https://martinfowler.com/bliki/MonolithFirst.html)


While in development the frontend is served by a specific server enabling
automatic reloads, for production deployment the react frontend is compiled
into a bundle and can be served via the express backend server to keep things
simple. To do so, build the production bundle via:

    yarn build

And have express serve the static files contained in this folder:

    app.use(express.static(path.join(\__dirname, '..','build')))


# Socket.io

The client needs one bit of information: The endpoint to connect to.
In development, it's usually http://localhost:<port>. For production, it's the actual
server name and port. (Note that while testing this, your browser socket io library
will happily connect to any local server you have still running even though
the site is served by heroku!)

To include this configuration in the react app, it needs to be present __at build time__!

yarn build will pick up environment variables starting with REACT_APP_ -
see the Documentation: [https://create-react-app.dev/docs/adding-custom-environment-variables](https://create-react-app.dev/docs/adding-custom-environment-variables)

## Socket.io on Heroku

- [https://devcenter.heroku.com/articles/node-websockets](https://devcenter.heroku.com/articles/node-websockets)
 suggests location.origin but this cannot be used (linter errors.)

Solution: set server via environment variable - this has to be set
at __build__ time, see above (the bundle in the browser can't read them at run time!)
The env variable has to start with REACT_APP_ - all others are ignored.

heroku config.set REACT_APP_ENDPOINT=https://pluspoll.herokuapp.com


## Socket.io in docker

In order to set the socket.io connection variable, it needs to be set
during build time in the docker container. You find the example in the [Dockerfile](./Dockerfile)

See:
- https://create-react-app.dev/docs/deployment/#customizing-environment-variables-for-arbitrary-build-environments
- https://create-react-app.dev/docs/deployment/
