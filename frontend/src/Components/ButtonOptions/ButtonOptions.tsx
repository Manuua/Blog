import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { DropdownList, Icon, ListItem, StyledButton } from './ButtonOptions.styles';

interface Props {
  mainText: string;
  options: string[];
  onSelectOption: (option: string, isDateSort: boolean) => void;
}

const ButtonOptions: React.FC<Props> = ({ mainText, options, onSelectOption }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyledButton onClick={toggleDropdown}>
      {mainText}
      <Icon>
        {isDropdownOpen ? <BsChevronUp /> : <BsChevronDown />}
      </Icon>
      {isDropdownOpen && (
        <DropdownList>
          {options.map((option, index) => (
            <ListItem key={index} onClick={() => onSelectOption(option, false)}>
              {option}
            </ListItem>
          ))}
        </DropdownList>
      )}
    </StyledButton>
  );
};

export default ButtonOptions;
