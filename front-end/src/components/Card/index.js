import { Button, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export const Cards = ({id, img, alt, title, cantores, music, artistPicture}) => {
  const [usuarioId, setUsuarioId] = useState(null);
  const user = localStorage.getItem('username');

  useEffect(() => {
    const fetchUsuarioId = async () => {
      try {
        const response = await fetch(`http://localhost:4000/usuarios/${user}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*', // ou substitua '*' pelo domínio permitido
          },
        });
  
        if (response.ok) {
          const data = await response.json();
          setUsuarioId(data.usuarioId);
        } else {
          throw new Error('Erro ao buscar o ID do usuário');
        }
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchUsuarioId();
  }, [user]);

  const curtirMusica = async () => {
    try {
      const response = await fetch('http://localhost:4000/favoritos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*', // ou substitua '*' pelo domínio permitido
        },
        body: JSON.stringify({
          musicaId: id,
          usuarioId: usuarioId,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message);
      } else {
        throw new Error('Erro ao curtir música');
      }
    } catch (error) {
      console.error(error);
    }
    toast.success('Música curtida com sucesso');
  };

  return (
    <Col className="p-0 m-0 m-auto shadow-lg w-100 d-flex bg-color-primary p-3 gap-3 align-items-center justify-content-between rounded-4">
      <img src={artistPicture} alt={alt} className="rounded-3 shadow-lg" style={{width:'130px'}} />
      <div className='d-flex flex-column flex-fill gap-2'>
        <div className="flex-fill text-white text-left">
          <h5>{title}</h5>
          <span>{cantores}</span>
        </div>
        <div className='d-flex flex-column flex-lg-row-reverse gap-3'>
          <Button onClick={curtirMusica} className='w-25 shadow-lg btn btn-dark'>
            <i className="fa-regular fa-heart"></i>
          </Button>
          <audio className='w-100' src={music} controls />
        </div>   
      </div>
    </Col>
  )
}
