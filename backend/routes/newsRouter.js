import express from 'express';
import {
  createNews,
  deleteNews,
  getNewsById,
  listNews,
  updateNews,
} from '../controllers/newsController.js';

const newsRouter = express.Router();

newsRouter.get('/', listNews);
newsRouter.post('/', createNews);
newsRouter.get('/:id', getNewsById);
newsRouter.put('/:id', updateNews);
newsRouter.delete('/:id', deleteNews);

export default newsRouter;
