class ProdutosService {
    produtos = [
        { id: 1, nome: 'Chanel No.5', categoria: 'perfume', descricao: 'Clássico atemporal da Chanel.', valor: 350 },
        { id: 2, nome: 'Dior Sauvage', categoria: 'perfume', descricao: 'Amadeirado aromático, ideal para homens.', valor: 280 },
        { id: 3, nome: 'Old Spice Cabra Macho', categoria: 'perfume', descricao: 'Estrada matinal.', valor: 332 },
        //...
    ];

    comentarios = [
        {
            idProduto: 1,
            comentario: "Produto excelente! Superou minhas expectativas.",
            autor: "João Silva",
            data: "2023-11-22"
        },
        {
            idProduto: 2,
            comentario: "O produto chegou antes do prazo e está em perfeito estado.",
            autor: "Ana Maria",
            data: "2023-12-05"
        },
        {
            idProduto: 2,
            comentario: "Ruim",
            autor: "Maria Ana",
            data: "2023-12-05"
        },
        {
            idProduto: 3,
            comentario: "Balango dango",
            autor: "Vitor",
            data: "2024-12-29"
        },
    ];

    getProdutoById(id) {
        return this.produtos.find(produto => produto.id === parseInt(id));
    }
    getProdutos() {
        return this.produtos;
    }

    getComentariosByProdutosId(idProduto) {
        return this.comentarios.filter(comentario => comentario.idProduto === parseInt(idProduto));
    }

    addComentario(produto, comentario) {
        this.comentarios.push({ ...comentario });
        return comentario;
    }
}

const produtosService = new ProdutosService();

export default produtosService;