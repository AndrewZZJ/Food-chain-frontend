import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";


function Garden(props) {
    return (
        <Card.Img
            variant="top"
            src={props.src}
            style={{ transform: `rotate(${(props.rotate % 4) * 90}deg)` }}
            height={props.height}
            width={props.width}/>
    );
}

Garden.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    rotate: PropTypes.number,
};

Garden.defaultProps = {
    rotate: 0,
};


export default Garden;
