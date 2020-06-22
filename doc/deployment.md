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

    yarn build
    
Compiles the React app into static files. Thus, 
the simplest approach is to just have express serve the build folder as 
static asset: 

    app.use(express.static(path.join(__dirname, '..','build')))
    

# Socket.io 

## Socket.io on Heroku

- [https://devcenter.heroku.com/articles/node-websockets](https://devcenter.heroku.com/articles/node-websockets)
 suggests location.origin but this cannot be used (linter errors.)

Solution: set server via environment variable - this has to be set
at __build__ time. (the bundle in the browser can't read them at run time!)
The env variable has to start with REACT_APP_ - all others are ignored.

heroku config.set REACT_APP_ENDPOINT=https://pluspoll.herokuapp.com

Documentation: [https://create-react-app.dev/docs/adding-custom-environment-variables](https://create-react-app.dev/docs/adding-custom-environment-variables)

