import './MsgmVerificando.css'
import { GiConfirmed } from "react-icons/gi";
export default function MsgmVerificando({text, icone, classe}) {

    return (

        <div className={`msgPeinelVerificando ${classe}`}>
            <p className='icon'>{icone}</p>
            <p className='text'>{text}</p>

            <div className="carregamento">

            </div>

        </div>
    )
}