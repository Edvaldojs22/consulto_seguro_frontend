import { listaCliente } from "../../associados/associado/Associados"
import { MdEditDocument } from "react-icons/md";
import RodaPeAdd from "../../../components/rodaPe/RodaPeAdd"
import "./AddContrato.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { listaVeiculos } from "../../veiculos/veiculos/Veiculos"


export default function AddContrato() {

  
    //Codigo pesquisa de Clientes
    const [inputValue, setInputValue] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    const handleInputChange = (event) => {
        const value = event.target.value.toLowerCase();
        setInputValue(value);

        const filteredClients = listaCliente.filter(cliente => cliente.nome.toLowerCase().includes(value));
        setSuggestions(filteredClients);
    }

    const handleOptionClick = (cliente) => {
        setInputValue(cliente.nome)
        setSuggestions([]);
    };
    //----------------------------

    //Codigo para pesquisa de Veiculos

    const [inputValue2, setInputValue2] = useState('');
    const [suggestions2, setSuggestions2] = useState([]);


    const handleInputChange2 = (event) => {
        const value = event.target.value.toLowerCase();
        setInputValue2(value);

        const filteredVeiculos = listaVeiculos.filter(veiculo => veiculo.nome.toLowerCase().includes(value));
        setSuggestions2(filteredVeiculos);
    }

    const handleOptionClick2 = (veiculo) => {
        setInputValue2(veiculo.nome)
        setSuggestions2([]);
    };



    //---------------------------

    return (

        <div className="caixaForm">
            <form className="formContrato" >

                < MdEditDocument className="document " />
                <h1>Contrato</h1>
                <section className="dadosBasico">
                    <div className="regionalVendedor">
                        <label htmlFor="campoRegional">Regional:</label>
                        <input type="text" id='campoRegional'  placeholder='AG - REGIONAL LEANDRO' />

                        <label htmlFor="campoVendedor">Vendedor:</label>
                        <select name="campoVendedor" id="campoVendedor" required>
                            <option value="">ALEXANDRE INACIO DA SILVA</option>
                            <option value="">ALEXANDRE JOSE BEZERRA</option>
                            <option value="">ALEXSANDRO AZEVEDO DOS SANTOS</option>
                            <option value="">CAIO FELIPE CARVALHO NASCIMENTO </option>
                            <option value="">ERIKA NATHALIA DA SILVA FERREIRA</option>
                            <option value="">ERIVELTON ALVES RAMOS</option>
                            <option value="">ESCRITÓRIO</option>
                            <option value="">JACKSON BRUNO</option>
                            <option value="">JAYNE DANTIELE SOUSA SILVA</option>
                            <option value="">JOAO ANTONIO FERREIRA MAIA</option>
                            <option value="">JOELSON GONCALVES DA SILVA</option>
                            <option value="">JOSE ADRIANO SANTOS SILVA</option>
                            <option value="">JULIANO CARLOS DA ROCHA</option>
                            <option value="">KASSIA MARIA</option>
                            <option value="">KATIENE RUTH</option>
                            <option value="">LEANDRO</option>
                            <option value="">LUCAS FELIPE SANTANA ANDRADE</option>
                            <option value="">LUIZ FELIPE DA ROCHA CASTRO</option>
                            <option value="">MARIA GABRIELE SILVA LIMA</option>
                            <option value="">MATEUS MESTRE FERREIRA </option>
                            <option value="">THIAGO SALES DE SOUSA</option>
                        </select>
                    </div>

                    <div className="data-TipoContrato">
                        <label htmlFor="campoInicioContrato">Início do Contrato:</label>
                        <input type="date" name="campoInicioContrato" id="campoInicioContrato" required />

                        <label htmlFor="campoRenovacaoContrato">Renovação do Contrato:</label>
                        <input type="date" name="campoRenovacaoContrato" id="campoRenovacaoContrato" required />


                        <label htmlFor="campoTipoContrato">Tipo de Contrato:</label>
                        <select name="campoTipoContrato" id="campoTipoContrato" required>
                            <option value="">FILIAÇÃO</option>
                            <option value="">TRANSFERÊNCIA DE TITULARIDADE</option>
                            <option value="">TRANFERÊNCIA DE VEÍCULOS</option>
                        </select>
                    </div>


                    <section className="dadosAssociadoVeiculo">
                        {/* Associado-------------------------------------------- */}
                        <div className="AssociadoVeiculo">
                            <label htmlFor="campoAssociado">Associado</label>
                            <Link to={"/associados/novoAssociado"} className="add">
                                +
                            </Link>
                            <input type="text" id="campoAssociado" value={inputValue} onChange={handleInputChange} required />
                        </div>

                        <div className="caixaClienteInpunt">

                            <div className="caixaScrollCliente">
                                {suggestions.map((cliente, index) => (
                                    <div key={index} onClick={() => handleOptionClick(cliente)}>
                                        <p>{cliente.nome}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Veiculo--------------------------------------------------- */}
                        <div className="AssociadoVeiculo">
                            <label htmlFor="campoVeiculo">Veiculo</label>
                            <Link to={"/veiculos/novoVeiculos"} className="add">
                                +
                            </Link>
                            <input type="text" id="campoVeiculo" value={inputValue2} onChange={handleInputChange2} required />
                        </div>

                        <div className="caixaClienteInpunt">
                            <div className="caixaScrollCliente">
                                {suggestions2.map((veiculo, index) => (
                                    <div key={index} onClick={() => handleOptionClick2(veiculo)}>
                                        <p>{veiculo.nome}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>



                </section>

                <section className="dadosValores">

                    <label htmlFor="campoPlanos">Planos:</label>
                    <select name="planos" id="campoPlanos" required>
                        <option value=""></option>
                        <option value="">AG - MOTOCICLETA (PLANO DIFERENCIADO)  - De R$ 0,00 até R$ 40.000,00</option>
                        <option value="">AG - MOTOCICLETAS PLANO BASICO 04  - 2022 - De R$ 6.000,01 até R$ 7.000,00</option>
                        <option value="">AG - MOTOCICLETAS PLANO SLIM 04  - De R$ 6.000,01 até R$ 7.000,00</option>
                        <option value="">AG - MOTOCICLETAS PLANO TOP 04 - 2022 - De R$ 6.000,01 até R$ 7.000,00</option>
                        <option value="">PE - MOTOCICLETAS PLANO BASICO 04 - 2022 - De R$ 6.000,01 até R$ 7.000,00</option>
                        <option value="">PE - MOTOCICLETAS PLANO SLIM 04  - 2022 - De R$ 6.000,01 até R$ 7.000,00</option>
                        <option value="">PE - MOTOCICLETAS PLANO TOP 04 - 2022 - De R$ 6.000,01 até R$ 7.000,00</option>
                        <option value="">PLANO PERSONALIZADO MOTO - De R$ 0,00 até R$ 100.000,00</option>
                    </select>

                    <div className="contaVencimentoModelo">

                        <label htmlFor="campoContaCarne">Conta Carnê/Boleto</label>
                        <select name="tipoConta" id="campoContaCarne" required>
                            <option value=""></option>
                            <option value="">BANCO SICOOB</option>
                            <option value="">CAIXA INTERNO</option>
                            <option value="">EPTA PAY - IUGU</option>
                        </select>

                        <label htmlFor="campoDiaVencimento">Dia Vencimento:</label>
                        <select name="diaVencimento" id="campoDiaVencimento" required>
                            <option value=""></option>
                            <option value="">10</option>
                            <option value="">20</option>
                            <option value="">30</option>
                        </select>

                        <label htmlFor="campoModeloFinanceiro">Modelo Financeiro:</label>
                        <select name="modeloFinanceiro" id="campoModeloFinanceiro" required>
                            <option value=""></option>
                            <option value="">RATEIO</option>
                            <option value="">CARNÊ</option>
                        </select>
                    </div>

                    <div className="valoresPCDM">
                        <label htmlFor="campoValorPlano">Valor Plano</label>
                        <input type="text" name="ValorPlano" id="campoValorPlano" placeholder="0,00" required />

                        <label htmlFor="campoCoberturasAdicionais">Coberturas Adicionais</label>
                        <input type="text" name="CoberturasAdicionais" id="campoCoberturasAdicionais" placeholder="0,00" />

                        <label htmlFor="campoDescontoMensalidade">Desconto da Mensalidade</label>
                        <input type="text" name="DescontoMensalidade" id="campoDescontoMensalidade" placeholder="0,00" />

                        <label htmlFor="campoValorMensalidade">Valor da Mensalidade</label>
                        <input type="text" name="ValorMensalidade" id="campoValorMensalidade" placeholder="0,00" required />
                    </div>

                    <label htmlFor="campoObservacaoCadastro">Observação</label>
                    <textarea name="ObservacaoCadastro" id="campoObservacaoCadastro" ></textarea>
                </section>

                <button type='submit'  >Salvar</button>
            </form>
            <RodaPeAdd />

        </div>

    )
}