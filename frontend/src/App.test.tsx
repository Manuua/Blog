import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Home component', () => {
  render(<App />);
  const homeElement = screen.getByTestId('home-component');
  expect(homeElement).toBeInTheDocument();
});
