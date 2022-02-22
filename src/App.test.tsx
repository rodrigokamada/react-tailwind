import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react tailwind link', () => {
  render(<App />);
  const linkElement = screen.getByText(/react tailwind/i);
  expect(linkElement).toBeInTheDocument();
});
