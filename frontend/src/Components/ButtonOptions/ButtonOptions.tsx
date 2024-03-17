import React, { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import { DropdownList, Icon, ListItem, StyledButton } from './ButtonOptions.styles';

interface Props {
  authors: string[];
  onSelectAuthor: (author: string) => void;
}

const ButtonOptions: React.FC<Props> = ({ authors, onSelectAuthor }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <StyledButton onClick={toggleDropdown}>
      Filtrar Autor
      <Icon>
        {isDropdownOpen ? <BsChevronUp /> : <BsChevronDown />}
      </Icon>
      {isDropdownOpen && (
        <DropdownList>
          {authors.map((author, index) => (
            <ListItem key={index} onClick={() => onSelectAuthor(author)}>
              {author}
            </ListItem>
          ))}
        </DropdownList>
      )}
    </StyledButton>
  );
};

export default ButtonOptions;
