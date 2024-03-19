import { render, screen } from '@testing-library/react';
import Card from './Card';

describe('Card', () => {
  it('renders correctly', () => {
    const testProps = {
      author: 'John Doe',
      date: '2024-03-20',
      title: 'Test Title',
      body: 'Lorem ipsum dolor sit amet.',
      onIconClick: jest.fn(),
    };

    
    render(<Card {...testProps} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('2024-03-20')).toBeInTheDocument();
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Lorem ipsum dolor sit amet.')).toBeInTheDocument();
  });

  
});
