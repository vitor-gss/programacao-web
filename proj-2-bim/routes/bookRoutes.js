import express from 'express';
import { getAllBooks, getBookById, addBook, updateBook, deleteBook } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/', addBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

export default router;
