import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #ECECF4;
  color: #58595D;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

export const InnerFooter = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const CopyrightText = styled.p`
  margin-right: 18px;
  padding: 4px;
`;

export const Logo = styled.img`
  height: 38px;
  margin-left: 18px;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
