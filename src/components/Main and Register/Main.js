import { useState } from "react";
import "../Main and Register/style.css";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
        console.log(validation)
    }

    return (

        <Container>
            <div className="main">
                <h1>MyWallet</h1>
                <form onSubmit={loginValidation}>
                    <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
		            <input type="password" value={password} placeholder="Senha" required onChange={e => setPassword(e.target.value)}/>
		            <button type="submit">Entrar</button>
                </form>
                <Link to={'/register'}>
                    <p>Primeira vez? Cadastre-se!</p>
                </Link>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    padding:15px;
    display:flex;
`