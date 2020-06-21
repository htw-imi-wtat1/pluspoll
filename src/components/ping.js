import React from 'react';
class Ping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            data: ""
        };
    }

    componentDidMount() {
    fetch('/api/ping',{headers: {accept: 'application/json'}})
            .then(res => {
                    if (res.status === 200) {
                        return res.json()
                    } else {
                        return {status: res.status}
                    }
                }
            )
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        data: result.data,
                        status: result.status
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    console.log("error: "+error)
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, data, status } = this.state;
        console.log("data: "+JSON.stringify(data))
        if (error || (status === 500)) {
            return <span>Pinging Backend yielded Error: {error && error.message}, Status: {status}
            <br/>(is the backend server started with node server.js?)</span>;
        } else if (!isLoaded) {
            return <span>Pinging Backend...</span>;
        } else {
            return (
                <span>Backend answered to ping: {data}</span>
            );
        }
    }
}
 export default Ping