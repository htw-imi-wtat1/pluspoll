import React from "react";
import socketIOClient from "socket.io-client";
import Question from "./Question"
import NewOption from "../shared/NewOption";
import label2Option from "../shared/label2Option";
import frontend from "../../config";

class PollCreator extends React.Component {
    constructor(props) {
        super(props);
        const socket  = socketIOClient(frontend.endpoint);
        socket.on("FromAPI", data => {
            console.log("received: "+JSON.stringify(data))
        });
        const options = props.poll.options || []
        this.addOption = this.addOption.bind(this)
        this.state = {options: options, socket: socket}
        this.openPoll = this.openPoll.bind(this)
        this.setQuestion = this.setQuestion.bind(this)
    }
    componentDidMount(){
        //  this.setState(
    }
    openPoll(){
        //console.log(JSON.stringify(this.state))
        this.state.socket.emit('newPoll', {
            question: this.state.question,
            options: this.state.options
        })
    }
    setQuestion(event){
        const question = event.target.value
        this.setState({question: question})
    }
    render(){
        return(<div>
            <h3>Create a new Poll</h3>
            <Question onChange = {this.setQuestion} />
            {this.state.options.map((option) => {
                return(<div key = {option.name} >{option.label} ({option.name})</div>)
            })}
            <NewOption key="newOption" onChange = {this.addOption}/>
            <button onClick={this.openPoll}>Open Poll</button>
        </div>)
    }
    addOption(newOption){
        const newOptions = this.state.options
        newOptions.push(label2Option(newOption))
        this.setState({options: newOptions} )
        console.log("add option called: "+newOption)
    }
}
export default PollCreator