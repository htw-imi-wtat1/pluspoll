import React from 'react';
import PollCreator from "./pollcreator/PollCreator";
import PollPlus from "./vote/PollPlus";

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