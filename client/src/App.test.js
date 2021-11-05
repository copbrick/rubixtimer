import { render, screen } from '@testing-library/react';
import App from './App';

test('searches for login button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('searches for logout button', () => {
  render(<App />);
  const linkElement = screen.getByText(/Logout/i);
  expect(linkElement).toBeInTheDocument();
});
