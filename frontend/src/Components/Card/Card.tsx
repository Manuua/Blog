// components/Post.tsx

import React from 'react';
import styled from 'styled-components';

// Estilizando o componente de post usando Styled Components
const PostContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #333;
`;

const Body = styled.p`
  color: #666;
`;

interface PostProps {
  title: string;
  body: string;
}

const Post: React.FC<PostProps> = ({ title, body }) => {
  return (
    <PostContainer>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </PostContainer>
  );
};

export default Post;
