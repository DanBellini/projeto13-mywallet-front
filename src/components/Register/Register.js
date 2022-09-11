import { useState } from "react"
import "../Register/style.css"
import { Link } from "react-router-dom"
import styled from "styled-components";

export default function Register () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function registerValidation (event){
        event.preventDefault();

        if(confirmPassword !== password){
            return alert('As senhas não são iguais. Tente novamente.')

        }else{
            const validation={
                email: email,
                password: password,
                name:name
            }
            console.log(validation)
        }
    }

    return(
        <div className="main">
            <h1>MyWallet</h1>
            <Form onSubmit={registerValidation}>
                <input type="text" placeholder="Nome" required onChange={e => setName(e.target.value)}/>
                <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="Senha" required onChange={e => setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirme a Senha" required onChange={e => setConfirmPassword(e.target.value)}/>
                <button type="submit">Cadastrar</button>
            </Form>
            <Link to={'/'}>
                <p>Já tem uma conta? Entre agora!</p>
            </Link>
        </div>
    )
}

const Form = styled.form`
    width:100%;
    padding: 13px 15px;

    display:flex;
    flex-direction: column;
    align-items: stretch;

    input {
        height: 58px;
        margin-bottom:13px;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;

        padding:15px;
        border-radius:5px;
        border-color:#FFFFFF;

        display: flex;
    }

    button{
        width: 100%;
        height: 46px;
        margin:auto;

        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;

        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #A328D6;
        border-width: 0px;
        border-radius: 5px;
        cursor: pointer;

        color: #FFFFFF;
    }
`