import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import Associados from "./associados/associado/Associados";
import Veiculos from "./veiculos/veiculos/Veiculos";
import Contratos from "./contratos/contrato/Contratos";
import AssociadosInfo from "./associados/associadosInfo/AssociadoInfo";
import NovoAssociado from "./associados/addAssociado/NovoAssociado";
import ContratosInfo from "./contratos/contratosInfo/ContratoInfo"
import AddContrato from "./contratos/addContrato/AddContrato"
import VeiculosInfo from "./veiculos/veiculosInfo/VeiculoInfo"
import NovoVeiculo from "./veiculos/addVeiculo/NovoVeiculo"
import PrivateRoute from './privateRouter';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route path="/associados" element={<PrivateRoute> <Associados/> </PrivateRoute>} />
      <Route path="/associados/:id" element={<PrivateRoute> <AssociadosInfo/> </PrivateRoute>} />
      <Route path="/associados/novoAssociado" element={<PrivateRoute> <NovoAssociado/> </PrivateRoute>} />
      <Route path="/veiculos" element={<PrivateRoute> <Veiculos/> </PrivateRoute>} />
      <Route path="/veiculos/:id" element={<PrivateRoute> <VeiculosInfo/> </PrivateRoute>} />
      <Route path="/veiculos/novoContrato" element={<PrivateRoute> <NovoVeiculo/> </PrivateRoute>} />
      <Route path="/contratos" element={<PrivateRoute> <Contratos/> </PrivateRoute>} />
      <Route path="/contratos/:id" element={<PrivateRoute> <ContratosInfo/> </PrivateRoute>} />
      <Route path="/contratos/novoContrato" element={<PrivateRoute> <AddContrato/> </PrivateRoute>} />
    </Routes>
  </BrowserRouter>
);

export default Rotas;