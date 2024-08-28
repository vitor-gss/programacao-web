import fetch from 'node-fetch';

export async function getPosts(req, res) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        
        const { userId } = req.query;
        if (userId) {
            const filteredPosts = posts.filter(post => post.userId == userId);
            res.json(filteredPosts);
        } else {
            res.json(posts);
        }
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar os posts' });
    }
}
