import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Cabecalho } from '../../components/Header';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { toast } from 'react-toastify';

export const Cadastrar = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/cadastrar', {
        user: user,
        password: password
      });

      if (response.status === 200) {
        setMessage('Usuário cadastrado com sucesso');
        toast.success('Cadastro efetuado com sucesso')
        navigate('/')
        return

      } else {
        setMessage('Usuário já existe');
        toast.alert('Usuário já existe');
        return
      }
    } catch (error) {
      console.error('Erro ao realizar cadastro:', error);
      toast.error('Erro ao realizar Cadastro')
      setMessage('Erro ao realizar cadastro');
      return
    }
  };

  return (
    <div className='bg-dark vh-100 text-white d-flex flex-column align-items-center'>
      <Cabecalho busca={'d-none'}></Cabecalho>
      <Form onSubmit={handleSubmit} className='w-50 p-5  d-flex flex-column align-items-center justify-content-center gap-5  rounded-3 m-auto'  style={{backgroundColor:'#141414'}}>
        <h1 className='fw-bold pt-5'>Inscreva-se grátis e comece a curtir.</h1>
      <Form.Group className="w-50" controlId="formBasicEmail">
        <Form.Label>E-mail ou nome de usuário</Form.Label>
        <Form.Control type="text" className='p-3 bg-dark text-white' placeholder="E-mail ou nome de usuário" value={user} onChange={(e) => setUser(e.target.value)}  />
     
      </Form.Group>

      <Form.Group className="w-50" controlId="formBasicPassword">
        <Form.Label>Senha</Form.Label>
        <Form.Control type="password" className='p-3 bg-dark text-white' placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <button type="submit" className='text-white border-0 overflow-none w-50 rounded-5 p-3' style={{backgroundColor:'#ee1387'}}>
        Inscrever-se
      </button>
      <span className='text-muted pb-5'>Já tem uma conta? <Link to="/" className='text-white'>Faça Login</Link></span>
    </Form>
  </div>
  );
}

