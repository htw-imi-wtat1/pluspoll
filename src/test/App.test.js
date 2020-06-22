import React from 'react';
import {  render , fireEvent } from '@testing-library/react';
import App from '../App';

test('renders create poll link', () => {
  const { getByText, debug } = render(<App />);
  const linkElement = getByText(/Create Poll/i);
  fireEvent.click(linkElement)
  //debug()

});
