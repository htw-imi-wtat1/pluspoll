import React from 'react';
import { render } from '@testing-library/react';
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
test('renders pollcreator', () => {
    const { getByText } = render(<PollPlus poll =  {poll} />);
    const linkElement = getByText(/Please choose an icecream flavor/i);
    expect(linkElement).toBeInTheDocument();
});
