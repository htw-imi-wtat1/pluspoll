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

https://devcenter.heroku.com/articles/node-websockets
location.origin - cannot be used

heroku config.set REACT_APP_ENDPOINT=http://pluspoll.herokuapp.com

      - .:/usr/src/pluspoll
      - /usr/src/pluspoll/node_modules