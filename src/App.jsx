import './App.css'
import React from 'react';
import Associados from './paginas/associados/Associados.jsx'
import Login from './paginas/login/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Associados' element={<Associados />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
