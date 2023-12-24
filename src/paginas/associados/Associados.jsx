import './Associados.css';
import { FaCircleUser } from "react-icons/fa6";
import { LuMenu } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { IoFilterSharp } from "react-icons/io5";
import {Logo} from './../login/Login.jsx'
import Cliente from './Cliente.jsx';

export default function Associados() {
    return (
        <div className='associados'>
            <header>
                <div className='painel-icon'>
                    <FaCircleUser className='icon-user' />
                    <p>huhjh khuhgy</p>
                </div>
            </header>

            <div className='caixa-menu'>
                <LuMenu className='icon-menu' />
                <p>Associado</p>
                <p>Veículo</p>
                <p>Contrato</p>
            </div>

            <div className='caixa-inpunt-pesquisa'>
                <IoFilterSharp className='icon-filter' />
                <input id='inpunt-pesquisa' type="text" placeholder='Pesquisar cliente' />
                <button type='submit' className='botao-pesquisa'>  <CiSearch className='icon-search' /></button>
               
            </div>

            <div className="caixa-lista-associados">
                <div className="lista-associados">
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                    <Cliente />
                </div>
            </div>

            <footer>
               
            </footer>

        </div>
    )
}