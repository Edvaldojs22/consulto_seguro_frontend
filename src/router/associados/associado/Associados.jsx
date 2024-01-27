import './Associados.css';
import { FaUser } from "react-icons/fa6";
import { IoPersonAddSharp } from "react-icons/io5";
import { useState } from 'react';
import { Link } from "react-router-dom";
import LogoFone from "../../../assets/img/phone-call.png";
import Layout from '../../../components/layout.jsx';


export const listaCliente = [
    {
        id: 1,
        nome: "Anderson",
        cpf: "123.456.789-00",
        telefone: "987654321",
        vencimento: "20",
        cep: "12345-678",
        bairro: "Centro",
        cidade: "São Paulo",
        tipoPessoa: "Física",
        identidade: "1234567",
        orgaoEmissor: "SSP",
        profissao: "Programador",
        estadoCivil: "Solteiro",
        dataNascimento: "1990-01-01"
    },
    {
        id: 2,
        nome: "Camila",
        cpf: "234.567.890-11",
        telefone: "123456789",
        vencimento: "10",
        cep: "54321-987",
        bairro: "Bela Vista",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "2345678",
        orgaoEmissor: "Detran",
        profissao: "Engenheira",
        estadoCivil: "Casada",
        dataNascimento: "1988-05-12"
    },
    {
        id: 3,
        nome: "Daniel",
        cpf: "345.678.901-22",
        telefone: "456789012",
        vencimento: "30",
        cep: "67890-123",
        bairro: "Jardins",
        cidade: "Curitiba",
        tipoPessoa: "Física",
        identidade: "3456789",
        orgaoEmissor: "SSP",
        profissao: "Professor",
        estadoCivil: "Solteiro",
        dataNascimento: "1985-08-20"
    },
    {
        id: 4,
        nome: "Eduardo",
        cpf: "456.789.012-33",
        telefone: "345678901",
        vencimento: "10",
        cep: "45678-901",
        bairro: "Boa Vista",
        cidade: "Porto Alegre",
        tipoPessoa: "Física",
        identidade: "7890123",
        orgaoEmissor: "SSP",
        profissao: "Engenheiro de Software",
        estadoCivil: "Solteiro",
        dataNascimento: "1989-08-12"
    },
    {
        id: 5,
        nome: "Fernanda",
        cpf: "567.890.123-44",
        telefone: "678901234",
        vencimento: "30",
        cep: "56789-012",
        bairro: "Centro",
        cidade: "Curitiba",
        tipoPessoa: "Física",
        identidade: "0123456",
        orgaoEmissor: "Detran",
        profissao: "Biomédica",
        estadoCivil: "Casada",
        dataNascimento: "1983-04-27"
    },
    {
        id: 6,
        nome: "Gabriel",
        cpf: "678.901.234-55",
        telefone: "789012345",
        vencimento: "20",
        cep: "67890-123",
        bairro: "Barra da Tijuca",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "2345678",
        orgaoEmissor: "SSP",
        profissao: "Estudante",
        estadoCivil: "Solteiro",
        dataNascimento: "1992-02-15"
    },
    {
        id: 7,
        nome: "Helena",
        cpf: "789.012.345-66",
        telefone: "890123456",
        vencimento: "10",
        cep: "78901-234",
        bairro: "Ipanema",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "4567890",
        orgaoEmissor: "Detran",
        profissao: "Advogada",
        estadoCivil: "Casada",
        dataNascimento: "1980-11-28"
    },
    {
        id: 8,
        nome: "Isabela",
        cpf: "890.123.456-77",
        telefone: "901234567",
        vencimento: "30",
        cep: "89012-345",
        bairro: "Jardim América",
        cidade: "São Paulo",
        tipoPessoa: "Física",
        identidade: "5678901",
        orgaoEmissor: "SSP",
        profissao: "Psicóloga",
        estadoCivil: "Solteira",
        dataNascimento: "1984-09-20"
    },
    {
        id: 9,
        nome: "João",
        cpf: "901.234.567-88",
        telefone: "012345678",
        vencimento: "20",
        cep: "01234-567",
        bairro: "Vila Nova",
        cidade: "São Paulo",
        tipoPessoa: "Física",
        identidade: "6789012",
        orgaoEmissor: "Detran",
        profissao: "Engenheiro Civil",
        estadoCivil: "Solteiro",
        dataNascimento: "1987-06-05"
    },
    // ...
    {
        id: 10,
        nome: "Karen",
        cpf: "012.345.678-99",
        telefone: "234567890",
        vencimento: "10",
        cep: "54321-098",
        bairro: "Jardim das Flores",
        cidade: "Campinas",
        tipoPessoa: "Física",
        identidade: "8901234",
        orgaoEmissor: "Detran",
        profissao: "Estudante",
        estadoCivil: "Solteira",
        dataNascimento: "1998-03-25"
    },
    {
        id: 11,
        nome: "Larissa",
        cpf: "123.456.789-00",
        telefone: "987654321",
        vencimento: "10",
        cep: "01234-567",
        bairro: "Barra da Tijuca",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "5678901",
        orgaoEmissor: "SSP",
        profissao: "Designer Gráfica",
        estadoCivil: "Casada",
        dataNascimento: "1987-11-10"
    },
    {
        id: 12,
        nome: "Marcelo",
        cpf: "234.567.890-11",
        telefone: "123456789",
        vencimento: "30",
        cep: "34567-890",
        bairro: "Centro",
        cidade: "Curitiba",
        tipoPessoa: "Física",
        identidade: "2345678",
        orgaoEmissor: "Detran",
        profissao: "Engenheiro Civil",
        estadoCivil: "Solteiro",
        dataNascimento: "1985-06-15"
    },
    {
        id: 13,
        nome: "Nathalia",
        cpf: "345.678.901-22",
        telefone: "456789012",
        vencimento: "20",
        cep: "67890-123",
        bairro: "Vila Nova",
        cidade: "São Paulo",
        tipoPessoa: "Física",
        identidade: "3456789",
        orgaoEmissor: "Detran",
        profissao: "Analista de Marketing",
        estadoCivil: "Casada",
        dataNascimento: "1989-04-20"
    },
    {
        id: 14,
        nome: "Oscar",
        cpf: "456.789.012-33",
        telefone: "345678901",
        vencimento: "10",
        cep: "78901-234",
        bairro: "Botafogo",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "4567890",
        orgaoEmissor: "Detran",
        profissao: "Contador",
        estadoCivil: "Divorciado",
        dataNascimento: "1978-12-03"
    },
    {
        id: 15,
        nome: "Patricia",
        cpf: "567.890.123-44",
        telefone: "678901234",
        vencimento: "30",
        cep: "89012-345",
        bairro: "Jardim América",
        cidade: "São Paulo",
        tipoPessoa: "Física",
        identidade: "5678901",
        orgaoEmissor: "SSP",
        profissao: "Psicóloga",
        estadoCivil: "Solteira",
        dataNascimento: "1982-09-05"
    },
    {
        id: 28,
        nome: "Quiteria",
        cpf: "678.901.234-55",
        telefone: "789012345",
        vencimento: "20",
        cep: "78901-234",
        bairro: "Jardim Botânico",
        cidade: "Brasília",
        tipoPessoa: "Física",
        identidade: "9012345",
        orgaoEmissor: "SSP",
        profissao: "Arquiteta",
        estadoCivil: "Casada",
        dataNascimento: "1983-07-15"
    },
    {
        id: 16,
        nome: "Ricardo",
        cpf: "789.012.345-66",
        telefone: "890123456",
        vencimento: "10",
        cep: "34567-890",
        bairro: "Copacabana",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "1234567",
        orgaoEmissor: "Detran",
        profissao: "Advogado",
        estadoCivil: "Divorciado",
        dataNascimento: "1976-02-28"
    },
    {
        id: 17,
        nome: "Sandra",
        cpf: "890.123.456-77",
        telefone: "901234567",
        vencimento: "30",
        cep: "56789-012",
        bairro: "Vila Nova",
        cidade: "São Paulo",
        tipoPessoa: "Física",
        identidade: "2345678",
        orgaoEmissor: "SSP",
        profissao: "Médica",
        estadoCivil: "Solteira",
        dataNascimento: "1980-09-10"
    },
    {
        id: 18,
        nome: "Tiago",
        cpf: "901.234.567-88",
        telefone: "012345678",
        vencimento: "20",
        cep: "67890-123",
        bairro: "Centro",
        cidade: "Curitiba",
        tipoPessoa: "Física",
        identidade: "3456789",
        orgaoEmissor: "Detran",
        profissao: "Engenheiro Eletricista",
        estadoCivil: "Solteiro",
        dataNascimento: "1987-04-05"
    },
    {
        id: 19,
        nome: "Ursula",
        cpf: "012.345.678-99",
        telefone: "234567890",
        vencimento: "10",
        cep: "12345-678",
        bairro: "Botafogo",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "4567890",
        orgaoEmissor: "Detran",
        profissao: "Psicóloga",
        estadoCivil: "Casada",
        dataNascimento: "1984-12-20"
    },
    {
        id: 20,
        nome: "Vinicius",
        cpf: "123.234.567-89",
        telefone: "456789012",
        vencimento: "20",
        cep: "56789-012",
        bairro: "Jardim Europa",
        cidade: "Porto Alegre",
        tipoPessoa: "Física",
        identidade: "5678901",
        orgaoEmissor: "Detran",
        profissao: "Advogado",
        estadoCivil: "Casado",
        dataNascimento: "1982-12-08"
    },
    {
        id: 21,
        nome: "Wagner",
        cpf: "234.345.678-90",
        telefone: "789012345",
        vencimento: "30",
        cep: "89012-345",
        bairro: "Centro",
        cidade: "Brasília",
        tipoPessoa: "Física",
        identidade: "6789012",
        orgaoEmissor: "SSP",
        profissao: "Médico",
        estadoCivil: "Solteiro",
        dataNascimento: "1975-06-15"
    },
    {
        id: 22,
        nome: "Xuxa",
        cpf: "345.456.789-01",
        telefone: "012345678",
        vencimento: "10",
        cep: "01234-567",
        bairro: "Ipanema",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "8901234",
        orgaoEmissor: "Detran",
        profissao: "Apresentadora",
        estadoCivil: "Divorciada",
        dataNascimento: "1963-03-27"
    },
    {
        id: 23,
        nome: "Yasmin",
        cpf: "456.567.890-12",
        telefone: "234567890",
        vencimento: "30",
        cep: "23456-789",
        bairro: "Jardim América",
        cidade: "São Paulo",
        tipoPessoa: "Física",
        identidade: "9012345",
        orgaoEmissor: "SSP",
        profissao: "Engenheira Civil",
        estadoCivil: "Solteira",
        dataNascimento: "1990-09-02"
    },
    {
        id: 24,
        nome: "Zeca",
        cpf: "567.678.901-23",
        telefone: "789012345",
        vencimento: "20",
        cep: "67890-123",
        bairro: "Boa Viagem",
        cidade: "Recife",
        tipoPessoa: "Física",
        identidade: "3456789",
        orgaoEmissor: "Detran",
        profissao: "Empresário",
        estadoCivil: "Casado",
        dataNascimento: "1988-11-18"
    },
    {
        id: 25,
        nome: "Leandro",
        cpf: "523.623.921-03",
        telefone: "723412345",
        vencimento: "10",
        cep: "54321-876",
        bairro: "Vila Nova",
        cidade: "Rio de Janeiro",
        tipoPessoa: "Física",
        identidade: "9876543",
        orgaoEmissor: "Detran",
        profissao: "Designer",
        estadoCivil: "Casado",
        dataNascimento: "1985-05-15"
    },

];

