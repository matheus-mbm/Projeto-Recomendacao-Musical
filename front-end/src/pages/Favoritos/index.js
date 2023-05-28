import { Cards } from "../../components/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import { Cabecalho } from "../../components/Header";
import { AiFillHome } from "react-icons/ai";
import Like from "../../assets/img/like.svg";

export const Favoritos = () => {
  const [musicasCurtidas, setMusicasCurtidas] = useState([]);
  const [user, setUser] = useState("");

  useEffect(() => {
    const username = localStorage.getItem('username');
    setUser(username);
  }, []);
  
  useEffect(() => {
    const fetchMusicasCurtidas = async () => {
      try {
        const response = await fetch(`http://localhost:4000/favoritos/${user}`, {
          headers: {
            'Access-Control-Allow-Origin': '*', // ou substitua '*' pelo domínio permitido
          },
        });
        if (response.ok) {
          const data = await response.json();
          setMusicasCurtidas(data);
        } else {
          throw new Error('Erro ao buscar músicas curtidas');
        }
      } catch (error) {
        console.error('Erro ao buscar músicas curtidas:', error);
      }
    };
  
    if (user) {
      fetchMusicasCurtidas();
    }
  }, [user]);

  useEffect(() => {
    const fetchMusicasDetalhes = async () => {
      try {
        const musicasDetalhes = [];
        for (const musica of musicasCurtidas) {
          const response = await fetch(`https://api.deezer.com/track/${musica.musicaId}`);
          if (response.ok) {
            const data = await response.json();
            console.log('gataa')
            console.log(data.album.cover_medium); // Verifique o valor retornado
            const musicaDetalhes = {
              id: data.id,
              picture: data.picture_small,
              title: data.title,
              genero: data.genre_id,
              preview: data.preview
            };
            musicasDetalhes.push(musicaDetalhes);
          } else {
            throw new Error(`Erro ao buscar detalhes da música com ID ${musica.musicaId}`);
          }
        }
        setMusicasCurtidas(musicasDetalhes);
      } catch (error) {
        console.error('Erro ao buscar detalhes das músicas:', error);
      }
    };
    

    if (musicasCurtidas.length > 0) {
      fetchMusicasDetalhes();
    }
  }, [musicasCurtidas]);

  return (
    <div className="bg-dark w-100 vh-100">
      <Cabecalho value={user} onChange={(e) => setUser(e.target.value)} busca={'d-none'} title1={<AiFillHome size={40} />} link1={'/home'}/>
      <Row className="gap-5 pt-4 p-0 pd-md-3 p-0 m-0">
          {musicasCurtidas.length === 0  &&  
            <div style={{height:'85.9vh'}} className="pt-5 d-flex flex-column align-items-center justify-content-between text-center text-white">
              <div>
                <h1 className="text-muted">Bem-vindo á página de Curtidas!</h1>
                <h5 className="text-muted">Aqui, você encontrará um universo de músicas que você curtiu.</h5>
              </div>
              <img src={Like} alt="" className="mb-3" />
            </div>}
          {musicasCurtidas.map((generos)=>{
              return(
                <Col sm={12} md={8} lg={6} xl={5} className="m-auto" key={generos.id}>
                  <Cards
                    id={generos.id}  
                    img={generos.picture}
                    alt={generos.title}
                    title={generos.title}
                    genero={generos.genero}
                    music={generos.preview}    
                    user={user}  
                    artistPicture={generos.album.cover_medium}             
                  />
                </Col>
              )
          })}
      </Row>
    </div>
  );
        }