import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./nav.css"
import vada from '../assets/vada.png'

function NavBar() {
  return (
    <div>
        <Navbar bg="dark" variant="dark" className='navclr'>
        <Container>
          <Navbar.Brand href="#home"><img src={vada} style={{"width":"50px"}}></img></Navbar.Brand>
          {/* <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar