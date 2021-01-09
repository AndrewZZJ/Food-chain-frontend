import PropTypes from "prop-types";
import React from "react";
import { ReactSVG } from "react-svg";


function EmployeeCard(props) {
    return (<ReactSVG 
        {...props}
        src={props.src}
        style={{
            height: props.height,
            width: props.width,
        }}
    />);
}

EmployeeCard.propTypes = {
    src: PropTypes.string.isRequired,
    height: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOf([PropTypes.number, PropTypes.string]).isRequired,
};

export default EmployeeCard;
