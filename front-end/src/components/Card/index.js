import { Button, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';


export const Cards = ({id,img, alt, title,cantores,music}) => {


  function curtiu(){
    alert(`Você curtiu a musica ${id}`)
  }

  return (
    <Col className="p-0 m-0 m-auto shadow-lg w-100 d-flex bg-color-primary p-3 gap-3 align-items-center justify-content-between rounded-4">
        <img src={img} alt={alt} className="rounded-3 shadow-lg" style={{width:'130px'}}/>
        <div className='d-flex flex-column flex-fill gap-2'>
          <div className="flex-fill">
              <h5>{title}</h5>
              <span>{cantores}</span>
          </div>
          <div className='d-flex flex-column flex-lg-row gap-3'>
            <Button onClick={()=> curtiu()} className='w-25 shadow-lg btn btn-dark'>
              <i class="fa-regular fa-heart"></i>
            </Button>
            <audio className='w-100' src={music} controls/>
            {/*   <i class="fa-solid fa-play"></i> */}
          </div>   
        </div>
    </Col>
  )
}   
