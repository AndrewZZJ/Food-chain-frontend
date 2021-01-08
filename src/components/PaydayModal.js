import React, {useState} from "react";
import PropTypes from "prop-types";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import {Col, Row} from "react-bootstrap";
import CardGallery from "./CardGallery";

import "./PaydayModal.css";

const PaydayModal = (props) => {

    const [selectedCards, setSelection] = useState([]);
    return (<Modal.Dialog id="payday-modal" size={"xl"}>
        <Modal.Header>
            <Modal.Title>PAYDAY</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Row>
                <Col>
                    <p id="payday-modal-salaries">SALARIES TO PAY: ${
                        props.employees
                            .filter((e, i) => !selectedCards.includes(`${i}`))
                            .reduce((sum, employee) => sum + (employee.salary ? 5 : 0), 0)
                    }</p>
                </Col>
                <Col>
                    <p id="payday-modal-balance">YOUR BALANCE: ${props.balance}</p>
                </Col>
            </Row>
            <Row>
                <CardGallery
                    cards={props.employees.map(e => e.image)}
                    onSelected={(arr) => {
                        setSelection(arr);
                    }}
                />
            </Row>
            <Row id="payday-modal-footer">
                <Button
                    variant={selectedCards.length ? "danger" : "success"}
                    onClick={() => props.onConfirm?.(selectedCards)}
                >
                    {selectedCards.length ? "Layoff" : "Confirm"}
                </Button>
            </Row>
        </Modal.Body>
    </Modal.Dialog>
    );
};

PaydayModal.propTypes = {
    employees: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        salary: PropTypes.bool,
        image: PropTypes.string,
    })).isRequired,
    balance: PropTypes.number.isRequired,
    onConfirm: PropTypes.func,
};

export default PaydayModal;
