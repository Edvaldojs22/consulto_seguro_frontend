import { useParams } from "react-router-dom"

import { listaCliente } from "../associados/Associados";

export default function ClienteInfo(page) {

    const { id } = useParams();
    const clientSelecionados = listaCliente.find(cliente => cliente.id.toString() === id)


    return (
        <div>
            <h1>Associado</h1>
            <h1>Cliente : {clientSelecionados.nome} </h1>
            <p>CPF :{clientSelecionados.cpf}</p>
        </div>
    )
}