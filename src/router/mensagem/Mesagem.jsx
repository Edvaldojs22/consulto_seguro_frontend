import "./Mensagem.css";
import { listaCliente } from "../associados/associado/Associados";
import { useState } from "react";

export default function Mensagem() {


    const [clienteCidade, setClieenteCidade] = useState('');

    const clientesFiltradosCidade = listaCliente.filter(cliente =>
        cliente.cidade.toLocaleLowerCase().includes(clienteCidade.toLocaleLowerCase())

    );
    const pesquisaInpuntCidade = (e) => {
        setClieenteCidade(e.target.value);
    }

    return (
        <div className="painelMensagem">

            <section className="pesquisaAssociado">
                <div className="p-Inpunt">
                    <p>Filtrar Associado</p>

                    <div className="iconsPosition">

                        <div className="clienteNumber">{clientesFiltradosCidade.length}</div>

                        <input type="text" placeholder="Cidade"
                            value={clienteCidade}
                            onChange={pesquisaInpuntCidade} />

                        <div className="caixaCheckGeral">
                            <input id="checkGeral" type="checkbox" name="campoCheckGeral" required/>
                        </div>

                    </div>

                </div>

                <div className="associadoPesquisa">
                    {clientesFiltradosCidade.map(cliente => (
                        <div className="p-check">
                            <p>{cliente.nome}</p>
                            <input id="check" type="checkbox" />

                        </div>
                    ))}
                </div>
            </section>

            
            <div className="painelEnvioMensagem">
                <p>Escreva o Texto Desejado</p>
                <textarea required className="textoMensagem" id="mensagem"></textarea>
                <button type="submit">Evnviar</button>
            </div>
        </div>
    )
} 