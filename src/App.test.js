import { render, screen } from '@testing-library/react';
import App from './App';

test('renders greeting for Grammy Sue Sue', () => {
  render(<App />);
  const heading = screen.getByText(/hi grammy sue sue/i);
  expect(heading).toBeInTheDocument();
});
