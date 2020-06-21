import React from "react";

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
export default NewOption