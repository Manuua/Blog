import express from 'express';

const app = express();
const PORT = process.env.PORT || 2000;

// Middleware para análise de corpos JSON
app.use(express.json());

// Rotas
import postsRouter from './routes/posts.js'; // Use o caminho relativo correto
app.use('/posts', postsRouter);

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo ao meu blog!');
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
