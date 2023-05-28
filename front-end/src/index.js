import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// importa react toastify.css
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { RouterProvider } from 'react-router-dom';
import { Router } from './rotas';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToastContainer autoClose={1500}></ToastContainer>
    <RouterProvider router={Router}/>
  </React.StrictMode>
);
  