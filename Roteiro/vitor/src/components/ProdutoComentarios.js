import React, { useEffect, useState } from 'react';
import produtosService from '../services/ProdutosService';

const ProdutoComentarios = ({ produto }) => {

    const [comentarios, setComentarios] = useState([]);

    useEffect(() => {
        const fetchComentarios = async () => {
            const comentariosResult = produtosService.getComentariosByProdutosId(produto?.id);
            setComentarios(comentariosResult);
        }

        fetchComentarios();
    }, [produto?.id]);

    return (
        <div className="container mt-5">
            {comentarios?.length > 0 ? (
                <div className="list-group">
                    {comentarios.map((comentario, index) => (
                        <div key={index} className="list-group-item">
                            <div className="d-flex align-items-start">

                                <div className="ms-3">
                                    <h5 className="fw-bold mb-1">{comentario?.autor}</h5>
                                    <p className="mb-2 text-muted" style={{ fontSize: '0.9rem' }}>
                                        {new Date(comentario?.data).toLocaleDateString('pt-BR')}
                                    </p>
                                    <p>{comentario?.comentario}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted">Sem comentários</p>
            )}
        </div>
    );
};

export default ProdutoComentarios;