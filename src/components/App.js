import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main and Register/Main"
import Register from "./Main and Register/Register";

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