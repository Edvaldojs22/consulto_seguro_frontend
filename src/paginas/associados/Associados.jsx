import './Associados.css';
import { FaCircleUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import Menu from '../menu/Menu.jsx';
import { useState } from 'react';



export default function Associados({ nomePesquisa, icon}) {


    const [termoPesquisa, setTermoPesquisa] = useState('');

    const listaCliente = [
        {
            id: 1,
            nome: "Carlos",
            cpf: "000.111.222-33",
            telefone: "123456789"
        },
        {
            id: 2,
            nome: "Luan",
            cpf: "111.222.333-44",
            telefone: "987654321"
        },
        {
            id: 3,
            nome: "Ana",
            cpf: "222.333.444-55",
            telefone: "111222333"
        },
        {
            id: 4,
            nome: "Mariana",
            cpf: "333.444.555-66",
            telefone: "444555666"
        },
        {
            id: 5,
            nome: "João",
            cpf: "444.555.666-77",
            telefone: "555666777"
        },
        {
            id: 6,
            nome: "Renata",
            cpf: "555.666.777-88",
            telefone: "666777888"
        },
        {
            id: 7,
            nome: "Rafael",
            cpf: "666.777.888-99",
            telefone: "777888999"
        },
        {
            id: 8,
            nome: "Fernanda",
            cpf: "777.888.999-00",
            telefone: "888999000"
        },
        {
            id: 9,
            nome: "Lucas",
            cpf: "888.999.000-11",
            telefone: "999000111"
        },
        {
            id: 10,
            nome: "Isabela",
            cpf: "999.000.111-22",
            telefone: "000111222"
        },
        {
            id: 11,
            nome: "Gustavo",
            cpf: "123.456.789-00",
            telefone: "111222333"
        },
        {
            id: 12,
            nome: "Camila",
            cpf: "234.567.890-11",
            telefone: "222333444"
        },
        {
            id: 13,
            nome: "Pedro",
            cpf: "345.678.901-22",
            telefone: "333444555"
        },
        {
            id: 14,
            nome: "Marcela",
            cpf: "456.789.012-33",
            telefone: "444555666"
        },
        {
            id: 15,
            nome: "Rodrigo",
            cpf: "567.890.123-44",
            telefone: "555666777"
        },
        {
            id: 16,
            nome: "Amanda",
            cpf: "678.901.234-55",
            telefone: "666777888"
        },


        {
            id: 17,
            nome: "Bruno",
            cpf: "789.012.345-66",
            telefone: "777888999"
        },
        {
            id: 18,
            nome: "Eduarda",
            cpf: "890.123.456-77",
            telefone: "888999000"
        },
        {
            id: 19,
            nome: "Hugo",
            cpf: "901.234.567-88",
            telefone: "999000111"
        },
        {
            id: 20,
            nome: "Juliana",
            cpf: "012.345.678-99",
            telefone: "000111222"
        },
        {
            id: 21,
            nome: "Diego",
            cpf: "987.654.321-00",
            telefone: "111222333"
        },
        {
            id: 22,
            nome: "Patrícia",
            cpf: "876.543.210-11",
            telefone: "222333444"
        },
        {
            id: 23,
            nome: "Felipe",
            cpf: "765.432.109-22",
            telefone: "333444555"
        },
        {
            id: 24,
            nome: "Natália",
            cpf: "654.321.098-33",
            telefone: "444555666"
        },
        {
            id: 25,
            nome: "Vinícius",
            cpf: "543.210.987-44",
            telefone: "555666777"
        },


        {
            id: 26,
            nome: "biel",
            cpf: "00000000",
            telefone: "232232323"

        }
    ];

    const clientesFiltrados = listaCliente.filter(cliente =>
        cliente.nome.toLocaleLowerCase().includes(termoPesquisa.toLocaleLowerCase()) ||
        cliente.cpf.includes(termoPesquisa)
    );


    const pesquisaInpunt = (e) => {
        setTermoPesquisa(e.target.value);
    }



    return (
        <div className='associados'>

            <Menu />

            <header>
                <div className='painel-icon'>
                    <FaCircleUser className='icon-user' />
                    <p>huhjh khuhgy</p>
                </div>
            </header>

            <div className='caixa-inpunt-pesquisa'>
                <IoFilterSharp className='icon-filter' />
                <input id='inpunt-pesquisa' type="text" placeholder={nomePesquisa}
                    value={termoPesquisa}
                    onChange={pesquisaInpunt} />
                <button type='submit' className='botao-pesquisa'>  <CiSearch className='icon-search' /></button>

            </div>

            <div className="caixa-lista-associados">
                <div className="lista-associados">

                    {clientesFiltrados.map(cliente => (

                        <div key={cliente.id} className="caixa-cliente">
                            <div className='icon-user'>
                                {icon}
                            </div>

                            <div className="numero-cpf">
                                <p>{cliente.nome}</p>
                                <p> CPF :{cliente.cpf}</p>
                            </div>
                            <p className="fone">N: {cliente.telefone}</p>
                        </div>

                    ))}

                </div>
            </div>

            <footer>
                <button className='botao-novoCliente'>Novo Cliente</button>
            </footer>

        </div>
    )
}