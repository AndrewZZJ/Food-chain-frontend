import React from "react";
import PropTypes from "prop-types";
import {Modal, Col, Row, Button} from "react-bootstrap";
import {ReactSVG} from "react-svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./FoodModal.css";

const foodKeys = ["lemonade", "beer", "coke", "pizza", "burger"];

const FoodModal = (props) => {
    return (<Modal.Dialog id="food-modal" size={"lg"}>
        <Modal.Header>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="food-modal-body">
            <Row>
                <Col></Col>
                {foodKeys.map(key => (
                    <Col key={key}>
                        <ReactSVG className="food-modal-icon" src={`/Foods-${key}.svg`}/>
                        {props.quota?.[key] ? <b className="food-modal-quota">{props.quota[key]}</b> : ""}
                    </Col>
                ))}
            </Row>
            {props.resultOnly ? "" :
                <Row id="food-modal-row1">
                    <Col>{props.header1}</Col>
                    {foodKeys.map(key => (
                        <Col key={key}>
                            <FontAwesomeIcon icon="plus-circle" onClick={props.onPlus.bind(this, key)}/>
                            &nbsp;{props.value[key]}&nbsp;
                            <FontAwesomeIcon icon="minus-circle" onClick={props.onMinus.bind(this, key)}/>
                        </Col>
                    ))}
                </Row>
            }
            <Row id="food-modal-row2">
                <Col>{props.header2}</Col>
                {foodKeys.map(key => (
                    <Col key={key}>{props.result[key]}</Col>
                ))}
            </Row>
            <Row id="food-modal-footer">
                <Button
                    variant="success"
                    onClick={props.onConfirm}
                >
                    Confirm
                </Button>
            </Row>
        </Modal.Body>
    </Modal.Dialog>
    );
};

FoodModal.propTypes = {
    title: PropTypes.string.isRequired,
    header1: PropTypes.string.isRequired,
    header2: PropTypes.string.isRequired,
    onConfirm: PropTypes.func,
    quota: PropTypes.shape({
        pizza: PropTypes.number,
        burger: PropTypes.number,
        lemonade: PropTypes.number,
        beer: PropTypes.number,
        coke: PropTypes.number,
    }).isRequired,
    value: PropTypes.shape({
        pizza: PropTypes.number,
        burger: PropTypes.number,
        lemonade: PropTypes.number,
        beer: PropTypes.number,
        coke: PropTypes.number,
    }).isRequired,
    result: PropTypes.shape({
        pizza: PropTypes.number,
        burger: PropTypes.number,
        lemonade: PropTypes.number,
        beer: PropTypes.number,
        coke: PropTypes.number,
    }).isRequired,
    onPlus: PropTypes.func,
    onMinus: PropTypes.func,
    resultOnly: PropTypes.bool,
};

export default FoodModal;
