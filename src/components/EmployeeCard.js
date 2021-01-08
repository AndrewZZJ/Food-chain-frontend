import React from "react";
import PropTypes from "prop-types";
import {ReactSVG} from "react-svg";

function EmployeeCard(props) {
    return(<ReactSVG
        {...props}
        draggable={false}
        src={props.src} 
    />);
}

EmployeeCard.propTypes = {
    src: PropTypes.string.isRequired,
};

export default EmployeeCard;