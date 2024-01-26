import './Login.css';
import Logo from '../../assets/img/autoPlanos.png'
import { FaUser, FaLock } from "react-icons/fa";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


export default function Login() {



    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const usuarioOnchange = (event) => {
        setUsuario(event.target.value);
    }

    const senhaOnchange = (event) => {
        setSenha(event.target.value);
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

                    {/* <div className='caixa-salvar'>
                        <div className='box'>
                            
                        </div>
                        <div>
                            <p>Lembrar</p>
                        </div>
                    </div> */}

                </div>


                <Link className='botao-login' to="/associados">
                    <p>LOGIN</p>
                </Link>


            </div>

        </div>


    )


}
export { Logo }

