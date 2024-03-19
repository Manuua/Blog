import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CardLastNews from './CardLastNews';

describe('CardLastNews', () => {
  it('should renders correctly', () => {
    const testProps = {
      title: 'Test Title',
      date: '2024-03-20',
      onClick: jest.fn(),
    };

    render(<CardLastNews {...testProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('2024-03-20')).toBeInTheDocument();
  });

  it('calls onClick when clicked', () => {
    
    const testProps = {
      title: 'Test Title',
      date: '2024-03-20',
      onClick: jest.fn(),
    };

    render(<CardLastNews {...testProps} />);
    fireEvent.click(screen.getByText('Test Title'));

    expect(testProps.onClick).toHaveBeenCalledTimes(1);
  });
});
