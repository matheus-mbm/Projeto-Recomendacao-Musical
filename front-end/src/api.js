import React from "react";
import axios from 'axios';

export const api = axios.create({
    baseURL:`http://localhost:4000`
})

export const Genero = async (cantor) => {
    return await api.get(`/genero/${cantor}`);
  };