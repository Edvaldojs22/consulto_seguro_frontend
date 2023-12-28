import { LuMenu } from "react-icons/lu";
import './Menu.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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
    
    const navigateTo= (rota) => {
        navigate(rota);
        setMenuAberto(false)
    }


    const caixaMenuClasses = 'caixa-menu ' + (menuAberto ? 'caixa-menuAberta' : '');




    return (
        <div>
            <LuMenu className='icon-menu' onClick={ativaMenu} />
            <nav className={caixaMenuClasses}>
                <Link to="/associados" className="link">Associados</Link>
                <Link to="/veiculos" className="link">Veiculos</Link>
                <Link to="/contratos" className="link">Contratos</Link>
            </nav>

        </div>
    )
}