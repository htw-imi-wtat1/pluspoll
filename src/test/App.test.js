import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders create poll link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Create Poll/i);

});
