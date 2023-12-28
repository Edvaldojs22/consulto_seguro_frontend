import Associados from "../associados/Associados"
import IconCart from "../../assets/img/car.png";

export default function Veiculos (){

 const listaVeiculos = [
    {
      id: 1,
      nome: "Carro A",
      placa: "ABC1234",
      modelo: "Sedan",
      cor: "Azul",
    },
    {
      id: 2,
      nome: "Carro B",
      placa: "DEF5678",
      modelo: "SUV",
      cor: "Preto",
    },
    {
      id: 3,
      nome: "Moto X",
      placa: "GHI9012",
      modelo: "Esportiva",
      cor: "Vermelha",
    },
    {
      id: 4,
      nome: "Carro C",
      placa: "JKL3456",
      modelo: "Hatchback",
      cor: "Verde",
    },
    {
      id: 5,
      nome: "Carro D",
      placa: "MNO7890",
      modelo: "Conversível",
      cor: "Amarelo",
    },
    {
      id: 6,
      nome: "Moto Y",
      placa: "PQR1234",
      modelo: "Chopper",
      cor: "Preto",
    },
    {
      id: 7,
      nome: "Carro E",
      placa: "STU5678",
      modelo: "Caminhonete",
      cor: "Branco",
    },
    {
      id: 8,
      nome: "Carro F",
      placa: "VWX9012",
      modelo: "Coupé",
      cor: "Prata",
    },
    {
      id: 9,
      nome: "Moto Z",
      placa: "YZA3456",
      modelo: "Custom",
      cor: "Azul",
    },
    {
      id: 10,
      nome: "Carro G",
      placa: "BCD7890",
      modelo: "Compacto",
      cor: "Vermelho",
    },
    {
      id: 11,
      nome: "Carro H",
      placa: "EFG1234",
      modelo: "Minivan",
      cor: "Laranja",
    },
    
  ];
  
    
    return(
        <div>
        <Associados nomePesquisa="Pesquisa veiculo" icon="🚙" />
        </div>
    )
}