interface Author {
  id: number;
  nome: string;
  email?: string;
  linkedin?: string | null;
  site?: string | null;
  twitter?: string | null;
}

export default Author;
