import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./SignIn and Register/Register";
import Main from "./Main/Main";
import Receipt from "./Receipt and Exit/Receipt";
import Exit from "./Receipt and Exit/Exit";
import SignIn from "./SignIn and Register/SignIn";

import PersonContext from "../context/PersonData.context"
import { useState } from "react";

export default function App (){

    const [personData, setPersonData] = useState(null);

    return(
        <PersonContext.Provider value={{personData, setPersonData}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<SignIn/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/receipt" element={<Receipt/>}/>
                    <Route path="/exit" element={<Exit/>}/>
                </Routes>
            </BrowserRouter>
        </PersonContext.Provider>
    )
}