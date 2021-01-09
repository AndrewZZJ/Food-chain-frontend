import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";


function MilestoneCard(props) {
    return (<Card.Img variant="top" src={props.src} height={props.height} width={props.width}/>);
}

MilestoneCard.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
};

export default MilestoneCard;
