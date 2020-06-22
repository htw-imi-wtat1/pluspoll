# Notes on the creation of this example app

## Create with create-react-app

    npx create-react-app pollplus

move the generated README to [./doc/create-react-app-readme.md](doc/create-react-app-readme.md)

- see [https://reactjs.org/docs/create-a-new-react-app.html](https://reactjs.org/docs/create-a-new-react-app.html)
## Add Express

It's in [backend](../backend).

## Api Calls, Connecting the Backend

To tunnel backend requests through the front end running on port 3000, two things are necessary:
- proxy in package.json
- header accept = "application/json" to make the dev server use the proxy to the backend

- see Blog Article [How to connect your React app to a backend on the same origin](https://flaviocopes.com/how-to-serve-react-from-same-origin/)
- [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)
- [https://reactjs.org/docs/faq-ajax.html](https://reactjs.org/docs/faq-ajax.html)

## Add React Router
Added react router and used the basic example.
- [Adding a router](https://create-react-app.dev/docs/adding-a-router)
- [Basic Example in react-router](https://reacttraining.com/react-router/web/example/basic)

## Add Socket.io
There are several examples on how to combine express with react and react with express.
### Sleek example for socket.io with two separate servers for Express Backend and React
- blog post [Valentino Gagliardi: ](https://www.valentinog.com/blog/socket-react/),
- this works nicely, here's the source code of my tryout: [https://github.com/htw-imi-wtat1/react-socketio-tryout](https://github.com/htw-imi-wtat1/react-socketio-tryout)

