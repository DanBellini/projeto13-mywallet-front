import axios from 'axios';
import { useState, useContext } from "react";
import "./style.css";
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom";
import PersonContext from '../../context/PersonData.context';

export default function SignIn (){

    const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

    const { setPersonData } = useContext(PersonContext)

    const navigate = useNavigate();

    async function loginValidation (event) {
        event.preventDefault();

        const validation ={
			email: email,
			password: password
		};
        
        try {
            
            const requisition = await axios.post('http://localhost:4000/singin', validation);

            if(requisition.error){
                return console.log(requisition.error.response.data)
            }

            setPersonData(requisition.data)
            navigate('/main')
        } catch (error) {
            alert(error.response.data)
        }
    };

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