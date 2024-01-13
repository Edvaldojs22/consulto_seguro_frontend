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


const router = createBrowserRouter([
   {
    path: "/consulto_seguro/",
    element: <Login />,
  },
  {
    path: "/consulto_seguro/associados",
    element:<Associados />,
  },
  {
    path: "/consulto_seguro/NovoAssociado",
    element: <NovoAssociado />
  },
  {
    path: "/consulto_seguro/associado/:id",
    element: <AssociadosInfo />
  },
  {
    path: "/consulto_seguro/veiculos",
    element: <Veiculos />,
  },
  {
    path: "/consulto_seguro/NovoVeiculo",
    element: <NovoVeiculo />
  },
  {
    path: "/consulto_seguro/veiculo/:id",
    element: <VeiculoInfo />
  },
  {
    path: "/consulto_seguro/contratos",
    element: <Contratos />
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
