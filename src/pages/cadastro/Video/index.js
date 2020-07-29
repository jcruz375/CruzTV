import React from 'react';
import PageRoot from '../../../Components/PageRoot';
import { Link } from 'react-router-dom';

function CadastroVideo() {
    return (
        <PageRoot>
            <h1>Cadastro de vídeo</h1>

            <Link to="/cadastro/categoria">
                Cadastrar categoria
            </Link>
        </PageRoot>
    )
};

export default CadastroVideo;