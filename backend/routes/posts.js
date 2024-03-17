// routes/posts.js

import { Router } from 'express';
const router = Router();

// Rota para listar todos os posts
router.get('/', (req, res) => {
  // Lógica para listar os posts
  res.send('Listagem de posts');
});

export default router;
