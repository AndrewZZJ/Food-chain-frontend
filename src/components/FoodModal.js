import React from "react";
import PropTypes from "prop-types";
import {Modal, Col, Row, Button} from "react-bootstrap";
import {ReactSVG} from "react-svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import "./FoodModal.css";

const FoodModal = (props) => {
    return (<Modal.Dialog id="food-modal" size={"lg"}>
        <Modal.Header>
            <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body id="food-modal-body">
            <Row>
                <Col></Col>
                {[0, 1, 2, 3, 4].map(index => (
                    <Col key={index}>
                        <ReactSVG className="food-modal-icon" src={`/Foods-${index + 1}.svg`}/>
                        {(props.quota && props.quota[index]) ? <b className="food-modal-quota">{props.quota[index]}</b> : ""}
                    </Col>
                ))}
            </Row>
            {props.resultOnly ? "" :
                <Row id="food-modal-row1">
                    <Col>{props.header1}</Col>
                    {[0, 1, 2, 3, 4].map(index => (
                        <Col key={index}>
                            <FontAwesomeIcon icon="plus-circle" onClick={props.onPlus.bind(this, index)}/>
                            &nbsp;{props.value[index]}&nbsp;
                            <FontAwesomeIcon icon="minus-circle" onClick={props.onMinus.bind(this, index)}/>
                        </Col>
                    ))}
                </Row>
            }
            <Row id="food-modal-row2">
                <Col>{props.header2}</Col>
                {[0, 1, 2, 3, 4].map(index => (
                    <Col key={index}>{props.result[index]}</Col>
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
    quota: PropTypes.array,
    value: PropTypes.array.isRequired,
    result: PropTypes.array.isRequired,
    onPlus: PropTypes.func,
    onMinus: PropTypes.func,
    resultOnly: PropTypes.bool,
};

export default FoodModal;
