import { render, screen } from '@testing-library/react';
import App from './App';

it ('should renders Home component', () => {
  render(<App />);
  expect(screen.getByText('Filtrar por Autor')).toBeInTheDocument();
});
