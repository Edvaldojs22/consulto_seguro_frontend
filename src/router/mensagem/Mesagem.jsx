import "./Mensagem.css";
import { listaCliente } from "../associados/associado/Associados";
import { useState } from "react";
import Layout from "../../components/layout";

export default function Mensagem() {
  const [clienteCidade, setClieenteCidade] = useState("");
  const [checkGeral, setCheckGeral] = useState(false);

  const clientesFiltradosCidade = listaCliente.filter((cliente) =>
    cliente.cidade
      .toLocaleLowerCase()
      .includes(clienteCidade.toLocaleLowerCase())
  );
  const pesquisaInpuntCidade = (e) => {
    setClieenteCidade(e.target.value);
  };

  const handleCheckGeralChange = (e) => {
    const isChecked = e.target.checked;
    setCheckGeral(isChecked);

    // Atualiza o estado de todos os checkboxes individuais com base no estado do checkbox geral
    const checkboxesIndividuais = document.querySelectorAll(
      '.p-check input[type="checkbox"]'
    );
    checkboxesIndividuais.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  };

  return (
    <Layout>
      <div className="painelMensagem">
        <section className="pesquisaAssociado">
          <div className="p-Inpunt">
            <p>Filtrar Associado</p>

            <div className="iconsPosition">
              <div className="clienteNumber">
                {clientesFiltradosCidade.length}
              </div>

              <input
                type="text"
                placeholder="Cidade"
                value={clienteCidade}
                onChange={pesquisaInpuntCidade}
              />

              <div className="caixaCheckGeral">
                <input
                  id="checkGeral"
                  type="checkbox"
                  name="campoCheckGeral"
                  checked={checkGeral}
                  onChange={handleCheckGeralChange}
                />
              </div>
            </div>
          </div>

          <div className="associadoPesquisa">
            {clientesFiltradosCidade.map((cliente) => (
              <div key={cliente.id} className="p-check">
                <p>{cliente.nome}</p>
                <input id="check" type="checkbox" />
              </div>
            ))}
          </div>
        </section>

        <div className="painelEnvioMensagem">
          <p>Escreva o Texto Desejado</p>
          <textarea required className="textoMensagem" id="mensagem"></textarea>
          <button type="submit">Enviar</button>
        </div>
      </div>
    </Layout>
  );
}
