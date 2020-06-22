import React from 'react';
import {  fireEvent, render } from '@testing-library/react';
import PollCreator from '../components/pollcreator/PollCreator';
import Option from "../components/vote/Option";
import NewOption from "../components/shared/NewOption";

function onChangeCallBack(){}
test('has checkboxes for the choices', () => {
    // add debug to the list to see the generated html
    const {  queryByLabelText, getByLabelText } =
        render(<Option key = "vanilla"  name = "vanilla" label = "Vanilla" checked = {false} onChange = {onChangeCallBack} />);
    //debug()
    expect(queryByLabelText(/Vanilla/i)).toBeTruthy()
    fireEvent.click(getByLabelText(/Vanilla/i));

});


