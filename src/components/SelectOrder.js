import React from "react";
import PropTypes from "prop-types";
import { Modal, Button} from "react-bootstrap";

import "./SelectOrder.css";

function SelectOrder(props){
    return (
        <Modal id="select-order-modal" centered show={props.show}>
            <Modal.Header id="select-order-header">
                <Modal.Title>Select order - {props.user}</Modal.Title>
            </Modal.Header>
            <Modal.Body id="select-order-body">
                <img id="select-order-back" src="/TurnOrder.svg" />
                <div id="select-order-wrapper">
                    {props.orders.map((playerId, index) => (
                        <div key={index} className={playerId ? "select-order-place" : (props.isWaiting ? "select-order-waiting" : "select-order-empty")}>
                            {playerId ?
                                <img className="select-order-restaurant" src={`/restaurant-${playerId}.svg`} /> :
                                (props.isWaiting ? "Wait" : <Button variant="link" onClick={() => {props.onSelect(index);}}>{index + 1}</Button>)
                            }
                        </div>
                    ))}
                </div>
            </Modal.Body>
        </Modal>
    );
}

SelectOrder.propTypes = {
    user: PropTypes.string.isRequired,
    show: PropTypes.bool,
    isWaiting: PropTypes.bool,
    orders: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default SelectOrder;