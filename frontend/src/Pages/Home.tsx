import React, { useState, useRef } from 'react';
import Header from '../Components/Header/Header';
import Divider from '../Components/Divider/Divider';
import Footer from '../Components/Footer/Footer';
import Card from '../Components/Card/Card';
import CardLastNews from '../Components/CardLastNews/CardLastNews';
import useNewsFetcher from '../Hooks/useNewsFetcher';
import useAuthorsFetcher from '../Hooks/useAuthorsFetcher';
import { ButtonContainer, Container, LastNewsContainer, MainContent, NewsCardWrapper, Sidebar } from './Home.styles';
import ButtonOptions from '../Components/ButtonOptions/ButtonOptions';

const Home: React.FC = () => {
  const [selectedAuthor, setSelectedAuthor] = useState('');
  const [sortByDate, setSortByDate] = useState(false);
  const { news, loading: newsLoading, error: newsError } = useNewsFetcher();
  const { authors } = useAuthorsFetcher();
  const newsRef = useRef<HTMLDivElement>(null);

  const handleSelectAuthor = (authorName: string) => {
    setSelectedAuthor(prevAuthor => prevAuthor === authorName ? '' : authorName);
  };
  
  const handleSelectOrder = (order: string) => {
    setSortByDate(order === 'Mais recente');
  };

  const handleIconClick = (icon: string) => {
    if (icon === 'linkedin') {
      window.open('https://www.linkedin.com', '_blank');
    } else if (icon === 'twitter') {
      window.open('https://www.twitter.com', '_blank');
    } else {
      newsRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const uniqueAuthorPosts = news
    .filter(post => (!selectedAuthor || authors.find(author => author.nome === selectedAuthor)?.id === post.autor_id))
    .sort((a, b) => {
      if (sortByDate) {
        return new Date(b.data_noticia).getTime() - new Date(a.data_noticia).getTime();
      } else {
        return 0;
      }
    })
    .map(post => {
      const author = authors.find(a => a.id === post.autor_id);
      return { author, post };
    });

  return (
    <>
      <Header />
      <Container>
        <MainContent ref={newsRef}>
          <ButtonContainer>
            <ButtonOptions
              mainText="Filtrar por Autor"
              options={authors.map(author => author.nome)}
              onSelectOption={handleSelectAuthor}
            />
            <ButtonOptions
              mainText="Ordenar por"
              options={["Mais recente", "Mais antigo"]}
              onSelectOption={handleSelectOrder}
            />
          </ButtonContainer>
          <Divider />
          {newsLoading ? (
            <p>Carregando...</p>
          ) : newsError ? (
            <p>Ocorreu um erro ao carregar as notícias.</p>
          ) : (
            uniqueAuthorPosts.map(({ author, post }) => (
              <div key={post.id}>
                <Card 
                  author={author?.nome ?? 'Autor Desconhecido'}
                  date={new Date(post.data_noticia).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                  title={post.titulo}
                  body={post.conteudo}
                  onIconClick={handleIconClick}
                />
                <Divider />
              </div>
            ))
          )}
        </MainContent>
        <Sidebar>
          <LastNewsContainer>
            <h2>Últimas notícias</h2>
            {news.slice(0, 4).map(post => (
              <NewsCardWrapper key={post.id}>
                <CardLastNews
                  title={post.titulo} 
                  date={new Date(post.data_noticia).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                  })}
                />
              </NewsCardWrapper>
            ))}
          </LastNewsContainer>
        </Sidebar>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
