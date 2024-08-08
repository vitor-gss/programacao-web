async function fetchAndFilterPosts() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        const filteredPosts = posts.filter(post => post.title.includes('qui'));
        console.log('Posts cujo título contém "qui":', filteredPosts);
    } catch (error) {
        console.error('Erro ao buscar os dados:', error);
    }
}

fetchAndFilterPosts();
