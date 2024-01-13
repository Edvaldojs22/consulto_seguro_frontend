import { Link, useParams } from "react-router-dom";
import { listaVeiculos } from "../veiculos/Veiculos";
import LogoCart from "../../../assets/img/car.png";
import "./VeiculoInfo.css"
import { IoIosArrowBack } from "react-icons/io";
import { useState } from "react";


export default function VeiculoInfo() {

    const [mostraBotao, setMostraBotao] = useState('false');

    const handeClick = () => {
       setMostraBotao(!mostraBotao);
   }

    const { id } = useParams();
    console.log(id);
    const veiculoSelecionado = listaVeiculos.find(veiculo => veiculo.id.toString() === id)


    return (
        <div className="caixa">
            <img src={LogoCart} alt="" />
            <div className="caixaInfos">

                <h1>Dados Básicos</h1>
                <div className="caixa-doisP">
                    <p><span>Placa :</span> {veiculoSelecionado.placa}</p>
                    <p><span>Renavam :</span> {veiculoSelecionado.renavam}</p>
                </div>
                <div className="caixa-doisP">
                    <p><span>Chassi :</span> {veiculoSelecionado.chassi}</p>
                    <p><span>Cor :</span> {veiculoSelecionado.cor}</p>
                </div>
                <div className="caixa-doisP">
                    <p><span>Ano Fabricação :</span> {veiculoSelecionado.anoFabricacao}</p>
                    <p><span>Alienado :</span> {veiculoSelecionado.alienado}</p>
                </div>
                <div><p><span>Proprietario:</span> {veiculoSelecionado.proprietario}</p> </div>
                <div><p><span>Documentação:</span> {veiculoSelecionado.documentacao}</p> </div>
                <div className="caixa-doisP">
                    <p><span>UF :</span> {veiculoSelecionado.uf}</p>
                    <p><span>Cidade :</span> {veiculoSelecionado.cidade}</p>
                </div>



                <h2>Dados do Veículo</h2>
                <div className="caixa-doisP">
                    <p><span>Tipo de Veículo :</span> {veiculoSelecionado.tipoVeiculo}</p>
                    <p><span>Marca :</span> {veiculoSelecionado.marca}</p>
                </div>

                <div className="caixa-doisP">
                    <p><span>Modelo :</span> {veiculoSelecionado.modelo}</p>
                    <p><span>Ano do Modelo :</span> {veiculoSelecionado.modeloAno}</p>
                </div>

                <div className="caixa-doisP">
                    <p><span>Combustivel :</span> {veiculoSelecionado.combustivel}</p>
                    <p><span>Codigo FIPE :</span> {veiculoSelecionado.codigoFipe}</p>
                </div>


                <div className="valor"> <p>
                    <span>VALOR :</span>
                    <span>R$ </span> {veiculoSelecionado.valor}</p>
                </div>

                <button className="botaoSalvar" style={{display: mostraBotao ? 'none' : 'flex'}} >Salvar</button>


            </div>
            <div className="botao-arrow">
                <button className="butao-aditar" onClick={handeClick}>Editar</button>
                <Link to="/consulto_seguro/veiculos">
                    <IoIosArrowBack className="arrowVolta" />
                </Link>

            </div>
        </div>
    )
}