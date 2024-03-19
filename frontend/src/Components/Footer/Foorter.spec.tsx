import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

jest.mock('../../assets/logoFooter.svg', () => 'logoFooter.svg');

describe('Footer Component', () => {
  it('should render logo and copyright text', () => {
    render(<Footer />);
    expect (screen.getByText('Copyright © 2024 AllowMe News. Todos os direitos reservados')).toBeInTheDocument();
  });
});
