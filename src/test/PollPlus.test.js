import React from 'react';
import snapshotRenderer from 'react-test-renderer'
import PollPlus from '../components/vote/PollPlus';


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
test('renders poll creator', () => {
    const component = snapshotRenderer.create(
        <PollPlus poll =  {poll} />
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    const newQuestion = "What's your favourite programming language?"
});
