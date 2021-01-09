import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

function RestaurantTile(props) {
    return (
        <Card.Img
            variant="top"
            src={props.src}
            style={{ transform: `rotate(${(props.rotate % 4) * 90}deg)` }}
            height={props.height}
            width={props.width}/>
    );
}

RestaurantTile.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    rotate: PropTypes.number,
};

RestaurantTile.defaultProps = {
    rotate: 0,
};

export default RestaurantTile;
