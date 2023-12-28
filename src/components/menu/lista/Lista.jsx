import { Link } from "react-router-dom";


export default function Lista() {

    return (
        <div className="lista-associados">

            <Link className="caixa-cliente">

                <div className="icon-user">

                </div>

                <div className="numero-cpf">
                    <p>{cliente.nome}</p>
                    <p> CPF :{cliente.cpf}</p>
                </div>
                
                <p className="fone">N: {cliente.telefone}</p>

            </Link>

        </div>
    )
}