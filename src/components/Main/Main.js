import { useState } from "react";
import "../Main/style.css";
import styled from "styled-components";

export default function Main (){

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    function loginValidation (event) {
        event.preventDefault();
	//	const requisicao = axios.post("https://minha-api.com/login", {

        const validation ={
			email: email,
			password: password
		};
    }

    return (
        <div className="main">
            <h1>MyWallet</h1>
            <Form onSubmit={loginValidation}>
                <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
		        <input type="password" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)}/>
		        <button type="submit">Entrar</button>
            </Form>
            <p>Primeira vez? Cadastre-se!</p>
        </div>
    )
}

const Form = styled.form`
    width:100%;
    height:210px;
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

        color: #FFFFFF;
    }
`