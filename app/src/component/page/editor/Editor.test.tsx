import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './Editor';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Content/i);
  expect(linkElement).toBeInTheDocument();
})
