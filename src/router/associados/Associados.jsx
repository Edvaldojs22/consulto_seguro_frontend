import './Associados.css';
import { FaCircleUser, FaUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import Menu from '../../components/menu/Menu.jsx';
import { useState } from 'react';
import { Link } from "react-router-dom";

export const listaCliente = [
    {
        id: 1,
        nome: "Anderson",
        cpf: "123.456.789-00",
        telefone: "987654321",
        vencimento: "20"
    },
    {
        id: 2,
        nome: "Camila",
        cpf: "234.567.890-11",
        telefone: "123456789",
        vencimento: "10"
    },
    {
        id: 3,
        nome: "Daniel",
        cpf: "345.678.901-22",
        telefone: "456789012",
        vencimento: "30"
    },
    {
        id: 4,
        nome: "Eduardo",
        cpf: "456.789.012-33",
        telefone: "345678901",
        vencimento: "10"
    },
    {
        id: 5,
        nome: "Fernanda",
        cpf: "567.890.123-44",
        telefone: "678901234",
        vencimento: "30"
    },
    {
        id: 6,
        nome: "Gabriel",
        cpf: "678.901.234-55",
        telefone: "789012345",
        vencimento: "20"
    },
    {
        id: 7,
        nome: "Helena",
        cpf: "789.012.345-66",
        telefone: "890123456",
        vencimento: "10"
    },
    {
        id: 8,
        nome: "Isabela",
        cpf: "890.123.456-77",
        telefone: "901234567",
        vencimento: "30"
    },
    {
        id: 9,
        nome: "João",
        cpf: "901.234.567-88",
        telefone: "012345678",
        vencimento: "20"
    },
    {
        id: 10,
        nome: "Karen",
        cpf: "012.345.678-99",
        telefone: "234567890",
        vencimento: "10"
    },
    {
        id: 11,
        nome: "Larissa",
        cpf: "123.456.789-00",
        telefone: "987654321",
        vencimento: "10"
    },
    {
        id: 12,
        nome: "Marcelo",
        cpf: "234.567.890-11",
        telefone: "123456789",
        vencimento: "30"
    },
    {
        id: 13,
        nome: "Nathalia",
        cpf: "345.678.901-22",
        telefone: "456789012",
        vencimento: "20"
    },
    {
        id: 14,
        nome: "Oscar",
        cpf: "456.789.012-33",
        telefone: "345678901",
        vencimento: "10"
    },
    {
        id: 15,
        nome: "Patricia",
        cpf: "567.890.123-44",
        telefone: "678901234",
        vencimento: "30"
    },
    {
        id: 28,
        nome: "Quiteria",
        cpf: "678.901.234-55",
        telefone: "789012345",
        vencimento: "20"
    },
    {
        id: 16,
        nome: "Ricardo",
        cpf: "789.012.345-66",
        telefone: "890123456",
        vencimento: "10"
    },
    {
        id: 17,
        nome: "Sandra",
        cpf: "890.123.456-77",
        telefone: "901234567",
        vencimento: "30"
    },
    {
        id: 18,
        nome: "Tiago",
        cpf: "901.234.567-88",
        telefone: "012345678",
        vencimento: "20"
    },
    {
        id: 19,
        nome: "Ursula",
        cpf: "012.345.678-99",
        telefone: "234567890",
        vencimento: "10"
    },
    {
        id: 20,
        nome: "Vinicius",
        cpf: "123.234.567-89",
        telefone: "456789012",
        vencimento: "20"
    },
    {
        id: 21,
        nome: "Wagner",
        cpf: "234.345.678-90",
        telefone: "789012345",
        vencimento: "30"
    },
    {
        id: 22,
        nome: "Xuxa",
        cpf: "345.456.789-01",
        telefone: "012345678",
        vencimento: "10"
    },
    {
        id: 23,
        nome: "Yasmin",
        cpf: "456.567.890-12",
        telefone: "234567890",
        vencimento: "30"
    },
    {
        id: 24,
        nome: "Zeca",
        cpf: "567.678.901-23",
        telefone: "789012345",
        vencimento: "20"
    },
    {
        id: 25,
        nome: "Leandro",
        cpf: "523.623.921-03",
        telefone: "723412345",
        vencimento: "10"
    },
    
];



export default function AssociadosInfo() {

  

    const [termoPesquisa, setTermoPesquisa] = useState('');


    const clientesFiltrados = listaCliente.filter(cliente =>
        cliente.nome.toLocaleLowerCase().includes(termoPesquisa.toLocaleLowerCase()) ||
        cliente.cpf.includes(termoPesquisa) || cliente.vencimento.toLocaleLowerCase().includes(termoPesquisa)
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
                    <p>José Leandro</p>
                </div>
            </header>

            <div className='caixa-inpunt-pesquisa'>
                <p className='number'>{clientesFiltrados.length}</p>
                <input id='inpunt-pesquisa' type="text" placeholder="Pesquisa Cliente"
                    value={termoPesquisa}
                    onChange={pesquisaInpunt} />
                <button type='submit' className='botao-pesquisa'>  <CiSearch className='icon-search' /></button>

            </div>

            <div className="caixa-lista-associados">
                <div className="lista-associados">

                    {clientesFiltrados.map(cliente => (

                        <Link key={cliente.id} to={`/associado/${cliente.id}`} className="caixa-listaAssociados">

                            <div className='icon-user'>
                                <FaUser />
                            </div>

                            <div className="nome-cpf">
                                <p>{cliente.nome}</p>
                                <p> CPF: {cliente.cpf}</p>
                            </div>

                            <div className="fone-vencimento">
                            <p>Vencimento: Dia {cliente.vencimento}</p>
                            <p >N: {cliente.telefone}</p>
                            </div>
                           
                        </Link>

                    ))}

                </div>
            </div>

            <footer>
                <button className='botao-novoCliente'>Novo Cliente</button>
            </footer>

        </div>
    )

}

