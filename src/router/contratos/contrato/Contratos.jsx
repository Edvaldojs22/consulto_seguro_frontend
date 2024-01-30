import { Link } from "react-router-dom";
import RodaPe from "../../../components/rodaPe/RodaPe";
import { FaCircleUser } from "react-icons/fa6";
import Menu from "../../../components/menu/Menu";
import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import "./Contratos.css";
import { HiDocumentAdd } from "react-icons/hi";


export const listaContratos = [
    {
        id: 1,
        vendedor: "LEANDRO",
        regional: "AG - REGIONAL LEANDRO",
        inicioContrato: "05/01/2024",
        renovarContrato: "05/01/2025",
        tipoContrato: "FILIAÇÃO",
        associado: "BRUNO HERIQUE DE OLIVEIRA LIMA - 11852278498",
        contrato: "RZU6J83 - R$ 10.374,00",
        plano: "AG - MOTOCICLETA PLANO BASICO 08 - 2022 De R$ 11.000,00",
        diaVencimento: "10",
        modeloFinanceiro: "CARNÊ",
        valorPlano: "67,00",
        corbeturasAdicionais: "0,00",
        descontoMensalidade: "0,00",
        valorMensalidade: "67,00"
    },
    {
        id: 2,
        vendedor: "LEANDRO",
        regional: "AG - REGIONAL LEANDRO",
        inicioContrato: "15/02/2024",
        renovarContrato: "15/02/2025",
        tipoContrato: "FILIAÇÃO",
        associado: "CARLA SILVA - 22876543210",
        contrato: "ABC1234 - R$ 15.000,00",
        plano: "AG - MOTOCICLETA PLANO PREMIUM 10 - 2022 De R$ 18.000,00",
        diaVencimento: "20",
        modeloFinanceiro: "CARNÊ",
        valorPlano: "85,00",
        corbeturasAdicionais: "10,00",
        descontoMensalidade: "5,00",
        valorMensalidade: "80,00"
    },
    {
        id: 3,
        vendedor: "LEANDRO",
        regional: "AG - REGIONAL LEANDRO",
        inicioContrato: "10/03/2024",
        renovarContrato: "10/03/2025",
        tipoContrato: "FILIAÇÃO",
        associado: "MARCOS OLIVEIRA - 33221144556",
        contrato: "XYZ9876 - R$ 12.500,00",
        plano: "AG - MOTOCICLETA PLANO INTERMEDIÁRIO 05 - 2022 De R$ 14.000,00",
        diaVencimento: "30",
        modeloFinanceiro: "CARNÊ",
        valorPlano: "75,00",
        corbeturasAdicionais: "5,00",
        descontoMensalidade: "2,00",
        valorMensalidade: "73,00"
    },
    {
        id: 4,
        vendedor: "LEANDRO",
        regional: "AG - REGIONAL LEANDRO",
        inicioContrato: "22/04/2024",
        renovarContrato: "22/04/2025",
        tipoContrato: "FILIAÇÃO",
        associado: "PATRICIA SANTOS - 55667788990",
        contrato: "MNO4321 - R$ 14.200,00",
        plano: "AG - MOTOCICLETA PLANO PREMIUM 12 - 2022 De R$ 16.000,00",
        diaVencimento: "10",
        modeloFinanceiro: "CARNÊ",
        valorPlano: "90,00",
        corbeturasAdicionais: "8,00",
        descontoMensalidade: "3,00",
        valorMensalidade: "87,00"
    },
    {
        id: 5,
        vendedor: "LEANDRO",
        regional: "AG - REGIONAL LEANDRO",
        inicioContrato: "15/05/2024",
        renovarContrato: "15/05/2025",
        tipoContrato: "FILIAÇÃO",
        associado: "FABIANA PEREIRA - 99887766554",
        contrato: "PQR5678 - R$ 16.800,00",
        plano: "AG - MOTOCICLETA PLANO INTERMEDIÁRIO 09 - 2022 De R$ 18.000,00",
        diaVencimento: "20",
        modeloFinanceiro: "CARNÊ",
        valorPlano: "80,00",
        corbeturasAdicionais: "7,00",
        descontoMensalidade: "4,00",
        valorMensalidade: "76,00"
    },
    {
        id: 6,
        vendedor: "LEANDRO",
        regional: "AG - REGIONAL LEANDRO",
        inicioContrato: "08/06/2024",
        renovarContrato: "08/06/2025",
        tipoContrato: "FILIAÇÃO",
        associado: "GUSTAVO ALVES - 11223344556",
        contrato: "LMN9012 - R$ 19.500,00",
        plano: "AG - MOTOCICLETA PLANO PREMIUM 15 - 2022 De R$ 22.000,00",
        diaVencimento: "30",
        modeloFinanceiro: "CARNÊ",
        valorPlano: "95,00",
        corbeturasAdicionais: "12,00",
        descontoMensalidade: "6,00",
        valorMensalidade: "91,00"
    }
]


export default function Contratos() {



    const [termoPesquisa, setTermoPesquisa] = useState('');


    const contratosFiltrados = listaContratos.filter(contrato =>
        contrato.diaVencimento.toLocaleLowerCase().includes(termoPesquisa.toLocaleLowerCase()) ||
        contrato.valorPlano.includes(termoPesquisa) || contrato.associado.toLocaleLowerCase().includes(termoPesquisa)
    );

    const pesquisaInpunt = (e) => {
        setTermoPesquisa(e.target.value);
    }


    return (
        <div className='associados'>

            <Menu />
            <header></header>

            <div className='caixa-inpunt-pesquisa'>

                <p className='number'>{contratosFiltrados.length}</p>
                <input id='inpunt-pesquisa' type="text" placeholder="Pesquisa contrato"
                    value={termoPesquisa}
                    onChange={pesquisaInpunt} />
                <button type='submit' className='botao-pesquisa'>
                    <Link to="/consulto_seguro/NovoContrato"> <HiDocumentAdd className='icon-search' /></Link>
                </button>

            </div>

            <div className="caixa-lista-contratos">
                <div className="lista-contratos">

                    {contratosFiltrados.map(contrato => (

                        <Link key={contrato.id} to={`/consulto_seguro/contrato/${contrato.id}`} className="caixa-listaContratos corContrato">

                            <IoDocumentText className="icon-document" />
                            <p className="nomeAssociado">{contrato.associado}</p>

                            <div className="vencimentoPlano">
                                <p>Vencimento dia : {contrato.diaVencimento}</p>
                                <p>Plano: {contrato.valorPlano}</p>
                            </div>



                        </Link>

                    ))}

                </div>
            </div>

            <div className="caixa-eventos">
                <p>EFETIVADO</p>
                <p>PENDENTE</p>
                <p>CANCELADO</p>
            </div>

            <RodaPe />
        </div>
    )
}