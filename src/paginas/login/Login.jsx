import './Login.css';
import Logo from '../../assets/img/logo.png'
import { FaUser, FaLock } from "react-icons/fa";
import React, { useState } from 'react';

export default function Login() {

  

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const usuarioOnchange = (event) => {
        setUsuario(event.target.value);
    }

    const senhaOnchange = (event) => {
        setSenha(event.target.value);
    }

    const fazerLogin = () => {

        if (usuario == 'edvaldo' && senha == 'edvaldo123') {
            alert('Login bem-sucedido')
        } else {
            alert('usuario ou senha invalido');
        }
    }

    return (

        <div className='app'>

            <img src={Logo} alt="" />

            <div className='main'>

                <div className='caixaInpunt'>
                    <FaUser className=' icon user' />
                    <input className='cpf  ' type="text" placeholder='CPF:' value={usuario} onChange={usuarioOnchange} />
                </div>

                <div className='caixaInpunt'>
                    <FaLock className='lock' />
                    <input className='senha ' type="password" placeholder='Senha:' value={senha} onChange={senhaOnchange} />
                </div>

                <button onClick={fazerLogin} className='botao' type='submit'>LOGIN</button>

            </div>

        </div>


    )
    

}   
export{Logo}

