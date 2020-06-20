import React from 'react';

const poll =
    {
        question: 'Please choose an icecream flavor!',
        options: [{name: "rumraisin", label: "Rum-Raisin", checked: false},
            {name: "vanilla", label: "Vanilla", checked: false},
            {name: "chocolate", label: "Chocolate", checked: false},
            {name: "pistachio", label: "Pistachio", checked: false}

        ]
    }
class Option extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: props.key,
            label: props.option.label,
            name: props.option.name,
            checked: props.checked,
            onChange: props.onChange
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.state.onChange(this.state.name, event.target.checked)
        event.preventDefault()
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
            question: props.question,
            options: props.options
        };
        this.optionChecked = this.optionChecked.bind(this);
    }
    optionChecked(name,checked){
            console.log("option checked: "+name+checked)
    }
    render() {
        const newOption = {checked: false}
        return (
            <div>
                <h2>{this.state.question}</h2>
                {this.state.options.map((option) => {
                    return (<Option key={option.name} option={option} onChange = {this.optionChecked}/>)
                })
                }
                <Option key="newOption" option={newOption} readOnly={false}/>
            </div>
        )
    }
}

class Poll extends React.Component {
    render() {
        return (<div><PollPlus question =  {poll.question} options = {poll.options} /></div>)
    }
}

class Vote extends React.Component {
    render() {
        return (<div>Hello! I'm the Vote</div>)
    }
}


export {Poll, Vote}