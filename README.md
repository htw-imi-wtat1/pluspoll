# PlusPoll

 ![CI](https://github.com/htw-imi-wtat1/pluspoll/workflows/CI/badge.svg) | [Preview on Heroku](https://pluspoll.herokuapp.com/)

Example project for combining [React](https://reactjs.org/), [Express](https://expressjs.com/) and [Socket.io](https://socket.io/).

It's based on [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) with a small express backend in the [backend folder](./backend) serving
the api and hosting the socket.io server.

[create-react-app](https://reactjs.org/docs/create-a-new-react-app.html) hides all configuration in its dependencies, with little to no hooks to modify this configuration.
The strategy for this app is to live with the defaults and alter nothing.

# This App is not completed!
It contains two main pages containing the two main components,
PollCreator to create polls and PollPlus for the actual 
running poll with the possibility to add poll options that
are pushed to all other poll participants. 

The transfer of the new poll options works via socket.io, 
as does the (only local) re-rendering of the PollCreator 
when options are added.
There is no more functionality, and no database connection yet!

The start page tests the connections to the backend and the socket.io 
server. 

There are [examples for tests](./doc/testing-react.md), a completely
configured [deployment to heroku and dockerization](./doc/deployment.md)
as well as [notes on the creation and how to combine express, react and socket.io.](./doc/app-creation.md)


## Usage

### Development

Start Backend server and a mongo db in docker with

    node backend/server.js
    make justdb

Start dev frontend server with

    yarn start

This spins up a second server which reloads the page
on changes in the source code. The backend is declared
as a proxy; thus, unknown requests e.g. to the api/
are forwarded to the express backend.
(see [Proxying API Requests in Development](https://create-react-app.dev/docs/proxying-api-requests-in-development/))


### Production / Docker

You can start the app in docker by running

    make start

or if you dont want to use make you can just copy the docker commands
     in [makefile](./makefile) and run them manually, e.g.

    docker-compose up -d

