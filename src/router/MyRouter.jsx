import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/Register";
import NavBar from "../components/NavBar";


const MyRouter = () => {
    return(
        <>
        <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<h1>Page introuvable</h1>} />
            </Routes>
        </>
    )
}

export default MyRouter