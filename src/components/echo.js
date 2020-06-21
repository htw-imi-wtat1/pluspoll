import React from 'react';
import socketIOClient from "socket.io-client";
import frontend from "../config"

class Echo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            echo: ""
        };
    }

    componentDidMount() {
        const socket  = socketIOClient(frontend.endpoint);
        socket.on("echo", data => {
            console.log("echo received: "+data)
            this.setState({isLoaded: true,
            data: data
            })
        });
        socket.emit("echo","ping")
        this.socket = socket
    }


    render() {
        const { error, isLoaded, data } = this.state;
        console.log("data: "+JSON.stringify(data))
        if (error) {
            return <span>Socket echo yielded error: {error && error.message}
            <br/>(is the backend server started with node server.js?)</span>;
        } else if (!isLoaded) {
            return <span>Waiting for Socket...ّ</span>;
        } else {
            return (
                <span>Socket echo answered to ping: {data}</span>
            );
        }
    }
}
 export default Echo