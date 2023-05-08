import { useEffect, useState } from "react"

export const Favoritos = () =>{

    const [music, setMusic] = useState([])

    useEffect(()=>{
        const playlist = JSON.parse(localStorage.getItem('@music'))
        setMusic(JSON.parse(playlist) || [])
    },[])

    function handleDelete(id){
        let filtroMusic = music.filter((item)=>{
          return(item.id !== id)
        })
    
        setMusic(filtroFilmes);
        localStorage.setItem('@music', JSON.stringify(filtroMusic))
        alert('Musica removida com sucesso!')
    }

    
  return (
    <div>
        <Header></Header>
        <div className="container container-fav">
          <h1 className="fav">Meus Filme Favoritos</h1>

          {music.length === 0 && <span>Sua lista de favoritos está vazio</span>}

          <ul>
            {music.map((item)=>{
                  return(
                    <li key={item.id} className="">
                      <span className="titulo">{item.nome}</span>
                      <div className="opcoes">
                        <button  onClick={ ()=> handleDelete(item.id)}>Excluir</button>
                      </div>
                    </li>
                  )
                })}
          </ul>
        </div>
    </div>
  );
}



  