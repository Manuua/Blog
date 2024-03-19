import express from 'express';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const router = express.Router();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: 5432,
});


router.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM autores');
    const autores = result.rows;
    client.release();
    res.json(autores);
  } catch (error) {
    console.error('Erro ao obter autores:', error);
    res.status(500).json({ message: 'Erro ao obter autores' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { nome, email } = req.body;
    const client = await pool.connect();
    const result = await client.query('INSERT INTO autores (nome, email) VALUES ($1, $2) RETURNING *', [nome, email]);
    const novoAutor = result.rows[0];
    client.release();
    res.json({ message: 'Autor criado com sucesso', autor: novoAutor });
  } catch (error) {
    console.error('Erro ao criar autor:', error);
    res.status(500).json({ message: 'Erro ao criar autor' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM autores WHERE id = $1', [id]);
    const autor = result.rows[0];
    client.release();
    res.json(autor);
  } catch (error) {
    console.error('Erro ao obter autor por ID:', error);
    res.status(500).json({ message: 'Erro ao obter autor por ID' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, email } = req.body;
    const client = await pool.connect();
    const result = await client.query('UPDATE autores SET nome = $1, email = $2 WHERE id = $3 RETURNING *', [nome, email, id]);
    const autorAtualizado = result.rows[0];
    client.release();
    res.json({ message: 'Autor atualizado com sucesso', autor: autorAtualizado });
  } catch (error) {
    console.error('Erro ao atualizar autor:', error);
    res.status(500).json({ message: 'Erro ao atualizar autor' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    const result = await client.query('DELETE FROM autores WHERE id = $1 RETURNING *', [id]);
    const autorExcluido = result.rows[0];
    client.release();
    res.json({ message: 'Autor excluído com sucesso', autor: autorExcluido });
  } catch (error) {
    console.error('Erro ao excluir autor:', error);
    res.status(500).json({ message: 'Erro ao excluir autor' });
  }
});

export default router;
