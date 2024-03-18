import React from 'react';
import logoFooter from '../../assets/logoFooter.svg';
import { CopyrightText, FooterContainer, InnerFooter, Logo } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer>
      <InnerFooter>
        <Logo src={logoFooter} alt="Logo AllowMe News" />
        <CopyrightText>
          Copyright © 2024 AllowMe News. Todos os direitos reservados
        </CopyrightText>
      </InnerFooter>
    </FooterContainer>
  );
};

export default Footer;
