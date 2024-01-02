import { useParams } from "react-router-dom"
import './AssociadosInfo.css'
import { listaCliente } from "./Associados";
import { FaCircle, FaCircleUser } from "react-icons/fa6";

export default function ClienteInfo() {

    const { id } = useParams();
    const clientSelecionados = listaCliente.find(cliente => cliente.id.toString() === id)


    return (
        <div className="caixa">
            <FaCircleUser className="iconUserInfo" />
            <div className="caixaInfos">

                <h1>Dados Básicos</h1>
                <div><p><span>Nome Associados :</span> {clientSelecionados.nome}</p></div>
                <div className="caixa-doisP">
                    <p><span>CEP :</span> {clientSelecionados.cep}</p>
                    <p><span>Endereço :</span> Rua qaqaqa</p>
                </div>
                <div><p><span>Bairro :</span> {clientSelecionados.bairro}</p> </div>
                <div><p><span>Cidade :</span> {clientSelecionados.cidade}</p> </div>
                <div className="caixa-doisP">
                    <p><span>Telefone 1:</span> {clientSelecionados.telefone}</p>
                    <p><span>Telefone 2:</span> {clientSelecionados.telefone}</p>
                </div>
                <div><p><span>Tipo de Pessoa :</span> {clientSelecionados.tipoPessoa}</p></div>

                {
                    clientSelecionados.tipoPessoa == "Física" &&

                    <section className="caixa-pessoaFisica">

                        <h2>Dados Pessoa Física</h2>
                        <div><p><span>CPF :</span> {clientSelecionados.cpf}</p></div>

                        <div className="caixa-doisP">
                            <p><span>Identidade :</span> {clientSelecionados.identidade}</p>
                            <p><span>Ógão emissor :</span> {clientSelecionados.orgaoEmissor}</p>
                        </div>

                        <div className="caixa-doisP">
                            <p><span>Profissão :</span> {clientSelecionados.profissao}</p>
                            <p><span>Estado Civil :</span> {clientSelecionados.estadoCivil}</p>
                        </div>
                    </section>
                }

                <div className="dataNascimento"> <p><span>DATA NASCIMENTO :</span> {clientSelecionados.dataNascimento}</p></div>

              

            </div>
            <button className="butao-aditar">Editar</button>
        </div>

    )
}