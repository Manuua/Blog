import { useState, useEffect } from 'react';

interface Author {
  id: number;
  nome: string;
  email: string;
  linkedin: string | null;
  site: string | null;
  twitter: string | null;
}

const useAuthorsFetcher = (): { authors: Author[]; loading: boolean; error: string | null } => {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAuthors = async (): Promise<void> => {
      try {
        const response = await fetch('http://localhost:8000/autores');
        if (!response.ok) {
          throw new Error('Erro ao obter autores');
        }
        const data: Author[] = await response.json();
        setAuthors(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Ocorreu um erro ao obter os autores');
        }
        setLoading(false);
      }
    };

    fetchAuthors();

    return () => setAuthors([]);
  }, []);

  return { authors, loading, error };
};

export default useAuthorsFetcher;
