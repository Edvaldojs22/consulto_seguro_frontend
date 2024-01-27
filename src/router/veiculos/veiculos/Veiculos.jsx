import { FaCircleUser } from "react-icons/fa6";
import Menu from "../../../components/menu/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";
import LogoCart from '../../../assets/img/carBlack.png';
import './Veiculo.css';
import RodaPe from "../../../components/rodaPe/RodaPe";
import LogoCarAdd from "../../../assets/img/carAdd.png"

export const listaVeiculos = [
  {
    id: 1,
    nome: "Gol Quadrado",
    placa: "ABC1234",
    modelo: "Sedan",
    cor: "Azul",
    chassi: "WVWZZZ16ZCW123456",
    renavam: "12345678901",
    anoFabricacao: 2022,
    alienado: "NÃO",
    documentacao: "123456",
    proprietario: "João da Silva",
    uf: "SP",
    cidade: "São Paulo",
    tipoVeiculo: "Passeio",
    marca: "Volkswagen",
    modeloAno: 2022,
    combustivel: "Gasolina",
    codigoFipe: "012345-6",
    valor: 45000.00
  },

  {
    id: 2,
    nome: "Civic",
    placa: "XYZ5678",
    modelo: "Sedan",
    cor: "Prata",
    chassi: "JHMFA36206S123456",
    renavam: "98765432109",
    anoFabricacao: 2021,
    alienado: "SIM",
    documentacao: "654321",
    proprietario: "Maria Oliveira",
    uf: "RJ",
    cidade: "Rio de Janeiro",
    tipoVeiculo: "Passeio",
    marca: "Honda",
    modeloAno: 2021,
    combustivel: "Flex",
    codigoFipe: "987654-3",
    valor: 60000.00
  },

  {
    id: 3,
    nome: "Onix",
    placa: "DEF5678",
    modelo: "Hatch",
    cor: "Branco",
    chassi: "KL1SH48F9EB123456",
    renavam: "54321098765",
    anoFabricacao: 2023,
    alienado: "NÃO",
    documentacao: "543210",
    proprietario: "José Santos",
    uf: "MG",
    cidade: "Belo Horizonte",
    tipoVeiculo: "Passeio",
    marca: "Chevrolet",
    modeloAno: 2023,
    combustivel: "Álcool/Gasolina",
    codigoFipe: "543210-1",
    valor: 55000.00
  },
  {
    id: 4,
    nome: "Fiesta",
    placa: "HIJ6789",
    modelo: "Hatch",
    cor: "Vermelho",
    chassi: "9BFZZZ12345678901",
    renavam: "12309876543",
    anoFabricacao: 2020,
    alienado: "SIM",
    documentacao: "987654",
    proprietario: "Ana Silva",
    uf: "SP",
    cidade: "Campinas",
    tipoVeiculo: "Passeio",
    marca: "Ford",
    modeloAno: 2020,
    combustivel: "Gasolina",
    codigoFipe: "098765-4",
    valor: 40000.00
  },


  {
    id: 5,
    nome: "Palio",
    placa: "KLM1234",
    modelo: "Hatch",
    cor: "Preto",
    chassi: "9BD17164KS1234567",
    renavam: "76543210987",
    anoFabricacao: 2021,
    alienado: "NÃO",
    documentacao: "765432",
    proprietario: "Carlos Oliveira",
    uf: "SP",
    cidade: "São Paulo",
    tipoVeiculo: "Passeio",
    marca: "Fiat",
    modeloAno: 2021,
    combustivel: "Álcool/Gasolina",
    codigoFipe: "765432-8",
    valor: 48000.00
  },


  {
    id: 6,
    nome: "HB20",
    placa: "NOP5678",
    modelo: "Hatch",
    cor: "Azul",
    chassi: "94A1CACE3EM123456",
    renavam: "10987654321",
    anoFabricacao: 2022,
    alienado: "NÃO",
    documentacao: "109876",
    proprietario: "Fernanda Lima",
    uf: "SP",
    cidade: "São Paulo",
    tipoVeiculo: "Passeio",
    marca: "Hyundai",
    modeloAno: 2022,
    combustivel: "Flex",
    codigoFipe: "109876-2",
    valor: 53000.00
  },

  {
    id: 7,
    nome: "Renegade",
    placa: "QRS9876",
    modelo: "SUV",
    cor: "Cinza",
    chassi: "9BD14816TJ1234567",
    renavam: "76543210987",
    anoFabricacao: 2021,
    alienado: "NÃO",
    documentacao: "765432",
    proprietario: "Lucas Oliveira",
    uf: "RJ",
    cidade: "Niterói",
    tipoVeiculo: "Utilitário Esportivo",
    marca: "Jeep",
    modeloAno: 2021,
    combustivel: "Flex",
    codigoFipe: "765432-1",
    valor: 78000.00
  },

  {
    id: 8,
    nome: "Uno",
    placa: "TUV5432",
    modelo: "Hatch",
    cor: "Amarelo",
    chassi: "9BD195AAXW1234567",
    renavam: "54321098765",
    anoFabricacao: 2022,
    alienado: "SIM",
    documentacao: "543210",
    proprietario: "Larissa Silva",
    uf: "SP",
    cidade: "São José dos Campos",
    tipoVeiculo: "Passeio",
    marca: "Fiat",
    modeloAno: 2022,
    combustivel: "Álcool/Gasolina",
    codigoFipe: "543210-9",
    valor: 35000.00
  },

  {
    id: 9,
    nome: "Cruze",
    placa: "IJK8765",
    modelo: "Sedan",
    cor: "Branco",
    chassi: "8AGFS19H5EJ123456",
    renavam: "98765432109",
    anoFabricacao: 2023,
    alienado: "SIM",
    documentacao: "987654",
    proprietario: "Rafael Santos",
    uf: "MG",
    cidade: "Belo Horizonte",
    tipoVeiculo: "Passeio",
    marca: "Chevrolet",
    modeloAno: 2023,
    combustivel: "Flex",
    codigoFipe: "987654-9",
    valor: 68000.00
  },

  {
    id: 10,
    nome: "Fit",
    placa: "LMN4321",
    modelo: "Hatch",
    cor: "Verde",
    chassi: "JHMGE8H4XBC123456",
    renavam: "12309876543",
    anoFabricacao: 2020,
    alienado: "NÃO",
    documentacao: "123456",
    proprietario: "Isabel Oliveira",
    uf: "SP",
    cidade: "São Paulo",
    tipoVeiculo: "Passeio",
    marca: "Honda",
    modeloAno: 2020,
    combustivel: "Gasolina",
    codigoFipe: "098765-7",
    valor: 42000.00
  },

  {
    id: 11,
    nome: "Toro",
    placa: "OPQ7654",
    modelo: "Picape",
    cor: "Vermelho",
    chassi: "3C4PDCAB1KT123456",
    renavam: "10987654321",
    anoFabricacao: 2022,
    alienado: "NÃO",
    documentacao: "109876",
    proprietario: "Gustavo Lima",
    uf: "SP",
    cidade: "Campinas",
    tipoVeiculo: "Utilitário",
    marca: "Fiat",
    modeloAno: 2022,
    combustivel: "Diesel",
    codigoFipe: "109876-5",
    valor: 85000.00
  },

  {
    id: 12,
    nome: "Focus",
    placa: "UVW9876",
    modelo: "Hatch",
    cor: "Prata",
    chassi: "WF0DXXGCD4R123456",
    renavam: "76543210987",
    anoFabricacao: 2021,
    alienado: "NÃO",
    documentacao: "765432",
    proprietario: "Amanda Costa",
    uf: "RJ",
    cidade: "Rio de Janeiro",
    tipoVeiculo: "Passeio",
    marca: "Ford",
    modeloAno: 2021,
    combustivel: "Flex",
    codigoFipe: "765432-3",
    valor: 55000.00
  },

  {
    id: 13,
    nome: "Ecosport",
    placa: "XYZ8765",
    modelo: "SUV",
    cor: "Azul",
    chassi: "MAJAXXMRJDP123456",
    renavam: "54321098765",
    anoFabricacao: 2022,
    alienado: "SIM",
    documentacao: "543210",
    proprietario: "Pedro Oliveira",
    uf: "SP",
    cidade: "São Paulo",
    tipoVeiculo: "Utilitário Esportivo",
    marca: "Ford",
    modeloAno: 2022,
    combustivel: "Flex",
    codigoFipe: "543210-5",
    valor: 60000.00
  },

  {
    id: 14,
    nome: "Kwid",
    placa: "ABC5678",
    modelo: "Hatch",
    cor: "Amarelo",
    chassi: "93YBMMYB1JR123456",
    renavam: "98765432109",
    anoFabricacao: 2023,
    alienado: "NÃO",
    documentacao: "987654",
    proprietario: "Fernando Silva",
    uf: "MG",
    cidade: "Belo Horizonte",
    tipoVeiculo: "Passeio",
    marca: "Renault",
    modeloAno: 2023,
    combustivel: "Álcool/Gasolina",
    codigoFipe: "987654-2",
    valor: 38000.00
  },

  {
    id: 15,
    nome: "Amarok",
    placa: "DEF1234",
    modelo: "Picape",
    cor: "Preto",
    chassi: "9BWDC12HXYW123456",
    renavam: "12309876543",
    anoFabricacao: 2020,
    alienado: "NÃO",
    documentacao: "123456",
    proprietario: "Mariana Oliveira",
    uf: "SP",
    cidade: "São Paulo",
    tipoVeiculo: "Utilitário",
    marca: "Volkswagen",
    modeloAno: 2020,
    combustivel: "Diesel",
    codigoFipe: "098765-5",
    valor: 78000.00
  },

  {
    id: 16,
    nome: "Corolla",
    placa: "GHI8765",
    modelo: "Sedan",
    cor: "Branco",
    chassi: "JTDBE32K4Y0A12345",
    renavam: "10987654321",
    anoFabricacao: 2021,
    alienado: "SIM",
    documentacao: "109876",
    proprietario: "Carlos Lima",
    uf: "SP",
    cidade: "Campinas",
    tipoVeiculo: "Passeio",
    marca: "Toyota",
    modeloAno: 2021,
    combustivel: "Flex",
    codigoFipe: "109876-4",
    valor: 72000.00
  },

  {
    id: 17,
    nome: "Siena",
    placa: "JKL5678",
    modelo: "Sedan",
    cor: "Vermelho",
    chassi: "9BD172E11CJ123456",
    renavam: "76543210987",
    anoFabricacao: 2022,
    alienado: "NÃO",
    documentacao: "765432",
    proprietario: "Roberta Oliveira",
    uf: "RJ",
    cidade: "Rio de Janeiro",
    tipoVeiculo: "Passeio",
    marca: "Fiat",
    modeloAno: 2022,
    combustivel: "Álcool/Gasolina",
    codigoFipe: "765432-7",
    valor: 47000.00
  },

  {
    id: 18,
    nome: "HR-V",
    placa: "MNO8765",
    modelo: "SUV",
    cor: "Cinza",
    chassi: "3CZRU6H58KM123456",
    renavam: "54321098765",
    anoFabricacao: 2023,
    alienado: "SIM",
    documentacao: "543210",
    proprietario: "Ricardo Silva",
    uf: "SP",
    cidade: "São Paulo",
    tipoVeiculo: "Utilitário Esportivo",
    marca: "Honda",
    modeloAno: 2023,
    combustivel: "Flex",
    codigoFipe: "543210-3",
    valor: 65000.00
  },

  {
    id: 19,
    nome: "Creta",
    placa: "PQR1234",
    modelo: "SUV",
    cor: "Branco",
    chassi: "KM8K22AA4LU123456",
    renavam: "98765432109",
    anoFabricacao: 2021,
    alienado: "NÃO",
    documentacao: "987654",
    proprietario: "Juliana Oliveira",
    uf: "MG",
    cidade: "Belo Horizonte",
    tipoVeiculo: "Utilitário Esportivo",
    marca: "Hyundai",
    modeloAno: 2021,
    combustivel: "Álcool/Gasolina",
    codigoFipe: "987654-6",
    valor: 59000.00
  },

  {
    id: 20,
    nome: "S10",
    placa: "STU5678",
    modelo: "Picape",
    cor: "Preto",
    chassi: "9BG5S9CEXTC123456",
    renavam: "12309876543",
    anoFabricacao: 2020,
    alienado: "NÃO",
    documentacao: "123456",
    proprietario: "Luciana Lima",
    uf: "SP",
    cidade: "São Paulo",
    tipoVeiculo: "Utilitário",
    marca: "Chevrolet",
    modeloAno: 2020,
    combustivel: "Diesel",
    codigoFipe: "098765-6",
    valor: 75000.00
  },

  {
    id: 21,
    nome: "Up!",
    placa: "VWX8765",
    modelo: "Hatch",
    cor: "Amarelo",
    chassi: "9BWAE07Z1FP123456",
    renavam: "10987654321",
    anoFabricacao: 2022,
    alienado: "SIM",
    documentacao: "109876",
    proprietario: "Thiago Oliveira",
    uf: "SP",
    cidade: "Campinas",
    tipoVeiculo: "Passeio",
    marca: "Volkswagen",
    modeloAno: 2022,
    combustivel: "Álcool/Gasolina",
    codigoFipe: "109876-3",
    valor: 40000.00
  },

  {
    id: 22,
    nome: "Ranger",
    placa: "YZA4321",
    modelo: "Picape",
    cor: "Vermelho",
    chassi: "MNBVDHJKS09812345",
    renavam: "32109876543",
    anoFabricacao: 2021,
    alienado: "NÃO",
    documentacao: "321098",
    proprietario: "Eduardo Silva",
    uf: "RJ",
    cidade: "Niterói",
    tipoVeiculo: "Utilitário",
    marca: "Ford",
    modeloAno: 2021,
    combustivel: "Diesel",
    codigoFipe: "321098-1",
    valor: 82000.00
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
        <p className='number'>{veiculosFiltrados.length}</p>
        <input id='inpunt-pesquisa' type="text" placeholder="Pesquisa Veiculo"
          value={termoPesquisa}
          onChange={pesquisaInpunt} />
        <button type='submit' className='botao-pesquisa'>
          <Link to="/veiculos/novoVeiculos">
            <img src={LogoCarAdd} alt="" />
          </Link>
        </button>

      </div>

      <div className="caixa-lista-associados">
        <div className="lista-associados">

          {veiculosFiltrados.map(veiculo => (
            <Link key={veiculo.id} to={`/veiculos/${veiculo.id}`} className="caixa-listaVeiculos">


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
      <RodaPe />

    </div>
  )
}