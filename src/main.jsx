import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Associados from './router/associados/Associados.jsx';
import Contrato from './router/contratro/Contrato.jsx';
import Veiculos from './router/veiculos/Veiculos.jsx';
import Login from './router/login/Login.jsx';


import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClienteInfo from './router/clienteInfo/ClienteInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "associados",
    element: <Associados/>,
  },
  {
    path: "veiculos",
    element: <Veiculos />,
  },
  {
    path: "contratos",
    element: <Contrato />
  },
  {
    path: "/cliente/:id",
    element: <ClienteInfo />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