export default function Associados() {

    const [termoPesquisa, setTermoPesquisa] = useState('');


    const clientesFiltrados = listaCliente.filter(cliente =>
        cliente.nome.toLocaleLowerCase().includes(termoPesquisa.toLocaleLowerCase()) ||
        cliente.cpf.includes(termoPesquisa) || cliente.vencimento.toLocaleLowerCase().includes(termoPesquisa)
    );

    const pesquisaInpunt = (e) => {
        setTermoPesquisa(e.target.value);
    }

    return (
        <Layout>
        <div className='associados'>

            <div className='caixa-inpunt-pesquisa'>

                <p className='number'>{clientesFiltrados.length}</p>
                <input id='inpunt-pesquisa' type="text" placeholder="Pesquisa Cliente"
                    value={termoPesquisa}
                    onChange={pesquisaInpunt} />
                <button type='submit' className='botao-pesquisa'>
                    <Link to="/associados/novoAssociado"><IoPersonAddSharp className='icon-search' /></Link>
                </button>

            </div>

            <div className="caixa-lista-associados">
                <div className="lista-associados">

                    {clientesFiltrados.map(cliente => (
                        
                        <Link key={cliente.id} to={`/associados/${cliente.id}`} className="caixa-listaAssociados">

                            <div className='icon-user'>
                                <FaUser />
                            </div>

                            <div className="nome-cpf">
                                <p>{cliente.nome}</p>
                                <p> CPF: {cliente.cpf}</p>
                            </div>

                            <div className="fone-vencimento">
                                <p>Vencimento: Dia {cliente.vencimento}</p>
                                <p> <img className='logoFone' src={LogoFone} alt="" />: {cliente.telefone}</p>
                            </div>

                        </Link>

                    ))}

                </div>
            </div>

        </div>
    </Layout>
    )

}

