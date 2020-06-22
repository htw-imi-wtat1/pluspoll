import React from "react";

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
        console.log(e.keyCode)
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
            return (<h2 onClick={this.startEditing}>{this.state.text}</h2>)
        }

    }
}
export default Question