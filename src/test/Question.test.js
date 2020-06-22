import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import Question from "../components/pollcreator/Question";


test('Question is initially a text field', () => {
    const { debug, getByPlaceholderText, getByText , getByDisplayValue } = render(<Question onChange = {()=>{}} />);
    const question = getByPlaceholderText(/question/i )
    expect(question).toBeTruthy()

    // changing and hitting enter converts it to a h2
    fireEvent.change(question,{target: {value: "another question"}})
    fireEvent.keyDown(question,{key: 'Enter', code: 'Enter', keyCode: 13, charCode: 13})
    const headerElement = getByText(/another question/i)
    expect(headerElement).toBeTruthy()

    // after Clicking, its an input again
    fireEvent.click(headerElement)
    expect(getByDisplayValue(/another question/i)).toBeTruthy()
});