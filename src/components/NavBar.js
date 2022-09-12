
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../Asset/logo.png"
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineCall } from "react-icons/md"
import "../Style/NavBar.css"

function Text() {
  return (
    <>
      {['xxl'].map((expand) => (
        <div className="bgc">
          <div className="navContainer ">
            <Navbar key={expand} expand={expand} className="mb-3 " >
              <Container fluid>
                <Navbar.Brand href="#"><img src={logo} alt="logoImg" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                <Navbar.Offcanvas
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                      <img src={logo} alt="logoImg" />
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-center align-items-center flex-grow-1 pe-3 main-nav-content">
                      <Nav.Link className='a-hover' href="#action1">Home</Nav.Link>
                      <Nav.Link className='a-hover' href="#action2">Event</Nav.Link>
                      <Nav.Link className='a-hover' href="#action2">About</Nav.Link>
                      <Nav.Link className='a-hover' href="#action2">Blog</Nav.Link>
                      <Nav.Link className='a-hover' href="#action2">Contact</Nav.Link>
                    </Nav>
                    <div className="phone-button">
                      <button className="btn-nav" ><MdOutlineCall></MdOutlineCall> +1 (000) 000 000</button>
                    </div>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
          </div>
        </div>
      ))}
    </>
  );
}

export default Text;