import React from 'react'
import ReactDOM from 'react-dom/client'
import "./App.css"
import Associados from './router/associados/Associados.jsx';
import Veiculos from './router/veiculos/Veiculos.jsx';
import Login from './router/login/Login.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClienteInfo from './router/associados/AssociadoInfo.jsx';
import VeiculoInfo from './router/veiculos/VeiculoInfo.jsx';


const router = createBrowserRouter([
   {
    path: "/consulto_seguro/",
    element: <Login />,
  },
  {
    path: "/consulto_seguro/associados",
    element: <Associados />,
  },
  {
    path: "/consulto_seguro/associado/:id",
    element: <ClienteInfo />
  },
  {
    path: "/consulto_seguro/veiculos",
    element: <Veiculos />,
  },
  {
    path: "/consulto_seguro/veiculo/:id",
    element: <VeiculoInfo />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
