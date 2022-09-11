import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main"
import Register from "./Register/Register";

export default function App (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </BrowserRouter>
    )
}