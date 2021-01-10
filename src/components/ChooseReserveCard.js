
import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Container, Modal, Row } from "react-bootstrap";

import "./ChooseReserveCard.css";

function ChooseReserveCard(props) {
    return (
        <Modal >
            <Modal.Header>
                <Modal.Title>CHOOSE RESERVE CARD</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col>
                            <Button variant="secondary" className="button-style" onClick={() => props.onConfirm(100)}>
                                <img src="/Reserve-100.svg" />
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" className="button-style" onClick={() => props.onConfirm(200)}>
                                <img src="/Reserve-200.svg" />
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="secondary" className="button-style" onClick={() => props.onConfirm(300)}>
                                <img src="/Reserve-300.svg" />
                            </Button>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

ChooseReserveCard.propTypes = {
    onConfirm: PropTypes.func.isRequired,
};

export default ChooseReserveCard;
