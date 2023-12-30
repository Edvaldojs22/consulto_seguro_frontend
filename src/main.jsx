import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Associados from './router/associados/Associados.jsx';
import Veiculos from './router/veiculos/Veiculos.jsx';
import Login from './router/login/Login.jsx';



import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ClienteInfo from './router/associados/AssociadoInfo.jsx';
import VeiculoInfo from './router/veiculos/VeiculoInfo.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "associados",
    element: <Associados />,
  },
  {
    path: "/associado/:id",
    element: <ClienteInfo />
  },
  {
    path: "veiculos",
    element: <Veiculos/>,
  },
  {
    path: "/veiculo/:id",
    element: <VeiculoInfo />
  }

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
