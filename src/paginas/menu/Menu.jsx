import { LuMenu } from "react-icons/lu";
import './Menu.css';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            <div className={caixaMenuClasses}>
                <p onClick={() => navigateTo("/associados")}>Associado</p>
                <p onClick={() => navigateTo("/veiculos")}>Veículo</p>
                <p onClick={() => navigateTo("/contrato")}>Contrato</p>
            </div>

        </div>
    )
}