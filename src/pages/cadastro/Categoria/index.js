import React, { useState } from 'react';
import PageRoot from '../../../Components/PageRoot';
import { Link } from 'react-router-dom';
import FormField from '../../../Components/FormField';

function CadastroCategoria() {
    const initValues = {
        name: '',
        description: '',
        color: '#000000'
    };
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(initValues);


    function setValue(key, value) {
        setValues({
            ...values,
            [key]: value
        });
    };
    function handleChange(info) {
        setValue(info.target.getAttribute('name'), info.target.value);
    };

    return (
        <PageRoot>
            <h1>Cadastro de Categoria: {values.name}</h1>

            <form onSubmit={function handleSubmit(info) {
                info.preventDefault()

                setCategorias([
                    ...categorias,
                    values.name
                ]);
                setValues(initValues);
            }}>

                <FormField
                    label="Nome da Categoria:"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />

                <br />
                <FormField
                    label="Descrição da Categoria:"
                    type="text"
                    name="description"
                    value={values.description}
                    onChange={handleChange}
                />

                <br />
                <FormField
                    label="Cor da Categoria:"
                    type="color"
                    name="color"
                    value={values.color}
                    onChange={handleChange}
                />
                <button>Cadastrar</button>
            </form>
            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>{categoria}</li>

                    )
                })}
            </ul>

            <Link to="/">Ir para a home</Link>
        </PageRoot>
    )
};

export default CadastroCategoria;