import React from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

const Comments = () => {
  return (
    <section id="contact" className="bg-lihgt py-3">
      <div className="text-center my-4">
        <h2 className="text-warning">
          Comments <i class="bi bi-chat-dots-fill"></i>
        </h2>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-envelope"></i>
                </InputGroup.Text>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className=""
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </InputGroup>

              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-fill"></i>
                </InputGroup.Text>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Name"
                  className=""
                >
                  <Form.Control type="email" placeholder="Name" />
                </FloatingLabel>
              </InputGroup>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comments;
