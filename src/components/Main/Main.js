import { useContext, useEffect, useState } from "react";
import "./style.css"
import styled from "styled-components";
import { Link } from "react-router-dom";
import PersonContext from "../../context/PersonData.context";
import axios from "axios";

export default function Main (){

    const { personData } = useContext(PersonContext)
    const [transactions, setTransactions] = useState([]);

    useEffect(()=>{
        async function getHistoricOfTransactions(){
            try {
                const requisition = await axios.get('http://localhost:4000/transactions', {
                    headers: {
                        "authorization": `Bearer ${personData.token}`
                    }
                });
                setTransactions(requisition.data)
            } catch (error) {
                console.log(error)
            }
        }
        getHistoricOfTransactions();
    }, [])

    return(
        <Container>
            <div className="wallet">
                <Top>
                    <h6>Olá, {personData.name}</h6>
                    <Link to={'/'}>
                        <ion-icon name="exit-outline"></ion-icon>
                    </Link>
                </Top>
                <div className="transactions">
                    {/* {person.transactions.length === 0 ? 
                        <p>Não há registros de entrada ou saída</p>
                    : 
                        <div>
                            <p>Aqui vai ficar o seu Saldo</p>
                        </div>
                    } */}
                </div>
                <AddTransactions>
                    <div className="button">
                        <Link to={'/receipt'}>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <p>Nova Entrada</p>
                        </Link>   
                    </div>
                    <div className="espace"/>
                    <div className="button">
                        <Link to={'/exit'}>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <p>Nova Saída</p>
                        </Link>
                    </div>
                </AddTransactions>
            </div>
        </Container>
    )
}

const Container = styled.div`
    height:100vh;
    padding:25px;
    display:flex;
`
const Top = styled.div`
    height: 35px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 15px 0px;

    ion-icon {
        font-size: 32px
    }
`
const AddTransactions = styled.div`
    height: 150px;

    display: flex;
    justify-content: space-between;

    .espace {
        width:20px
    }
`