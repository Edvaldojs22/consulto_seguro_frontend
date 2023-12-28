import './App.css'
import React from 'react';
import Associados from './paginas/associados/Associados.jsx'
import Login from './paginas/login/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Veiculos from './paginas/veiculos/Veiculos.jsx';
import { FaUser } from "react-icons/fa";
import Contrato from './paginas/contratro/Contrato.jsx';
import Cliente from './paginas/associados/Cliente.jsx'


const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/associados' element={<Associados nomePesquisa="Pesquisa cliente" icon={<FaUser />} />} />
        <Route path='/veiculos' element={<Veiculos />} />
        <Route path='/contrato' element={<Contrato />} />
        <Route path='/cliente/:id' element={<Cliente />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
