import { FaCircleUser } from "react-icons/fa6";
import Menu from "../../components/menu/Menu";
import { IoFilterSharp } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoCart from '../../assets/img/car.png';
import './Veiculo.css';

export const listaVeiculos = [
  {
    id: 1,
    nome: "Gol Quadrado",
    placa: "ABC1234",
    modelo: "Sedan",
    cor: "Azul",
    chassi: "WVWZZZ16ZCW123456",
  },
  {
    id: 2,
    nome: "Civic",
    placa: "DEF5678",
    modelo: "SUV",
    cor: "Preto",
    chassi: "JHMGE8H47CC123456",
  },
  {
    id: 3,
    nome: "CBR 1000RR",
    placa: "GHI9012",
    modelo: "Esportiva",
    cor: "Vermelha",
    chassi: "JH2SC5907DK123456",
  },
  {
    id: 4,
    nome: "Fusca",
    placa: "JKL3456",
    modelo: "Hatchback",
    cor: "Verde",
    chassi: "118ABCD5678912345",
  },
  {
    id: 5,
    nome: "Mustang",
    placa: "MNO7890",
    modelo: "Conversível",
    cor: "Amarelo",
    chassi: "1FA6P8TH5F5101234",
  },
  {
    id: 6,
    nome: "Harley-Davidson Sportster",
    placa: "PQR1234",
    modelo: "Chopper",
    cor: "Preto",
    chassi: "1HD1LC319CC123456",
  },
  {
    id: 7,
    nome: "Hilux",
    placa: "STU5678",
    modelo: "Caminhonete",
    cor: "Branco",
    chassi: "MR0FZ29G001234567",
  },
  {
    id: 8,
    nome: "Camaro",
    placa: "VWX9012",
    modelo: "Coupé",
    cor: "Prata",
    chassi: "2G1FC1EV8A9101234",
  },
  {
    id: 9,
    nome: "Ducati Monster",
    placa: "YZA3456",
    modelo: "Custom",
    cor: "Azul",
    chassi: "ZDM1RANN0FB123456",
  },
  {
    id: 10,
    nome: "Uno",
    placa: "BCD7890",
    modelo: "Compacto",
    cor: "Vermelho",
    chassi: "9BD146000M2101234",
  },
  {
    id: 11,
    nome: "Odyssey",
    placa: "EFG1234",
    modelo: "Minivan",
    cor: "Laranja",
    chassi: "5FNRL5H69CB123456",
  },
  {
    id: 12,
    nome: "Toyota Corolla",
    placa: "HIJ5678",
    modelo: "Sedan",
    cor: "Prata",
    chassi: "JTDBU4EE0AJ123456",
  },
  {
    id: 13,
    nome: "Ford Escape",
    placa: "KLM9012",
    modelo: "SUV",
    cor: "Branco",
    chassi: "1FMCU0J92EUC12345",
  },
  {
    id: 14,
    nome: "Yamaha R6",
    placa: "NOP3456",
    modelo: "Esportiva",
    cor: "Azul",
    chassi: "JYARJ16E4FA123456",
  },
  {
    id: 15,
    nome: "VW Polo",
    placa: "QRS7890",
    modelo: "Hatchback",
    cor: "Vermelho",
    chassi: "WVWZZZ6RZMY123456",
  },
  {
    id: 16,
    nome: "Chevrolet Corvette",
    placa: "TUV1234",
    modelo: "Conversível",
    cor: "Amarelo",
    chassi: "1G1YB3D79E5112345",
  },
  {
    id: 17,
    nome: "Suzuki Boulevard",
    placa: "WXY5678",
    modelo: "Cruiser",
    cor: "Preto",
    chassi: "JS1VY53A6G2101234",
  },
  {
    id: 18,
    nome: "Ford Ranger",
    placa: "ZAB9012",
    modelo: "Pickup",
    cor: "Verde",
    chassi: "1FTER4FH4LL123456",
  },
  {
    id: 19,
    nome: "Audi A5",
    placa: "CDE3456",
    modelo: "Coupé",
    cor: "Cinza",
    chassi: "WAUDGAFH1DN123456",
  },
  {
    id: 20,
    nome: "Kawasaki Ninja 650",
    placa: "FGH7890",
    modelo: "Sport",
    cor: "Verde",
    chassi: "JKAEXEK14GDA12345",
  },
  {
    id: 21,
    nome: "Fiat Palio",
    placa: "IJK1234",
    modelo: "Compacto",
    cor: "Amarelo",
    chassi: "9BD1786ZDT1234567",
  },
];


export default function Veiculos() {



  const [termoPesquisa, setTermoPesquisa] = useState('');


  const veiculosFiltrados = listaVeiculos.filter(veiculo =>
    veiculo.nome.toLocaleLowerCase().includes(termoPesquisa.toLocaleLowerCase()) ||
    veiculo.placa.toLocaleLowerCase().includes(termoPesquisa.toLocaleLowerCase()) || 
    veiculo.cor.toLocaleLowerCase().includes(termoPesquisa.toLocaleLowerCase())
  );

  const pesquisaInpunt = (e) => {
    setTermoPesquisa(e.target.value);
  }



  return (
    <div className='associados'>

      <Menu />

      <header>
        <div className='painel-icon'>
          <FaCircleUser className='icon-user' />
          <p>José Leandro</p>
        </div>
      </header>

      <div className='caixa-inpunt-pesquisa'>
        <IoFilterSharp className='icon-filter' />
        <input id='inpunt-pesquisa' type="text" placeholder="Pesquisa Veiculo"
          value={termoPesquisa}
          onChange={pesquisaInpunt} />
        <button type='submit' className='botao-pesquisa'>  <CiSearch className='icon-search' /></button>

      </div>

      <div className="caixa-lista-associados">
        <div className="lista-associados">

          {veiculosFiltrados.map(veiculo => (
            <Link key={veiculo.id} to={`/veiculo/${veiculo.id}`} className="caixa-listaVeiculos">


              <img className="icon-cart" src={LogoCart} alt="" />


              <div className="nome-placa">
                <p> <span>Veículo:</span> {veiculo.nome}</p>
                <p><span> Placa:</span> {veiculo.placa}</p>
              </div>
              <p className="cor"> <span>Cor:</span> {veiculo.cor}</p>
            </Link>
          ))}

        </div>
      </div>

      <footer>
        <button className='botao-novoCliente'>Novo Veículo</button>
      </footer>

    </div>
  )
}