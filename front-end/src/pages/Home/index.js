import { Cards } from "../../components/Card"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Form } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { Genero } from "../../api";
import { Cabecalho } from "../../components/Header";
import { AiFillHeart } from "react-icons/ai";
import buscar from "../../assets/img/buscar.svg"

export const Home = () =>{

  const [genero, setGenero] = useState([]);
  const [cantor, setCantor] = useState('');

  useEffect(() => {
    (async () => {
      const response = await fetch(`https://backend-genero.onrender.com/genero/${cantor}`);
      const data = await response.json();
      console.log(data);
      const generoData = data.data.map((item) => {
        return {
          id: item.id,
          picture: item.album.cover_medium,
          title: item.title,
          genero: item.genre_id,
          preview: item.preview,
          artistPicture: item.album.cover_medium // Adicionando a URL da imagem do artista
        };
      });
      setGenero(generoData);
    })();
  }, [cantor]);
  
  return(
    <div className="bg-dark w-100">
      <Cabecalho value={cantor} onChange={(e) => setCantor(e.target.value)} title1={<AiFillHeart className="mt-3" size={40}/>} link1={'/favoritos'} />
      <Row className="gap-5 pt-4 p-0 m-0  ">
        {genero.length === 0  && 
          <div style={{height:'86.2vh'}} className="pt-5 d-flex flex-column align-items-center justify-content-between text-center text-white ">
            <div className="text-muted">
              <h1>Bem-vindo á página de busca!</h1>
              <h5>Aqui, você encontrará um universo de músicas para explorar.</h5>
            </div>
            <img src={buscar} alt="" className="w-50 mb-2" />
          </div>}
        {genero.map((generos)=>{
          return(
            <Col sm={12} md={8} lg={6} xl={5} className="m-auto" key={generos.id}>
              <Cards
                id={generos.id}
                img={generos.picture}
                alt={generos.title}
                title={generos.title}
                genero={generos.genero}
                music={generos.preview}   
                artistPicture={generos.artistPicture} // Passando a URL da imagem do artista
              />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
