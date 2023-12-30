import { useParams } from "react-router-dom"

import { listaVeiculos } from "./Veiculos";

export default function VeiculoInfo() {

    const { id } = useParams();
    console.log(id);
    const veiculoSelecionado = listaVeiculos.find(veiculo => veiculo.id.toString() === id)


    return (
        <div>
            <h1>Veiculo</h1>
            <h1>Veiculo: {veiculoSelecionado.nome}</h1>
            <p>Placa: {veiculoSelecionado.placa}</p>
        </div>
    )
}