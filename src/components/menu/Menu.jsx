import { LuMenu } from "react-icons/lu";
import './Menu.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMessageAltEdit } from "react-icons/bi";
import { MdHome } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import LogoAutoPlanos from "../../assets/img/autoPlanos.png"
import { FaUserCircle } from "react-icons/fa";


export default function Menu() {

    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();

    const ativaMenu = () => {
        if (menuAberto) {
            setMenuAberto(false)
        } else {
            setMenuAberto(true)
        }
    }

    const navigateTo = (rota) => {
        navigate(rota);
        setMenuAberto(false)
    }


    const caixaMenuClasses = 'caixa-menu ' + (menuAberto ? 'caixa-menuAberta' : '');






    return (

        <div className="painelMenu">
            <LuMenu className='icon-menu' onClick={ativaMenu} />
            <nav className={caixaMenuClasses}>
                <FaUserCircle className="iconUser" />
                <div className="incons">

                    <div className="OVA">
                        <Link to="/consulto_seguro/associados" className="link">
                            <FaUsers />
                            <p>Associados</p>
                        </Link>
                        <Link to="/consulto_seguro/veiculos" className="link">
                            <FaCarSide />
                            <p>Veículos</p>
                        </Link>
                        <Link to="/consulto_seguro/contratos" className="link">
                            <FaFileContract />
                            <p className="contrato">Contratos</p>
                        </Link>
                    </div>

                    <div className="home-mensage">
                        <Link className="link">
                            <MdHome />
                            <p>Iicio</p>
                        </Link>
                        <Link to={"/consulto_seguro/Mensagem"} className="link">
                            <BiMessageAltEdit />
                            <p>Mensagem</p>
                        </Link>
                    </div>

                </div>

                <div className="imgAutoplanosMenu">
                    <img src={LogoAutoPlanos} alt="" />
                </div>
            </nav>

        </div>
    )
}