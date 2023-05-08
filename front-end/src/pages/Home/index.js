import { Cards } from "../../components/Card"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Container, Form } from 'react-bootstrap'
import { useEffect, useState } from "react";
import { Genero } from "../../api";

export const Home = () =>{


  const [ genero , setGenero ] = useState([])
  const [ cantor , setCantor ] = useState('')

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
          preview: item.preview
        };
      });
      setGenero(generoData);
    })();
  }, [cantor]);
  
  

  return(
    <Container fluid className="bg-white">
      <Row className="gap-5 pt-4 p-0 pd-md-3 p-0 m-0">
        <h1 className="text-center">Romantify</h1>
        <Form>
            <Row>
              <Col>
                <Form.Control 
                  type="text" 
                  name="" id="" 
                  placeholder="Buscar"
                  value={cantor}
                  onChange={(e) => setCantor(e.target.value)}
                />
              </Col>
            </Row>
        </Form>
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
                  />
                </Col>
              )
          })}
      </Row>
    </Container>
  )
}
