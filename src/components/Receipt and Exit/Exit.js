import { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import PersonContext from "../../context/PersonData.context";

export default function Exit (){

    const navigate = useNavigate();
    const [value, setValue] = useState("");
    const [description, setDescription] = useState("");
    const { personData } = useContext(PersonContext)

    async function transationValidation (event) {
        event.preventDefault();

        const editedDescription = description[0].toUpperCase() + description.substring(1)
        const editedValue = Math.round(value*100)
        
        if(editedValue === 0){
            return alert("Valor muito baixo!")
        }

        const validation = {
            value: editedValue,
            description: editedDescription,
            type: "exit"
        };

        const headers = {
            headers: {Authorization: `Bearer ${personData.token}`}
        }

        try {
            const requisition = await axios.post('http://localhost:4000/transactions', validation, headers)
            if(requisition.error){
                return console.log(requisition.error.response.data)
            }
            navigate('/main')

        } catch (error) {
            alert(error.response.data)
        }
    }


    return(
        <Container>
            <h6>Nova Saída</h6>
            <form onSubmit={transationValidation}>
                <input type="number" value={value} placeholder="Valor" required onChange={e => setValue(e.target.value)}/>
                <input type="text" value={description} placeholder="Descrição" maxLength="20" required onChange={e => setDescription(e.target.value)}/>
                <button type="submit">Salvar saída</button>
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