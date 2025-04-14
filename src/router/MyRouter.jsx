import {Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/Register";
import NavBar from "../components/NavBar";
import AddRecipe from "../pages/AddRecipe";


const MyRouter = () => {
    return(
        <>
        <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/addRecipe' element={<AddRecipe />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='*' element={<h1>Page introuvable</h1>} />
            </Routes>
        </>
    )
}

export default MyRouter