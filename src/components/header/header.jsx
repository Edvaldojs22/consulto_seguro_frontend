import Menu from "../menu/Menu"
import { FaCircleUser } from "react-icons/fa6";
import AuthService from "../../services/authService"
import "./header.css"

export default function Header(){
    const authService = AuthService();
    return (
        <div>

        <Menu />
            <header>
                <div className='painel-icon'>
                    <FaCircleUser className='icon-user' />
                    <p>{authService.getUsuario()}</p>
                </div>
            </header>
        </div>
    )
}