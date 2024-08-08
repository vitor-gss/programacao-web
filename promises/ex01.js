function fetchAndFilterUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const filteredUsers = users.filter(user => user.name.startsWith('C'));
            console.log('Usuários cujo nome começa com "C":', filteredUsers);
        })
        .catch(error => console.error('Erro ao buscar os dados:', error));
}

fetchAndFilterUsers();
