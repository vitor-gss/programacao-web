import React, { useEffect, useState } from 'react';
import { useParams } from "react-router"
import produtosService from '../services/ProdutosService'
import ProdutoComentarios from './ProdutoComentarios';
const ProdutoDetalhe = () => {
  const { id } = useParams();
  const [produto, setProduto] = useState(null);

  useEffect(() => {
    //trecho 1: definição
    const fetchProduto = async () => {
      const produtoEncontrado = produtosService.getProdutoById(id);
      setProduto(produtoEncontrado);
    };

    //trecho 2: chamada
    fetchProduto();
  }, [id]);//trecho 3

  return (
    <div className="container mt-5">
      {produto ? (
        <>
          <div className="row">
            <div className="col-md-8">

              <h2>{produto?.nome}</h2>

              <p>Descrição: {produto?.descricao}</p>

            </div>
            <div className="col-md-4">
              <img src={produto?.imagem} alt={produto?.nome} className="img-fluid" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <ProdutoComentarios produto={produto} />
            </div>
          </div>
        </>
      ) : (
        <div>
          <h1>Produto não encontrado</h1>
        </div>
      )
      }
    </div>
  );
};

export default ProdutoDetalhe;