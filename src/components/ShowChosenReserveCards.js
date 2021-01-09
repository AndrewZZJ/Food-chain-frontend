import React from "react";
import { Button, Form } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./ShowChosenReserveCards.css";

function ShowChosenReserveCards() {
    return (
        <div className="App">
            <Container>
                <Row className="align-items-center">
                    <Col>
                        <img src="/Cover.png" alt="Title screen"/>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label style={{ fontFamily: "VTC" }}>USERNAME</Form.Label>
                                <Form.Control type="email" placeholder="Username"/>
                                <Form.Text className="text-muted"></Form.Text>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label style={{ fontFamily: "VTC" }}>PASSWORD</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{ fontFamily: "VTC" }}>LOGIN</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default ShowChosenReserveCards;
