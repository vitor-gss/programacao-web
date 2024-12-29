import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import produtosService from '../services/ProdutosService';

const ProdutosList = () => {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        const fetchProdutos = async () => {
            const produtos = produtosService.getProdutos();
            setProdutos(produtos);
            console.log(produtos)
        };

        fetchProdutos();
    }, []);

    return (
        <div className="container mt-5">
          <h1>Produtos</h1>
          <ul className="list-group">
            {
                produtos.map(product => (
                  <li key={product.id} className="list-group-item d-flex justify-content-between">
                    <Link to={`/produtos/${product.id}`}>{product.nome}</Link>
                    <Link to={`/produtos/${product.id}/editar`}>editar</Link>
                  </li>
                ))
            }
          </ul>
        </div>
      );
}

export default ProdutosList;