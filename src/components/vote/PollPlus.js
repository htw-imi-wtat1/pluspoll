import React from "react";

import Option from './Option'
import NewOption from "../shared/NewOption";
import label2Option from "../shared/label2Option";

import socketIOClient from "socket.io-client";

const ENDPOINT = "http://127.0.0.1:3001";

class PollPlus extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            question: props.poll.question,
            options: props.poll.options,
            votes: props.poll.votes
        };
        //this.optionChecked = this.optionChecked.bind(this);
        this.createHandler = this.createHandler.bind(this)
        this.addOption = this.addOption.bind(this)
    }
    componentDidMount(){
        const socket  = socketIOClient(ENDPOINT);
        socket.on("addOption", data => {
            console.log("new option received: "+JSON.stringify(data))
            const options = this.state.options
            options.push(data)
            console.log("options "+JSON.stringify(options))
            this.setState({options: options})

        });
        this.socket = socket
    }
    createHandler(name){
        const optionChecked = (event) => {
            const checked = event.target.checked
            const currentVotes = this.state.votes
            currentVotes[name] = checked
            console.log("option checked: "+name+checked)
            console.log(JSON.stringify(currentVotes))
            this.setState({votes: currentVotes})
        }
        return optionChecked
    }
    addOption(newOption){
        console.log("add option called: "+newOption)
        this.socket.emit("addOption",label2Option(newOption))
    }

    render() {
        console.log("re-render")
        // console.log(JSON.stringify(this.state))

        return (
            <div>
                <h2>{this.state.question}</h2>
                {this.state.options.map((option) => {
                    const votes = this.state.votes
                    return (<Option key = {option.name} name ={option.name} label = {option.label} checked={votes[option.name]} onChange = {this.createHandler(option.name)}/>)
                })}
                <NewOption key="newOption" onChange = {this.addOption}/>

            </div>
        )
    }
}
export default PollPlus