import React, { useState } from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import BurgCrad from './BurgCrad'

const Menu = () => {

    const [menu] =useState([1,2,3,4,5,6])
  return (
    <>
    <section id="menu">
        <Container>
            <div className='text-center'>
                <h3 className='text-warning'>Every time and everywhere you want this we're here! <i class="bi bi-tiktok"></i>
                </h3>
            </div>
            <Row>
                {
                    menu.map((item)=>{
                        return(
                            <Col md={6} lg={4}>
                            <BurgCrad />
                            </Col>
                        )
                    })
                }
              
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Menu