import React, { useState } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

const PickoftheWeek = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section id="musttry">
        <div className="text-center my-4">
          <h2 className="display-5 text-warning">
            Pick of the Week <i class="bi bi-search-heart"></i>
          </h2>
        </div>
        <Container>
          <Row className="align-items-center my-4">
            <Col md={7}>
              <Image
                src={require("../images/Burg2.jpg")}
                fluid={2}
                rounded
              ></Image>
            </Col>
            <Col md={5}>
              <div>
                <h2 className="h1">Sticky Chessy Burger</h2>
                <p>
                  hungry? let's meat up… the best burgers are like life — messy
                  and topped with bacon. life is too short for a well-done
                  burger.
                </p>
                <Button
                  className="text-bg-warning"
                  onClick={() => setShow(true)}
                >
                  {" "}
                  <i class="bi bi-bag"></i> Buy Now
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer
          className="p-3 position-fixed bottom-0 end-0 "
          position="bottom-end"
        >
          <Toast
            onClose={() => setShow(false)}
            show={show}
            delay={3000}
            autohide
          >
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added </strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Order is on the way...</Toast.Body>
          </Toast>
        </ToastContainer>
      </section>
    </>
  );
};

export default PickoftheWeek;
