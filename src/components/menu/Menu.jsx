import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import './Menu.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import LogoAutoPlanos from "../../assets/img/autoPlanos.png"
import { BiSupport } from "react-icons/bi";
import { BiLogOutCircle } from "react-icons/bi";
import { TiHome } from "react-icons/ti";
import { FaUser } from "react-icons/fa";

import AuthService from "../../services/authService";

export default function Menu() {
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();
    const authService = AuthService();

    const ativaMenu = () => {
        setMenuAberto(!menuAberto);
    }
    const navigateTo = (rota) => {
        navigate(rota);
        setMenuAberto(false);
    }

    const logout = () => {
        authService.logout();
    }

    const caixaMenuClasses = 'caixa-menu ' + (menuAberto ? 'caixa-menuAberta' : '');

    return (

        <div className="painelMenu">

            {menuAberto ? (
                <IoMdClose className='icon-menu' onClick={ativaMenu} />
            ) : (
                <LuMenu className='icon-menu' onClick={ativaMenu} />
            )
            }


            <nav className={caixaMenuClasses}>
                <div className="caixaImg">
                    <img className="imgMenuAutoPlanos" src={LogoAutoPlanos} alt="" />
                </div>


                <div className="caixaIcons">

                    <div className="iconsPage">

                        <div className="caixaLink">

                            <div>
                                <TiHome />
                                <p>Início</p>
                            </div>

                            <Link to="/consulto_seguro/home" className="link">
                                <IoIosArrowForward className="iconArroy" />
                            </Link>

                        </div>

                        <div className="caixaLink">

                            <div>
                                <FaUser />
                                <p>Usuário</p>
                            </div>

                            <Link to="/consulto_seguro/associados" className="link">
                                <IoIosArrowForward className="iconArroy" />
                            </Link>

                        </div>


                        <div className="caixaLink">

                            <div>
                                <FaUsers />
                                <p>Associados</p>
                            </div>

                            <Link to="/consulto_seguro/associados" className="link">
                                <IoIosArrowForward className="iconArroy" />
                            </Link>

                        </div>

                        <div className="caixaLink">

                            <div>
                                <FaCarSide />
                                <p>Veículos</p>
                            </div>

                            <Link to="/consulto_seguro/veiculos" className="link">
                                <IoIosArrowForward className="iconArroy" />
                            </Link>

                        </div>

                        <div className="caixaLink">

                            <div>
                                <FaFileContract />
                                <p className="contrato">Contratos</p>
                            </div>

                            <Link to="/consulto_seguro/contratos" className="link">
                                <IoIosArrowForward className="iconArroy" />
                            </Link>

                        </div>

                        <div className="caixaLink">

                            <div>
                                <IoChatbubbleEllipses />
                                <p>Mensagem Personalizada</p>
                            </div>

                            <Link to="/consulto_seguro/Mensagem" className="link">
                                <IoIosArrowForward className="iconArroy" />

                            </Link>

                        </div>

                        <div className="caixaLink">

                            <div>
                                <BiSupport />
                                <p>Suporte</p>
                            </div>

                            <Link className="link">
                                <IoIosArrowForward className="iconArroy" />
                            </Link>

                        </div>
                    </div>

                    <div className="caixaSai">
                        <BiLogOutCircle className="iconsair"/>
                        <p>Sair</p>
                    </div>

                </div>

            </nav>
        </div>
    )
}
