import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import Register from "../pages/Register";
import NavBar from "../components/NavBar";
import AddRecipe from "../pages/AddRecipe";
import RecipeDetails from "../pages/RecipeDetails";
import Profile from "../pages/Profile";
import ProtectedRoute from "../../utils/ProtectedRoute";
import Users from "../pages/Users";
import UserDetails from "../pages/UserDetails";
import EditProfile from "../pages/EditProfile";


const MyRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addRecipe' element={
          <ProtectedRoute>
            <AddRecipe />
          </ProtectedRoute>
        } />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } />

        <Route path='/edit-profile' element={<EditProfile />} />
        <Route path='/recipe/:id' element={<RecipeDetails />} />
        <Route path='/users' element={<Users />} />
        <Route path='/user/:id' element={<UserDetails />} />
        <Route path='*' element={<h1>Page introuvable</h1>} />
      </Routes>
    </>
  );
};

export default MyRouter;
