import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  padding: 20px;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 330px;
  }
`;

export const MainContent = styled.div`
`;

export const Sidebar = styled.div`
  @media (max-width: 767px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;  
`;

export const LastNewsContainer = styled.div`
  margin: 24px;
  border-radius: 4px;
  top: 210px;
  padding: 24px;
  gap: 24px;
  border-radius: 8px;
  background-color: #F4F4FA;
  width: 80%;
`;

export const NewsCardWrapper = styled.div`
  margin-bottom: 12px; 
`;