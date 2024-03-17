// pages/Home.tsx

import React from 'react';
import styled from 'styled-components';
import Post from '../Components/Card/Card';
import Divider from '../Components/Divider/Divider';
import Header from '../Components/Header/Header';


// Dados simulados de posts do blog
const posts = [
  {
    id: 1,
    title: 'Post 1',
    body: 'Conteúdo do post 1...',
  },
  {
    id: 2,
    title: 'Post 2',
    body: 'Conteúdo do post 2...',
  },
  // Adicione mais posts aqui, se desejar
];

// Estilizando o container da página usando Styled Components
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Home: React.FC = () => {
  return (
    <><Header />
    <Container>
          <h1>Meu Blog</h1>
          {posts.map(post => (
              <div key={post.id}>
                  <Post title={post.title} body={post.body} />
                  <Divider />
              </div>
          ))}
      </Container></>
  );
};

export default Home;
