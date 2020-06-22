import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import PollCreator from '../components/pollcreator/PollCreator';

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
test('initial options are shown', () => {
    const { queryByText  } = render(<PollCreator poll =  {poll} />);
    expect(queryByText(/Vanilla/i)).toBeTruthy()

});

test('add option element is there', () => {
    const { debug, queryByPlaceholderText  } = render(<PollCreator poll =  {poll} />);
    //debug()
    expect(queryByPlaceholderText(/add option/i)).toBeTruthy()

});

test('add option is directly added to the component', () => {
    const { debug, queryByPlaceholderText,queryByText  } = render(<PollCreator poll =  {poll} />);
    //debug()
    const newOption = "This is a new Option"
    const addOptionElement = queryByPlaceholderText(/add option/i)
    fireEvent.keyDown(addOptionElement, {key: 'Enter', code: 'Enter', keyCode: 13, charCode: 13, target: { value: newOption } })
    //debug()
    //console.log(addOptionElement.outerHTML)
    expect(queryByText(RegExp(newOption))).toBeTruthy()

});