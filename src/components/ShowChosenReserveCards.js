import React from "react";
import PropTypes from "prop-types";
import {Button, Modal, Row, Col} from "react-bootstrap";
import {ReactSVG} from "react-svg";

import "./ShowChosenReserveCards.css";

function ShowChosenReserveCards(props) {
    return (<Modal 
        id="show-chosen-reserve"
        show={props.show}
        size="xl">
        <Modal.Header>
            <Modal.Title>RESERVE CARDS CHOSEN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Row>
                {props.cardValues.map(cardValue => (
                    <Col key={cardValue}><ReactSVG className="reserve-card" src={`/Reserve-${cardValue}.svg`} /></Col>
                ))}
            </Row>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="primary" onClick={props.onConfirm}>
                OK!
            </Button>
        </Modal.Footer>
    </Modal>);
}

ShowChosenReserveCards.propTypes = {
    show: PropTypes.bool,
    onConfirm: PropTypes.func.isRequired,
    cardValues: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default ShowChosenReserveCards;