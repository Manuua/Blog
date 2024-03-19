import { render, fireEvent, screen } from '@testing-library/react';
import ButtonOptions from './ButtonOptions';

describe('ButtonOptions component', () => {
  const mainText = 'Sort by';
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const mockOnSelectOption = jest.fn(); // Mock function for onSelectOption

  test('renders main text', () => {
    render(<ButtonOptions mainText={mainText} options={options} onSelectOption={mockOnSelectOption} />);
    expect(screen.getByText(mainText)).toBeInTheDocument();
  });

  test('dropdown opens and closes on button click', () => {
    render(<ButtonOptions mainText={mainText} options={options} onSelectOption={mockOnSelectOption} />);

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();

    fireEvent.click(screen.getByText(mainText));

    // Dropdown should now be open
    expect(screen.getByText(options[0])).toBeInTheDocument();

    fireEvent.click(screen.getByText(mainText));

    expect(screen.queryByText(options[0])).not.toBeInTheDocument();
  });

  test('calls onSelectOption when an option is clicked', () => {
    render(<ButtonOptions mainText={mainText} options={options} onSelectOption={mockOnSelectOption} />);

    fireEvent.click(screen.getByText(mainText));

    fireEvent.click(screen.getByText(options[0]));

    expect(mockOnSelectOption).toHaveBeenCalledWith(options[0], false);
  });
});
