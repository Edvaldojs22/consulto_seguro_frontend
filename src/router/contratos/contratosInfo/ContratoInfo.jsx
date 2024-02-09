import { Link, useParams } from "react-router-dom";
import { listaContratos } from "../contrato/Contratos";
import { IoDocumentText } from "react-icons/io5";
import "./ContratoInfo.css";
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";
import Layout from "../../../components/layout.jsx";
import RodaPe from "../../../components/rodaPe/RodaPe.jsx";
import Menu from "../../../components/menu/Menu.jsx";

export default function ContratosInfo() {
  const [mostraBotao, setMostraBotao] = useState("false");

  const handeClick = () => {
    setMostraBotao(!mostraBotao);
  };

  const { id } = useParams();
  const contratoSelecionado = listaContratos.find(
    (contrato) => contrato.id.toString() === id
  );

  return (
    
      <div className="caixaContratos">
        <Menu />
        <IoDocumentText className="iconDocument" />
        <div className="caixaInfosContratos">
          <h1>Dados Básicos</h1>
          <section className="dadosBasicosContrato">
            <div className="RV">
              <p>
                <span>Regional</span>
                {contratoSelecionado.regional}
              </p>
              <p>
                <span>Vendedor</span> {contratoSelecionado.vendedor}
              </p>
            </div>

            <div className="ID">
              <p>
                <span>Inicio Contrato</span>{" "}
                {contratoSelecionado.inicioContrato}
              </p>
              <p>
                <span>Data Renovação</span>{" "}
                {contratoSelecionado.renovarContrato}
              </p>
            </div>

            <p>
              <span>Tipo De Contrato</span>
              {contratoSelecionado.tipoContrato}
            </p>
            <p>
              <span>Associado</span>
              {contratoSelecionado.associado}
            </p>
            <p>
              <span>Veículo</span>
              {contratoSelecionado.contrato}
            </p>
            <p>
              <span>Plano</span> {contratoSelecionado.plano}
            </p>
          </section>

          <section className="dadosValores">
            <div className="CD">
              <p>
                <span>Conta Carnê/Boleto</span>BANCO SICOOB
              </p>
              <p>
                <span>Dia Vencimento</span>
                {contratoSelecionado.diaVencimento}
              </p>
            </div>

            <div className="MV">
              <p className="MF">
                <span>Modelo Finaceiro</span>
                {contratoSelecionado.modeloFinanceiro}
              </p>
              <p>
                <span>Valor Plano</span>
                {contratoSelecionado.valorPlano}
              </p>
            </div>

            <div className="CA">
              <p>
                <span>Coberturas Adicionais</span>
                {contratoSelecionado.corbeturasAdicionais}
              </p>
              <p>
                <span>Desconto Mensalidade</span>
                {contratoSelecionado.descontoMensalidade}
              </p>
            </div>

            <p>
              <span>Valor Mensalidade</span>
              {contratoSelecionado.valorMensalidade}
            </p>
          </section>

          <div className="observacao">
            <p>Observação</p>
            <textarea name="campoObservacao"></textarea>
          </div>

          <button
            className="botaoSalvar"
            style={{ display: mostraBotao ? "none" : "flex" }}
          >
            Salvar
          </button>
        </div>
        <div className="botao-arrow">
          <button className="butao-aditar" onClick={handeClick}>
            Editar
          </button>
          <Link to="/contratos">
            <IoIosArrowBack className="arrowVolta" />
          </Link>
        </div>

      </div>
    
  );
}
