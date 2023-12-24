import { FaUser } from "react-icons/fa";
import './Cliente.css'


export default function Cliente() {
    return (
        <div className="caixa-cliente">
            <FaUser className="iconUser-cliente"/>
            <div className="numero-cpf">
                <p>Nome: Cliente</p>
                <p> CPF: 000.000.000-0</p>
            </div>
            <p className="fone">N: 88 8888888</p>
        </div>

    )
}