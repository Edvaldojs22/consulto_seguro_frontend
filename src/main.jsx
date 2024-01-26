import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import Associados from './router/associados/associado/Associados.jsx'
import Veiculos from './router/veiculos/veiculos/Veiculos.jsx';
import Login from './router/login/Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AssociadosInfo from './router/associados/associadosInfo/AssociadoInfo.jsx';

import NovoAssociado from './router/associados/addAssociado/NovoAssociado.jsx';
import VeiculoInfo from './router/veiculos/veiculosInfo/VeiculoInfo.jsx';
import NovoVeiculo from './router/veiculos/addVeiculo/NovoVeiculo.jsx';
import Contratos from './router/contratos/contrato/Contratos.jsx';
import ContratoInfo from './router/contratos/contratosInfo/ContratoInfo.jsx';
import AddContrato from './router/contratos/addContrato/AddContrato.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/associados",
    element: <Associados />,
  },
  {
    path: "/associado/:id",
    element: <AssociadosInfo />
  },
  {
    path: "/NovoAssociado",
    element: <NovoAssociado />
  },
  {
    path: "/veiculos",
    element: <Veiculos />,
  },
  {
    path: "/veiculo/:id",
    element: <VeiculoInfo />
  },
  {
    path: "/NovoVeiculo",
    element: <NovoVeiculo />
  },
  {
    path: "/contratos",
    element: <Contratos />
  },
  {
    path: "/contrato/:id",
    element: <ContratoInfo />
  },
  {
    path: "/NovoContrato",
    element: <AddContrato />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
