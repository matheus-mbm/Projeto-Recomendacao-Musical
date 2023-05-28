import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Favoritos } from "./pages/Favoritos";
import { LoginForm } from "./pages/Login";
import { Cadastrar } from "./pages/Cadastrar";


export const Router = createBrowserRouter([
    {
        path:'/home',
        element: <Home></Home>
    },
    {
        path:'/favoritos',
        element: <Favoritos></Favoritos>
    },
    {
        path:'/',
        element:<LoginForm></LoginForm>
    },
    {
        path:'/cadastrar',
        element:<Cadastrar></Cadastrar>
    }
])

