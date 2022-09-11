import { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";

export default function Receipt (){

    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");

    function transationValidation (event) {
        event.preventDefault();

        const validation = {
            value: value,
            description: description,
            type: "receipt"
        };
        if(validation){
            navigate('/main');
        }

        console.log(validation)
    }


    return(
        <Container>
            <h6>Nova Entrada</h6>
            <form onSubmit={transationValidation}>
                <input type="number" value={value} placeholder="Valor" required onChange={e => setValue(e.target.value)}/>
                <input type="text" value={description} placeholder="Descrição" maxLength="20" required onChange={e => setDescription(e.target.value)}/>
                <button type="submit">Salvar entrada</button>
            </form>
            <CancelButton>
                <Link to={"/main"}>Voltar</Link>
            </CancelButton>
        </Container>
    )
}

const Container = styled.div`

    width: 100%;
    max-width: 700px;

    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;

    h6 {
        width: 100%;
        margin-bottom: 30px;

    }

`
const CancelButton = styled.div`

    margin-top: 25px;
    text-align: center;
`