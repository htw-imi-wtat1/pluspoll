# PlusPoll

Example project for React & Express & Socket.io
It's based on create-react-app with a small (new) express backend in the [backend folder](../backend) serving
the api and hosting the socket.io server.

create-react-app hides all configuration in its dependencies, with little to no hooks to modify this configuration.
The strategy for this app is to live with the defaults and alter nothing.

## Usage

### Development

Start Backend server with

    node backend/server.js

Start dev frontend server with

    yarn start

(api requests to the backend are proxied)

## Configuration

    see [config](../config/)

## Created with create-react-app

    npx create-react-app pollplus

moved the generated README to [./doc/create-react-app-readme.doc](doc/create-react-app-readme.md)

## Add Express

It's in [backend](../backend).

## Api Calls, connecting the Backend

https://reactjs.org/docs/faq-ajax.html

To tunnel backend requests through the front end running on port 3000, two things are necessary:
- proxy in package.json
- header accept = "application/json" to make the dev server use the proxy to the backend

- see Blog Article [How to connect your React app to a backend on the same origin](https://flaviocopes.com/how-to-serve-react-from-same-origin/)
- [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/)

## Add React Router
Added react router and used the basic example.
- [Adding a router](https://create-react-app.dev/docs/adding-a-router)
- [Basic Example in react-router](https://reacttraining.com/react-router/web/example/basic)

## Add Socket.io
There are several examples on how to combine express with react and react with express.
### Sleek example for socket.io with two separate servers for Express Backend and React
- blog post [Valentino Gagliardi: ](https://www.valentinog.com/blog/socket-react/),
- this works nicely, here's the source code of my tryout: [https://github.com/htw-imi-wtat1/react-socketio-tryout](https://github.com/htw-imi-wtat1/react-socketio-tryout)


## Testing

Only started Testing:

* [Testing React with Jest](https://jestjs.io/docs/en/tutorial-react)
* to understand how to test you need to get an idea of the [Testing Library](https://testing-library.com/), more specifically
  its [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
