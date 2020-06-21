# PlusPoll

Example project for React & Express & Socket.io

## Usage

### Development

Start Backend server with 

    node backend/server.js
    
Start dev frontend server with

    yarn start
    
(api requests to the backend are proxied)

## Created with create-react-app

    npx create-react-app pollplus

moved the generated README to [./doc/create-react-app-readme.doc](./doc/create-react-app-readme.doc)

## Add Express


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

https://www.valentinog.com/blog/socket-react/