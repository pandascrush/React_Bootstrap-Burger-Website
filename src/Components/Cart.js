import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import List from './List';

const Cart = () => {
    const [show, setShow] = useState(false);
  return (
    <>
     <Button variant="" onClick={()=> setShow(!show)} className="me-2 position-relative">
     <i class="bi bi-cart4"></i>
     <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    3
    <span class="visually-hidden">cart</span> </span>

      </Button>
      <Offcanvas show={show} onHide={()=> setShow(!show)}  placement={'end'} >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <List/>
          <div className='text-end m-2'>
            <Button className='text-bg-warning'>Check out</Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Cart