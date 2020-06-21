import React from 'react';
import socketIOClient from "socket.io-client";
import config from "../config"

config.endpoint = "http://pluspoll.herokuapp.com/"

class Echo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endpoint: config.endpoint,
            error: null,
            isLoaded: false,
            echo: ""
        };
    }

    componentDidMount() {
        const socket  = socketIOClient(config.endpoint);
        socket.on("echo", data => {
            //console.log("echo received: "+data)
            this.setState({isLoaded: true,
            data: data
            })
        });
        socket.emit("echo","ping")
        this.socket = socket
    }


    render() {
        const { error, isLoaded, data } = this.state;
        //console.log("data: "+JSON.stringify(data))
        if (error) {
            return <span>Socket echo yielded error: {error && error.message}
            <br/>(is the backend server started with node server.js?)</span>;
        } else if (!isLoaded) {
            return <span>Trying to connect to {this.state.endpoint}...ّ</span>;
        } else {
            return (
                <span>Socket echo answered to ping: {data} ({config.endpoint})</span>
            );
        }
    }
}
 export default Echo