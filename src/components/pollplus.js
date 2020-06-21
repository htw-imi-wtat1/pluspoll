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
            pistachio: true,
            rumraisin: false
        }
    }

class Option extends React.Component {
    constructor(props) {
    console.log("Option constructor"+props.name+props.checked)
        super(props);

        this.state = {
            name: props.name,
            label: props.label,
            checked: props.checked,
            onChange: props.onChange
        };
        //console.log("state"+JSON.stringify(this.state))
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.state.onChange(this.state.name, event.target.checked)

    }
    render(){

    return(<div>
        <label>
            <input
                name={this.state.name}
                type="checkbox"
                checked={this.state.checked}
                onChange={this.handleChange} />
            {this.state.label}
        </label>
            </div>)
    }
}
class PollPlus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: props.poll.question,
            options: props.poll.options,
            votes: props.poll.votes
        };
        this.optionChecked = this.optionChecked.bind(this);
    }
    optionChecked(key,checked){
        const currentVotes = this.state.votes
        currentVotes[key] = checked
        console.log("option checked: "+key+checked)
        console.log(JSON.stringify(currentVotes))
        this.setState({votes: currentVotes})
    }
    render() {
        console.log("re-render")
        console.log(JSON.stringify(this.state))
        const newOption = {checked: false}
        return (
            <div>
                <h2>{this.state.question}</h2>
                {this.state.options.map((option) => {
                    const votes = this.state.votes
                    return (<Option key = {option.name} name ={option.name} label = {option.label} checked={votes[option.name]} onChange = {this.optionChecked}/>)
                })}
                <Option key="newOption" option={newOption} readOnly={false}/>

            </div>
        )
    }
}

class Poll extends React.Component {
    render() {
        return (<div><PollPlus poll =  {poll} /></div>)
    }
}

class Vote extends React.Component {
    render() {
        return (<div>Hello! I'm the Vote</div>)
    }
}


export {Poll, Vote}