import express from 'express';
import { createAuthor, deleteAuthor, getAuthorById, listAuthors, updateAuthor } from '../controllers/authorController.js';

const authorRouter = express.Router();

authorRouter.get('/', listAuthors);
authorRouter.post('/', createAuthor);
authorRouter.get('/:id', getAuthorById);
authorRouter.put('/:id', updateAuthor);
authorRouter.delete('/:id', deleteAuthor);

export default authorRouter;
