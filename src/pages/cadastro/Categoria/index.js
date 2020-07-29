import React from 'react';
import PageRoot from '../../../Components/PageRoot';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
    return (
        <PageRoot>
            <h1>Cadastro de Categoria</h1>

            <Link to="/cadastro/video">
                Cadastrar Vídeo
            </Link>
        </PageRoot>
    )
};

export default CadastroCategoria;