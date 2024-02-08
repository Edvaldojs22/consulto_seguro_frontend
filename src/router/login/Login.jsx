import './Login.css';
import Logo from '../../assets/img/autoPlanos.png';
import { FaUser, FaLock } from "react-icons/fa";
import { useState, useEffect } from 'react';
import AuthService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [username, setUsuario] = useState('');
    const [password, setSenha] = useState('');
    const authService = AuthService();
    const navigate = useNavigate();

    useEffect(() => {
        if (authService.isAuthenticated()) {
            navigate('/home');
        }
    }, []);

    const handleLogin = async () => {
        try {
            await authService.login(username, password);
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            alert('Erro ao fazer login. Verifique suas credenciais e tente novamente.');
        }
    }

    const usuarioOnChange = (event) => {
        setUsuario(event.target.value);
    }

    const senhaOnChange = (event) => {
        setSenha(event.target.value);
    }

    return (
        <div className='app'>
            <img src={Logo} alt="Auto Planos" />
            <div className='main'>
                <div className='caixaInput'>
                    <FaUser className='icon user' />
                    <input className='cpf' type="text" placeholder='Usuário:' value={username} onChange={usuarioOnChange} />
                </div>
                <div className='caixaInput'>
                    <FaLock className='lock' />
                    <input className='senha' type="password" placeholder='Senha:' value={password} onChange={senhaOnChange} />
                </div>
                <button type='submit' className='botao-login' onClick={handleLogin}>LOGIN</button>
            </div>
        </div>
    )
}
