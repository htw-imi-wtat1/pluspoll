import React from 'react';
import { render } from '@testing-library/react';
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
test('renders pollcreator', () => {
    const { getByText } = render(<PollCreator poll =  {poll} />);
    const linkElement = getByText(/Create a new Poll/i);
    expect(linkElement).toBeInTheDocument();
});
