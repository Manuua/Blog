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

// Rota para listar todas as notícias
router.get('/', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM noticias');
    const noticias = result.rows;
    client.release();
    res.json(noticias);
  } catch (error) {
    console.error('Erro ao obter notícias:', error);
    res.status(500).json({ message: 'Erro ao obter notícias' });
  }
});

// Rota para criar uma nova notícia
router.post('/', async (req, res) => {
  try {
    const { autor_id, titulo, data_noticia, conteudo } = req.body;
    const client = await pool.connect();
    const result = await client.query('INSERT INTO noticias (autor_id, titulo, data_noticia, conteudo) VALUES ($1, $2, $3, $4) RETURNING *', [autor_id, titulo, data_noticia, conteudo]);
    const novaNoticia = result.rows[0];
    client.release();
    res.json({ message: 'Nova notícia criada', noticia: novaNoticia });
  } catch (error) {
    console.error('Erro ao criar notícia:', error);
    res.status(500).json({ message: 'Erro ao criar notícia' });
  }
});

// Rota para recuperar uma notícia pelo ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM noticias WHERE id = $1', [id]);
    const noticia = result.rows[0];
    client.release();
    if (noticia) {
      res.json(noticia);
    } else {
      res.status(404).json({ message: 'Notícia não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao recuperar notícia:', error);
    res.status(500).json({ message: 'Erro ao recuperar notícia' });
  }
});

// Rota para atualizar uma notícia pelo ID
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { autor_id, titulo, data_noticia, conteudo } = req.body;
    const client = await pool.connect();
    const result = await client.query('UPDATE noticias SET autor_id = $1, titulo = $2, data_noticia = $3, conteudo = $4 WHERE id = $5 RETURNING *', [autor_id, titulo, data_noticia, conteudo, id]);
    const noticiaAtualizada = result.rows[0];
    client.release();
    if (noticiaAtualizada) {
      res.json({ message: 'Notícia atualizada com sucesso', noticia: noticiaAtualizada });
    } else {
      res.status(404).json({ message: 'Notícia não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao atualizar notícia:', error);
    res.status(500).json({ message: 'Erro ao atualizar notícia' });
  }
});

// Rota para excluir uma notícia pelo ID
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const client = await pool.connect();
    const result = await client.query('DELETE FROM noticias WHERE id = $1 RETURNING *', [id]);
    const noticiaExcluida = result.rows[0];
    client.release();
    if (noticiaExcluida) {
      res.json({ message: 'Notícia excluída com sucesso', noticia: noticiaExcluida });
    } else {
      res.status(404).json({ message: 'Notícia não encontrada' });
    }
  } catch (error) {
    console.error('Erro ao excluir notícia:', error);
    res.status(500).json({ message: 'Erro ao excluir notícia' });
  }
});

export default router;
