import { useState } from 'react';
import './associados/novoAssociado.css';
import { FaCircleUser } from "react-icons/fa6";
import { useEffect } from 'react';
import RodaPeAdd from '../../../components/rodaPe/RodaPeAdd';


export default function NovoAssociado() {

    const [valorPessoa, setValorPessoa] = useState("Física");

    useEffect(() => {
        const botaoFísica = document.querySelector(".Física");
        const botaoJuridíca = document.querySelector(".Juridíca")
        if (botaoFísica) {
            if (valorPessoa === "Física") {
                botaoFísica.classList.add("físicaGreen");
            } else {
                botaoFísica.classList.remove("FísicaGreen");
            }
        }
    }, [valorPessoa]);

    const ativar = () => {
        if (valorPessoa === "Física") {
            setValorPessoa("Juridíca");
        } else {
            setValorPessoa("Física");
        }
    }


    return (
        <div className="caixaForm">
            <form className="formAssociado" >
                <FaCircleUser className='userAdd' />
                <h1>Dados Básicos</h1>
                <section className='dadosBasicos' >

                    <label htmlFor="campoTexto">Nome Associados:</label>
                    <input type="text" id='campoText' required placeholder='Nome :' />

                    <div className='cepEndereco'>
                        <label htmlFor="campoCEP">CEP:</label>
                        <input type="text" id='campoCEP' required placeholder='CEP :' />

                        <label htmlFor="campoEndereco">Endereço:</label>
                        <input type="text" id='campoEndereco' required placeholder='Endereço :' />
                    </div>

                    <label htmlFor="campoBairro">Bairro:</label>
                    <input type="text" id='campoBairro' placeholder='Bairro :' />

                    <label htmlFor="campoCidade">Cidade:</label>
                    <input type="text" id='campoCidade' required placeholder='Cidade :' />

                    <div className='fones' >
                        <label htmlFor="campoTelefone">fone 1:</label>
                        <input type="text" id='campoTelefone' required placeholder='Fone :' />

                        <label htmlFor="campoTelefone 2:">Fone 2:</label>
                        <input type="text" id='campoTelefone 2:' placeholder='Fone :' />
                    </div>
                </section>

                <span>Tipo de Pessoa</span>
                <section onClick={ativar} className='botoesValor'>

                    <div className={`botaoPessoa Física ${valorPessoa === 'Física' ? 'fisicaGreen' : ''}`}>
                        <p>Física</p>
                    </div>
                    <div className={`botaoPessoa Juridíca ${valorPessoa === 'Juridíca' ? 'JuridícaGreen' : ''}`}>
                        <p>Jurídica</p>
                    </div>

                </section>



                {valorPessoa === "Física" && (
                    <section className='dadosPessoasF'>

                        <label htmlFor="campoCPF">CPF:</label>
                        <input type="text" id='campoCPF' required placeholder='CPF :' />


                        <label htmlFor="campoIndentidade">Indentidade:</label>
                        <input type="text" id='campoIndentidade' required placeholder='indentidade :' />


                        <label htmlFor="campoOrgaoEmissor">Órgão Emissor:</label>
                        <input type="text" id='campoOrgaoEmissor' placeholder='Órgão Emissor :' />

                        <div className='proficaoEstado'>
                            <label htmlFor="campoProfisão">Profisão:</label>
                            <input type="text" id='campoProfisão' placeholder='Profisão :' />

                            <label htmlFor="campoEstadoCivil">Estado Civil:</label>
                            <input type="text" id='campoEstadoCivil' placeholder='Estado Civíl :' />
                        </div>


                        <div className='dataNascimento'>
                            <label htmlFor="campoData">Data Nascimento:</label>
                            <input type="date" id='campoDataNascimento' />
                        </div>

                    </section>
                )}

                {valorPessoa === "Juridíca" && (
                    <section className='dadosPessoasJ'>
                        <label htmlFor="campoCNPJ">CNPJ:</label>
                        <input type="text" id='campoCNPJ' required placeholder='CNPJ :' />

                        <label htmlFor="campoInscricaoEstadual">Inscrição Estadual:</label>
                        <input type="text" id='campoInscricaoEstadual' required placeholder='Incricao Estadual :' />


                        <label htmlFor="campoRazaoSocial">Razão Social:</label>
                        <input type="text" id='campoRazaoSocial' required placeholder=' Razão Social :' />


                        <div className='nomeResponsavel'>
                            <label htmlFor="campoNomeResponsavel">Nome Responsável:</label>
                            <input type="text" id='campoNomeResponsavel' required placeholder='Nome Responsavel :' />

                            <label htmlFor="campoCPFResponsavel">CPF Responsável:</label>
                            <input type="text" id='campoCPFResponsavel' required placeholder='CPF Responsável:' />
                        </div>

                        <label htmlFor="campoIndentidadeResponsavel">Indentidade Responsável:</label>
                        <input type="text" id='campoIndentidadeResponsavel' required placeholder='Indentidade Responsavel :' />

                        <label htmlFor="campoEmail">Email:</label>
                        <input type="text" id='campoEmail' required placeholder='Email :' />

                        <label htmlFor="campoTelefone">Telefone:</label>
                        <input type="text" id='campoTelefone' required placeholder='Telefone :' />


                        <div className='dataNascimento'>
                            <label htmlFor="campoDataNascimento">Data Nascimento:</label>
                            <input type="date" id='campDataNascimento' required  />
                        </div>




                    </section>
                )}

                <button type='submit' className="botao-salvar">Salvar</button>
            </form>
            <RodaPeAdd />
        </div>


    )
}