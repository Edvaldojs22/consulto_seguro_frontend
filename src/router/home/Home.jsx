import { Link } from "react-router-dom";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import "./Home.css"
import { FaCarSide, FaFileContract, FaUserCircle, FaUsers } from "react-icons/fa";
import { listaCliente } from "../associados/associado/Associados";
import { listaContratos } from "../contratos/contrato/Contratos"; 
import { listaVeiculos } from "../veiculos/veiculos/Veiculos";
import Menu from "../../components/menu/Menu";
import RodaPe from "../../components/rodaPe/RodaPe";

export default function Home() {

    const clienteQuantidade = listaCliente;
    const veiculoQuantidade = listaVeiculos;
    const contratoQuantidade = listaContratos;
    return (
        <div className="caixaHome">
            <Menu />
            <p className="textoConsultor">Consulto Seguro</p>

            < nav className="iconLinkHome">
                <Link to="usuario">
                    <FaUserCircle className="iconUserHome" />
                </Link>

                <nav className="circleLink">
                    <div>
                        <Link className="circleIcon" to="/consulto_seguro/associados">
                            <FaUsers />
                            <div>
                                {clienteQuantidade.length}
                            </div>
                        </Link>

                    </div>

                    <div>
                        <Link className="circleIcon"  to="/consulto_seguro/veiculos">
                            <FaCarSide />
                            <div>
                                {veiculoQuantidade.length}
                            </div>
                        </Link>
                    </div>

                    <div>
                        <Link className="circleIcon" to="/consulto_seguro/contratos" >
                            <FaFileContract />
                            <div>
                                {contratoQuantidade.length}
                            </div>
                        </Link>
                    </div>

                </nav>

                <div >

                    <Link className="caixaMensagem"  to="/consulto_seguro/Mensagem">
                        <IoChatbubbleEllipsesSharp className="iconMSG" />
                        <p>Mensagem Personalizada</p>
                    </Link>

                </div>

            </nav>


            <RodaPe />
        </div>
    )
}