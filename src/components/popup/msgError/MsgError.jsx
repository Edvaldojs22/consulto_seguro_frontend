import './MsgError.css';
import { BiSolidErrorAlt } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";



export default function MsgError() {

    return (
        <div className='msgmPainel'>
            <div className='msgmIcon'>
                <BiSolidErrorAlt  />
            </div>

            <p className='msgmText'>Usuário ou Senha invalido</p>

            <div className='msgmClose'>
                <IoCloseSharp />
            </div>
        </div>
    )
}