import React from 'react';
import { FaLinkedin, FaTwitter, FaLink } from 'react-icons/fa';
import { AuthorContainer, AuthorName, BodyText, Container, GrayIconContainer, PostDate, StyledPost, TitleText } from './Card.styles';

interface PostProps {
  author: string;
  date: string;
  title: string;
  body: string;
  onIconClick: (icon: string) => void;
}

const Card: React.FC<PostProps> = ({ author, date, title, body, onIconClick }) => {
  
  const handleIconClick = (icon: string) => {
    onIconClick(icon);
  };

  return (
    <StyledPost>
      <AuthorContainer>
        <AuthorName>{author}</AuthorName>
        <Container>
          <GrayIconContainer onClick={() => handleIconClick('linkedin')}>
            <FaLinkedin size={24} />
          </GrayIconContainer>
          <GrayIconContainer onClick={() => handleIconClick('twitter')}>
            <FaTwitter size={24} />
          </GrayIconContainer>
          <GrayIconContainer onClick={() => handleIconClick('link')}>
            <FaLink size={24} />
          </GrayIconContainer>
        </Container>
      </AuthorContainer>
      <PostDate>{date}</PostDate>
      <TitleText>{title}</TitleText>
      <BodyText>{body}</BodyText>
    </StyledPost>
  );
};

export default Card;
