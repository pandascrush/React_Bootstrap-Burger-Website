import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {
  return (
    <>
    <Container fluid>
        <Row className='justify-content-center align-items-center'> 
            <Col lg={8}> 
            <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 fluid"
          src={require('../images/burg7.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p className='d-none d-sm-block'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 fluid"
          src={require('../images/burg5.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p className='d-none d-sm-block'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100 fluid"
          src={require('../images/burg6.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p className='d-none d-sm-block'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
        <div className='text-center mt-3'>
            <h2 className='display-5 '>Burger for every Occassion!</h2>
            <p className='lead text-muted'>Lorm ispum, is a venture triumph and disaster it maybe varry times zone</p>
        </div>
    </Container>
    
    </>
  )
}

export default Banner;