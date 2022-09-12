import axios from "axios";
import { useState } from "react"
import "./style.css"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components";

export default function Register () {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    async function registerValidation (event){
        event.preventDefault();

        if(confirmPassword !== password){
            return alert('As senhas não são iguais. Tente novamente.')

        }

        const validation={
            email: email,
            password: password,
            name:name
        }

        try {

            const requisition = await axios.post('http://localhost:4000/register', validation)
            if(requisition.error){
                return console.log(requisition.error.response.data)
            }
            navigate('/')
        } catch (error) {
            console.log(error)
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