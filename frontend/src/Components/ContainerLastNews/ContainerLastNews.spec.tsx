import React from 'react';
import { render, screen } from '@testing-library/react';
import ContainerLastNews from './ContainerLastNews';

describe('NewsCardContainer', () => {
  it('renders children correctly', () => {
    
    const mockChild = <div data-testid="mock-child">Mock Child</div>;

    render(
      <ContainerLastNews>
        {mockChild}
      </ContainerLastNews>
    );

    expect(screen.getByTestId('mock-child')).toBeInTheDocument();
  });
});
