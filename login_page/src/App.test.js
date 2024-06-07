import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Login Page', () => {
  render(<App />);
  const headingElement = screen.getByText(/Login Page/i);
  expect(headingElement).toBeInTheDocument();
});