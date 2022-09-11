import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./Main/Main"

export default function App (){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </BrowserRouter>
    )
}