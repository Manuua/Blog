import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});

export const listAuthors = async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM autores');
    const authors = result.rows;
    client.release();
    res.json(authors);
  } catch (error) {
    console.error('Erro ao obter autores:', error);
    res.status(500).json({ message: 'Erro ao obter autores' });
  }
};

export const createAuthor = async (req, res) => {
  try {
    const { nome, email } = req.body;
    const client = await pool.connect();
    const result = await client.query('INSERT INTO autores (nome, email) VALUES ($1, $2) RETURNING *', [nome, email]);
    const newAuthor = result.rows[0];
    client.release();
    res.json({ message: 'Autor criado com sucesso', author: newAuthor });
  } catch (error) {
    console.error('Erro ao criar autor:', error);
    res.status(500).json({ message: 'Erro ao criar autor' });
  }
};

export const getAuthorById = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM autores WHERE id = $1', [id]);
    const author = result.rows[0];
    client.release();
    res.json(author);
  } catch (error) {
    console.error('Erro ao obter autor por ID:', error);
    res.status(500).json({ message: 'Erro ao obter autor por ID' });
  }
};

export const updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const client = await pool.connect();
    const result = await client.query('UPDATE autores SET nome = $1, email = $2 WHERE id = $3 RETURNING *', [nome, email, id]);
    const updatedAuthor = result.rows[0];
    client.release();
    res.json({ message: 'Autor atualizado com sucesso', author: updatedAuthor });
  } catch (error) {
    console.error('Erro ao atualizar autor:', error);
    res.status(500).json({ message: 'Erro ao atualizar autor' });
  }
};

export const deleteAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    const result = await client.query('DELETE FROM autores WHERE id = $1 RETURNING *', [id]);
    const deletedAuthor = result.rows[0];
    client.release();
    res.json({ message: 'Autor excluído com sucesso', author: deletedAuthor });
  } catch (error) {
    console.error('Erro ao excluir autor:', error);
    res.status(500).json({ message: 'Erro ao excluir autor' });
  }
};
