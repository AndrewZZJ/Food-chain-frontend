import React from "react";
import PropTypes from "prop-types";
import URLImage from "./URLImage";

function Garden(props) {
    let {x, y} = props.position;
    switch(props.rotate){
    case 0:
        x += 1;
        y += 0.5;
        break;
    case 1:
        x += 0.5;
        y += 1;
        break;
    case 2:
        x += 1;
        y += 0.5;
        break;
    case 3:
        x += 0.5;
        break;
    }
    return (
        <URLImage
            src="/garden.svg"
            x={props.offset.x + x * props.unitSize}
            y={props.offset.y + y * props.unitSize}
            width={2 * props.unitSize}
            height={props.unitSize}
            rotation={props.rotate * 90}
        />
    );
}

Garden.propTypes = {
    unitSize: PropTypes.number.isRequired,
    offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    position: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    rotate: PropTypes.number,
};

Garden.defaultProps = {
    rotate: 0,
};


export default Garden;
