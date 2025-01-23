import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import produtosService from '../services/ProdutosService';
import ProdutoComentarios from './ProdutoComentarios';

export const ProdutoEditar = () => {

  /**NAVEGACAO */
  const navigate = useNavigate();

  const { id } = useParams();

  const [produto, setProduto] = useState(null);

  useEffect(() => {
    const fetchProduto = async () => {
      const produtoEncontrado = produtosService.getProdutoById(id);
      setProduto(produtoEncontrado);
    };

    fetchProduto();
  }, [id]);

  /*TODO criar no futuro uma chamada para todos os produtos da mesma categoria*/
  const handleProdutosRelacionados = (produto) => {
    navigate(`/produtos/${produto.id}`);
  };

  return (
    <div className="container mt-5">
      {produto ? (
        <>
        <div className="row">
          <div className="col">
            <Link to="/produtos" className="btn btn-secondary float-start">Voltar</Link>
          </div>
          <div className="col text-end">
            <button className="btn btn-primary" onClick={() => handleProdutosRelacionados(produto)}>
              Produtos Relacionados(A FAZER)
            </button>
          </div>
        </div>
        
        <div className="row">
          <div className="col-md-8">
           
            <h2>{produto.nome}</h2>
           
            <p>Descrição: {produto.descricao}</p>
          
          </div>
          <div className="col-md-4">
            <img src={produto.imagem} alt={produto.nome} className="img-fluid" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <ProdutoComentarios produto={produto} novo="true" />
          </div>
        </div>
        </>
      ) : (
        <p>Produto não encontrado</p>
      )}
    </div>
  );
};