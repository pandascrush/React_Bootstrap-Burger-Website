import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Cart from './Cart';

const AppBar = ()=> {
  return (
    <>
    <Navbar bg="light" className='' expand="lg">
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-warning'><span><i className="bi bi-egg-fill"></i>Burger Shop</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className=""> 
            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#menu" className='fw-bold'>Menu</Nav.Link>
            <Nav.Link href="#musttry"className='fw-bold' >Must try</Nav.Link>
            <Nav.Link href="#contact" className='fw-bold'>Contact Us</Nav.Link>
            <Cart/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default AppBar;