import { useState, useEffect } from 'react';

interface News {
  autor_id: number;
  conteudo: string;
  data_noticia: string;
  id: number;
  titulo: string;
}

const useNewsFetcher = () => {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:8000/noticias');
        if (!response.ok) {
          throw new Error('Erro ao obter notícias');
        }
        const data = await response.json();
        setNews(data);
        setLoading(false);
      } catch (error) {
        setError((error as Error).message);
        setLoading(false);
      }
    };

    fetchNews();

    return () => setNews([]);
  }, []);

  return { news, loading, error };
};

export default useNewsFetcher;
