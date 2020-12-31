import './ChooseReserveCard.css';
import card300 from "../images/Reserve-1.svg";
import card100 from "../images/Reserve-2.svg";
import card200 from "../images/Reserve-3.svg";
import {Modal, Col, Row, Container, Button} from 'react-bootstrap';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChooseReserveCard() {

    const [show, setShow] = useState(false);
    const [chosenCard, setChosenCard] = useState('200');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const selectReserve = (value) => {setChosenCard(value)};

    const buttonStyle = {
        padding: 0
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Initialize event
            </Button>
            {/*<img src={card100} alt="Title screen" />*/}
            <p>The card chosen: {chosenCard}</p>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="text-white bg-dark">
                    <Modal.Title>CHOOSE RESERVE CARD</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Row>
                            <Col>
                                <Button variant="secondary" style={buttonStyle} onClick={() =>selectReserve(100)}>
                                    <img src={card100} alt="card100" />
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="secondary" style={buttonStyle} onClick={() =>selectReserve(200)}>
                                    <img src={card200} alt="card200" />
                                </Button>
                            </Col>
                            <Col>
                                <Button variant="secondary" style={buttonStyle} onClick={() =>selectReserve(300)}>
                                    <img src={card300} alt="card300" />
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Confirm!
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ChooseReserveCard;
