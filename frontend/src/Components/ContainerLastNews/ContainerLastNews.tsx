import React from 'react';
import { NewsContainer } from './ContainerLastNews.styles';

interface NewsContainerProps {
  children: React.ReactNode;
}

const ContainerLastNews: React.FC<NewsContainerProps> = ({ children }) => {
  return (
    <NewsContainer>
      {children}
    </NewsContainer>
  );
};

export default ContainerLastNews;
