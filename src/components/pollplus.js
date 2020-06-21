import React from 'react';

const poll =
    {
        question: 'Please choose an icecream flavor!',
        options: [{name: "rumraisin", label: "Rum-Raisin"},
            {name: "vanilla", label: "Vanilla"},
            {name: "chocolate", label: "Chocolate"},
            {name: "pistachio", label: "Pistachio"}],
        votes: {
            vanilla: false,
            chocolate: false,
            pistachio: false,
            rumraisin: false
        }
    }

class Question extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            text: "",
            editing: true,
            onChange: props.onChange
        }
        this.onChange = this.onChange.bind(this)
        this.keyPress = this.keyPress.bind(this)
        this.startEditing = this.startEditing.bind(this)

    }
    keyPress(e){
        if(e.keyCode === 13){
            const newText = e.target.value
            //console.log('value',newText);
            this.state.onChange(e)
            this.setState({
                text: newText,
                editing: false})
        }
    }
    startEditing(e){
        this.setState({editing: true})
    }
    onChange(e){
       // console.log(e.target.value)
        this.setState({text: e.target.value || ''})
    }
    render(){
        if (this.state.editing) {
            return (<input value = {this.state.text} placeholder="question" onKeyDown={this.keyPress} onChange={this.onChange}/>)
        } else {
            return (<p onClick={this.startEditing}>{this.state.text}</p>)
        }

        }
}
class NewOption extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            onChange: props.onChange
        }
        this.onChange = this.onChange.bind(this)
        this.keyPress = this.keyPress.bind(this)
    }
    keyPress(e){
        if(e.keyCode === 13){
            // console.log('value', e.target.value);
            this.state.onChange(e.target.value)
            this.setState({
                text: ""})
        }
    }
    onChange(e){
        // console.log(e.target.value)
        this.setState({text: e.target.value || ''})
    }
    render(){
    return <div>
        <label>
            + <input value ={this.state.text} placeholder="add option" onKeyDown={this.keyPress} onChange={this.onChange}/>
        </label>
    </div>;
    }
}
    function Option(props){
    return <div>
        <label>
            <input
                name={props.name}
                type="checkbox"
                checked={props.checked}
                onChange={props.onChange} />
            {props.label}
        </label>
    </div>;
    }

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
    }

    render() {
        console.log("re-render")
        console.log(JSON.stringify(this.state))

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
class PollCreator extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this)
        this.state = {options:[]}
        this.openPoll = this.openPoll.bind(this)
        this.setQuestion = this.setQuestion.bind(this)
    }
    openPoll(){
        console.log(JSON.stringify(this.state))
    }
    setQuestion(event){
        const question = event.target.value
        this.setState({question: question})
    }
    render(){
        return(<div>

            <Question onChange = {this.setQuestion} />
            {this.state.options.map((option) => {
            return(<div>{option.label} ({option.name})</div>)
        })}
            <NewOption key="newOption" onChange = {this.addOption}/>
        <button onClick={this.openPoll}>Open Poll</button>
        </div>)
    }
    addOption(newOption){
        const newOptions = this.state.options
        const newOptionName = newOption.replace(/ /g,"_").toLocaleLowerCase()
        newOptions.push({name: newOptionName, label: newOption})
        this.setState({options: newOptions} )
        console.log("add option called: "+newOption)
    }
}



class Poll extends React.Component {
    render() {
        return (<div><PollCreator poll =  {poll} /></div>)
    }
}

class Vote extends React.Component {
    render() {
        return (<div><PollPlus poll =  {poll} /></div>)
    }
}


export {Poll, Vote}