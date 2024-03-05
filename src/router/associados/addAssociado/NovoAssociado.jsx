import { useState } from "react";
import "./NovoAssociado.css";
import { FaCircleUser } from "react-icons/fa6";
import { useEffect } from "react";
import MsgmVerificando from "../../../components/popup/msgVerificando/MsgmVerificando";
import { GiConfirmed } from "react-icons/gi";
import { BiSolidError } from "react-icons/bi";


export default function NovoAssociado() {
  const [valorPessoa, setValorPessoa] = useState("Física");

  useEffect(() => {
    const botaoFísica = document.querySelector(".Física");
    const botaoJuridíca = document.querySelector(".Juridíca");
    if (botaoFísica) {
      if (valorPessoa === "Física") {
        botaoFísica.classList.add("físicaGreen");
      } else {
        botaoFísica.classList.remove("FísicaGreen");
      }
    }
  }, [valorPessoa]);

  const ativar = () => {
    if (valorPessoa === "Física") {
      setValorPessoa("Juridíca");
    } else {
      setValorPessoa("Física");
    }
  };



  //mensagem resposta cadastro testes
  const [msgmAtivar, setMsgmAtivar] = useState('')
  const [teste, setTeste] = useState(1)

  const ativarMsg = () => {
    if (teste == 1) {
      setMsgmAtivar(<MsgmVerificando icone={<GiConfirmed />} text='Cadastro Concluído!' classe='classeSucesso' />)
      setTimeout(() => {
        setMsgmAtivar('')
      }, 30000)
      setTeste(2)
    }
    else if (teste == 2) {
      setMsgmAtivar(<MsgmVerificando icone={<BiSolidError />} text='Erro ao cadastrar' classe='classeErro' />)
      setTimeout(() => {
        setMsgmAtivar('')
      }, 30000)
      setTeste(1)
    }
  }
  //______________________________________




  return (

    <div className="caixaForm">
      {msgmAtivar}
      <form className="formAssociado">

        <FaCircleUser className="userAdd" />
        <h1>Dados Básicos</h1>
        <section className="dadosBasicos">


          <div className="caixaNomeAssociado">
            <label htmlFor="campoTexto">Nome Associados:</label>
            <input type="text" id="campoText" />
          </div>


          <div className="cepEnderecoBairro">
            <div className="caixaCep">
              <label htmlFor="campoCEP">CEP:</label>
              <input type="text" id="campoCEP" />
            </div>

            <div className="caixaEndereco">
              <label htmlFor="campoEndereco">Endereço:</label>
              <input
                type="text"
                id="campoEndereco"
                required

              />
            </div>

            <div className="caixaBairro">
              <label htmlFor="campoBairro">Bairro:</label>
              <input type="text" id="campoBairro" />
            </div>
          </div>




          <div className="caixaCidade">
            <label htmlFor="campoCidade">Cidade:</label>
            <input
              type="text"
              id="campoCidade"
              required
            />
          </div>



          <div className="fone1">
            <label htmlFor="campoTelefone">fone 1:</label>
            <input
              type="text"
              id="campoTelefone"
              required
            />
          </div>

          <div className="fone2">
            <label htmlFor="campoTelefone 2:">Fone 2:</label>
            <input type="text" id="campoTelefone 2:" />
          </div>

        </section>


        <span>Tipo de Pessoa</span>
        <section onClick={ativar} className="botoesValor">
          <div
            className={`botaoPessoa Física ${valorPessoa === "Física" ? "fisicaGreen" : ""
              }`}
          >
            <p>Física</p>
          </div>
          <div
            className={`botaoPessoa Juridíca ${valorPessoa === "Juridíca" ? "JuridícaGreen" : ""
              }`}
          >
            <p>Jurídica</p>
          </div>
        </section>

        {valorPessoa === "Física" && (
          <section className="dadosPessoasF">

            <div className="cpfIndentidadeOrgao">
              <div className="caixaCpf">
                <label htmlFor="campoCPF">CPF:</label>
                <input type="text" id="campoCPF" />
              </div>

              <div className="caixaIndentidade">
                <label htmlFor="campoIndentidade">Indentidade:</label>
                <input
                  type="text"
                  id="campoIndentidade"
                  required

                />
              </div>

              <div className="caixaOrgao">
                <label htmlFor="campoOrgaoEmissor">Órgão Emissor:</label>
                <input
                  type="text"
                  id="campoOrgaoEmissor"

                />
              </div>
            </div>



            <div className="caixaProfisao">
              <label htmlFor="campoProfisão">Profisão:</label>
              <input
                type="text"
                id="campoProfisão"

              />
            </div>

            <div className="caixaEstadoCivil">
              <label htmlFor="campoEstadoCivil">Estado Civil:</label>
              <input
                type="text"
                id="campoEstadoCivil"

              />
            </div>



            <div className="dataNascimento">
              <label htmlFor="campoData">Data Nascimento:</label>
              <input type="date" id="campoDataNascimento" />
            </div>

          </section>
        )}

        {valorPessoa === "Juridíca" && (
          <section className="dadosPessoasJ">


            <div className="caixaCpf">
              <label htmlFor="campoCNPJ">CNPJ:</label>
              <input type="text" id="campoCNPJ" />
            </div>
            <div className="caixaIndentidade">

              <label htmlFor="campoInscricaoEstadual">
                Inscrição Estadual:
              </label>
              <input
                type="text"
                id="campoInscricaoEstadual"
                required

              />
            </div>

            <div className="caixaOrgao">
              <label htmlFor="campoRazaoSocial">Razão Social:</label>
              <input
                type="text"
                id="campoRazaoSocial"
                required

              />
            </div>
            <div className="nomeCpfIndentidadeResposavel">

              <div className="caixaResponsavel">
                <label htmlFor="campoNomeResponsavel">Nome Responsável:</label>
                <input
                  type="text"
                  id="campoNomeResponsavel"
                  required
                />
              </div>

              <div className="caixaCpfResponsavel">
                <label htmlFor="campoCPFResponsavel">CPF Responsável:</label>
                <input
                  type="text"
                  id="campoCPFResponsavel"
                  required
                />
              </div>


              <div className="caixaIndentidadeResponsavel">
                <label htmlFor="campoIndentidadeResponsavel">
                  Indentidade Responsável:
                </label>
                <input
                  type="text"
                  id="campoIndentidadeResponsavel"
                  required
                />
              </div>
            </div>

            <div className="caixaEmail">
              <label htmlFor="campoEmail">Email:</label>
              <input
                type="text"
                id="campoEmail"
                required
              />
            </div>

            <div className="caixaTelefone">
              <label htmlFor="campoTelefone">Telefone:</label>
              <input
                type="text"
                id="campoTelefone"
                required
              />
            </div>

            <div className="dataNascimento">
              <label htmlFor="campoDataNascimento">Data Nascimento:</label>
              <input type="date" id="campDataNascimento" required />
            </div>
          </section>
        )}

        <button type="submit" className="botao-salvar" onClick={ativarMsg}>
          Salvar
        </button>
      </form>
    </div>

  );
}
