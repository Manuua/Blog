import React from 'react';
import styled from 'styled-components';
import logoHeader from '../../assets/logoHeader.svg';

// Estilizando o cabeçalho
const HeaderContainer = styled.header`
  background-color: #FFFFFF;
  padding: 20px;
  display: flex;
  align-items: center;
  height: 82px;
`;

const Logo = styled.img`
  width: 100px; /* Ajuste conforme necessário */
  height: auto; /* Isso garante que a proporção seja mantida */
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logoHeader} alt="Logo" />
    </HeaderContainer>
  );
};

export default Header;
