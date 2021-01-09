import PropTypes from "prop-types";
import React from "react";
import { Card } from "react-bootstrap";


function EmployeeCard(props) {
    return (<Card.Img variant="top" src={props.src} height={props.height} width={props.width}/>);
}

EmployeeCard.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
};

export default EmployeeCard;
