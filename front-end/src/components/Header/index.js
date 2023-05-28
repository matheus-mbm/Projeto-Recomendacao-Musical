import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Logo from '../../assets/img/romantify-logo.png'
import LogoBranca from '../../assets/img/logo-romantify-branca.png'


import { AiOutlineHeart } from "react-icons/ai";

export const Cabecalho = ({value,onChange,busca, title1,title2, link1,link2}) => {
  return (
    <>
      {['xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="sticky-top w-100 ps-lg-5 pe-lg-5" style={{backgroundColor:'#141414'}}>
          <Container fluid className='p-2'>
            <Navbar.Brand href="/home"><img src={Logo} alt="Romantify" className=''  style={{width:'200px'}}/></Navbar.Brand>
            <Navbar.Toggle className='' aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                <img src={LogoBranca} alt="Romantify" className='w-50 w-md-75'/>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end items-center flex-grow-1 pe-3">
                  <Nav.Link href={link1} className='text-white  d-flex flex-column align-items-lg-center'>{title1}</Nav.Link>
                  <Nav.Link href={link2} className='text-white d-flex flex-column align-items-lg-center '>{title2}</Nav.Link>
                </Nav>
                <Form className={`d-flex w-25 ${busca}`}>
                  <Form.Control
                    type="search"
                    placeholder="Explorar"
                    className="me-2 mt-1 bg-dark text-white border-dark rounded-5 p-3"
                    aria-label="Search"
                    value={value}
                    onChange={onChange}
                    
                  />
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
