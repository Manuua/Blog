import React from 'react';
import styled from 'styled-components';

// Defina as interfaces para as propriedades do componente
interface NewsContainerProps {
  children: React.ReactNode; // Permitir que o container contenha outros componentes como filhos
}

// Estilos para o container de notícias
const NewsContainer = styled.div`
  width: 330px;
  height: 677px;
  padding: 24px;
  gap: 24px;
  border-radius: 8px;
  background-color: #F2F2F2; /* Adiciona uma cor de fundo ao container */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Espaço entre os cards */
`;

// Componente de container de notícias
const NewsCardContainer: React.FC<NewsContainerProps> = ({ children }) => {
  return (
    <NewsContainer>
      {children}
    </NewsContainer>
  );
};

export default NewsCardContainer;
