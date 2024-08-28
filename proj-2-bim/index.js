import express from 'express';
import bookRoutes from './routes/bookRoutes.js';

const app = express();
app.use(express.json());

app.use('/books', bookRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});



import { getPosts } from './services/apiService.js';
app.get('/posts', getPosts);

