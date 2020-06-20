# PlusPoll

Example project for React & Express & Socket.io

## Usage

### Development

Start Backend server with 

    node server.js
    
Start dev frontend server with

    yarn start
    
(api requests to the backend are proxied)

## Created with create-react-app

    npx create-react-app pollplus

moved the generated README to [./doc/create-react-app-readme.doc](./doc/create-react-app-readme.doc)

## Add Express


## Api Calls

https://reactjs.org/docs/faq-ajax.html

To tunnel backend requests through the front end running on port 3000, two things are necessary:
- proxy in package.json
- header accept = "application/json" to make the dev server use the proxy to the backend

