import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";


function House(props) {
    return (
        <Card.Img
            variant="top"
            src={props.src}
            style={{ transform: `rotate(${(props.rotate % 4) * 90}deg)` }}
            height={props.height}
            width={props.width}/>
    );
}

House.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    rotate: PropTypes.number,
};

House.defaultProps = {
    rotate: 0,
};

export default House;
