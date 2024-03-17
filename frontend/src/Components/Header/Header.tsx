import React from 'react';
import logoHeader from '../../assets/logoHeader.svg';
import { HeaderContainer, Logo } from './Header.styles';


const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logoHeader} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
