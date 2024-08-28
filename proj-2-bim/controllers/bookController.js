let books = [
    { id: 1, title: "Node.js para Iniciantes", author: "John Doe", year: 2020, available: true },
    { id: 2, title: "Express Avançado", author: "Jane Doe", year: 2021, available: false }
];

export function getAllBooks(req, res) {
    res.json(books);
}

export function getBookById(req, res) {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) res.json(book);
    else res.status(404).send('Livro não encontrado');
}

export function addBook(req, res) {
    const newBook = { id: books.length + 1, ...req.body };
    books.push(newBook);
    res.status(201).json(newBook);
}

export function updateBook(req, res) {
    const book = books.find(b => b.id === parseInt(req.params.id));
    if (book) {
        Object.assign(book, req.body);
        res.json(book);
    } else {
        res.status(404).send('Livro não encontrado');
    }
}

export function deleteBook(req, res) {
    books = books.filter(b => b.id !== parseInt(req.params.id));
    res.status(204).send();
}
