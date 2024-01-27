import { LuMenu } from "react-icons/lu";
import './Menu.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
        <div>
            <LuMenu className='icon-menu' onClick={ativaMenu} />
            <nav className={caixaMenuClasses}>
                <Link to="/associados" className="link" onClick={() => navigateTo('/associados')}>Associados</Link>
                <Link to="/veiculos" className="link" onClick={() => navigateTo('/veiculos')}>Veiculos</Link>
                <Link to="/contratos" className="link" onClick={() => navigateTo('/contratos')}>Contratos</Link>
                <button onClick={logout} className="link">Logout</button>
            </nav>
        </div>
    )
}
