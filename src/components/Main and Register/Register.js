import { useState } from "react"
import "../Main and Register/style.css"
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

        <Container>
            <div className="main">
                <h1>MyWallet</h1>
                <form onSubmit={registerValidation}>
                    <input type="text" placeholder="Nome" required onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder="Email" required onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder="Senha" required onChange={e => setPassword(e.target.value)}/>
                    <input type="password" placeholder="Confirme a Senha" required onChange={e => setConfirmPassword(e.target.value)}/>
                    <button type="submit">Cadastrar</button>
                </form>
                <Link to={'/'}>
                    <p>Já tem uma conta? Entre agora!</p>
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