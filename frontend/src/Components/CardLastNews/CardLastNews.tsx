import React from 'react';
import { Card, Date, Title } from './CardLastNews.styles';

interface NewsCardProps {
  title: string;
  date: string;
  onClick?: () => void;
}

const CardLastNews: React.FC<NewsCardProps> = ({ title, date, onClick }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card onClick={handleClick}>
      <Title>{title}</Title>
      <Date>{date}</Date>
    </Card>
  );
};

export default CardLastNews;
