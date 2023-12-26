import { LuMenu } from "react-icons/lu";
import './Menu.css';
import { useState } from "react";

export default function Menu() {

    const [menuAberto, setMenuAberto] = useState(false);

    const ativaMenu = () =>{
        if(menuAberto){
            setMenuAberto(false)
        }else{
            setMenuAberto(true)
        }
    }

    const caixaMenuClasses = 'caixa-menu ' + (menuAberto ? 'caixa-menuAberta' : '');

  
        

    return (
        <div>
            <LuMenu className='icon-menu' onClick={ativaMenu} />
            <div className={caixaMenuClasses}>
                <p>Associado</p>
                <p>Veículo</p>
                <p>Contrato</p>
            </div>

        </div>
    )
}