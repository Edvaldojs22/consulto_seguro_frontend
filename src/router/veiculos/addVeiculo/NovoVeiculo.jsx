import "./NovoVeiculo.css";
import LogoCart from "../../../assets/img/car.png";
import { MdOutlineAttachMoney } from "react-icons/md";
import Layout from "../../../components/layout.jsx";

export default function NovoVeiculo() {
  return (
    <Layout>
      <div className="caixaForm">
        <form className="formVeiculo">
          <img src={LogoCart} alt="" />
          <h1>Dados Básicos</h1>
          <section className="dadosBasico">
            <div className="placaRenavm">
              <label htmlFor="campoPlaca">Placa:</label>
              <input
                type="text"
                id="campoPlaca"
                required
                placeholder="Placa :"
              />

              <label htmlFor="campoRenavam">Renavam:</label>
              <input
                type="text"
                id="campoRenavam"
                required
                placeholder="Renavam :"
              />
            </div>

            <div className="chassiAno">
              <label htmlFor="campoChassi">Chassi:</label>
              <input
                type="text"
                id="campoChassi"
                required
                placeholder="Chassi :"
              />

              <label htmlFor="campoTexto">Ano Fabricação:</label>
              <input type="date" id="campoText" required />
            </div>

            <div className="anoCor">
              <label htmlFor="campoAnoModelo">Ano Modelo:</label>
              <input type="date" id="campoAnoModelo" required />

              <label htmlFor="campoCor">Cor:</label>
              <input type="text" id="campoCor" required placeholder="Cor:" />
            </div>

            <div className="alienadoCategoria">
              <label htmlFor="campoAlienado">Alienado:</label>
              <select name="campoAlienado" id="campoAlienado" required>
                <option value="SIM">SIM</option>
                <option value="NÃO">NÃO</option>
              </select>

              <label htmlFor="campoCategoria">Categoria:</label>
              <select name="campoCategoria" id="campoCategoria">
                <option value="PARTICULA">PARTICULA</option>
                <option value="ALUGUEL">ALUGUEL</option>
                <option value="OFICIAL">OFICIAL</option>
              </select>
            </div>

            <div className="propietarioDocument">
              <label htmlFor="campoProprietario">Propritário:</label>
              <input
                type="text"
                id="campoProprietario"
                required
                placeholder="Proprietário :"
              />

              <label htmlFor="campoDocumentacaoProprietario">
                Documentação Proprietário:
              </label>
              <input
                type="text"
                id="campoDocumentacaoProprietario"
                required
                placeholder="Documentação :"
              />
            </div>

            <div className="ufCidade">
              <label htmlFor="campoUF">UF:</label>
              <input type="text" id="campoUF" required placeholder="UF:" />

              <label htmlFor="campoCidade">Cidade:</label>
              <input
                type="text"
                id="campoCidade"
                required
                placeholder="Cidade:"
              />
            </div>
          </section>

          <h1>Dados Veículo</h1>

          <section className="dadosVeiculo">
            <label htmlFor="campoTipoVeiculo">Tipo Veículo:</label>
            <select name="campoTipoVeiculo" id="campoTipoVeiculo">
              <option value="CARROS">CARROS</option>
              <option value="MOTOS">MOTOS</option>
              <option value="BIKES">BIKES</option>
            </select>

            <div className="marcaModelo">
              <label htmlFor="campoMarca">Marca:</label>
              <input
                type="text"
                id="campoMarca"
                required
                placeholder="Marca:"
              />

              <label htmlFor="campoModelo">Modelo:</label>
              <input
                type="text"
                id="campoModelo"
                required
                placeholder="Modelo:"
              />
            </div>

            <label htmlFor="campoCombustivel">Combustivél:</label>
            <input
              type="text"
              id="campoCombustivel"
              placeholder="Combustivél:"
            />

            <div className="codigoConsulta">
              <label htmlFor="campoCodigoFipe">Código FIPE:</label>
              <input type="text" id="campoCodigoFipe" placeholder="Código:" />

              <label htmlFor="campoConsultaFipe">Última consult FIPE:</label>
              <input type="date" id="campoConsultaFipe" />
            </div>

            <label htmlFor="campoValor">Valor</label>
            <div className="caixa-money">
              <MdOutlineAttachMoney className="iconMoney" />
              <input
                type="text"
                id="campoValor"
                required
                placeholder="Ex: 00.00,00"
              />
            </div>

            <label htmlFor="campoObservacao">Observação:</label>
            <textarea name="campoObservacao" id="campoObservacao"></textarea>
          </section>

          <button type="submit">Salvar</button>
        </form>
      </div>
    </Layout>
  );
}
