import React, {useState} from "react";
import PropTypes from "prop-types";
import FoodModal from "./FoodModal";

import "./FoodModal.css";

const CleanupModal = (props) => {
    const [value, setValue] = useState({
        pizza: 0,
        burger: 0,
        lemonade: 0,
        beer: 0,
        coke: 0,
    });
    function onPlus(foodName){
        const sumValue = Object.values(value).reduce((sum, val) => (sum + val), 0);
        if(((props.initValues[foodName] - (value[foodName] + 1)) >= 0) && (sumValue < 10)){
            setValue({...value, [foodName]: value[foodName] + 1});
        }
    }
    function onMinus(foodName){
        if((value[foodName] - 1) >= 0){
            setValue({...value, [foodName]: value[foodName] - 1});
        }
    }
    function onConfirm(){
        props.onConfirm(value);
    }
    return (
        <FoodModal
            title="Cleanup"
            header1="store"
            header2="drop"
            value={value}
            resultOnly={!props.hasFridge}
            result={Object.entries(props.initValues).reduce((obj, [key, val]) => ({...obj, [key]: val - value[key]}), {})}
            onPlus={onPlus}
            onMinus={onMinus}
            onConfirm={onConfirm}
        />
    );
};

CleanupModal.propTypes = {
    initValues: PropTypes.shape({
        pizza: PropTypes.number,
        burger: PropTypes.number,
        lemonade: PropTypes.number,
        beer: PropTypes.number,
        coke: PropTypes.number,
    }).isRequired,
    onConfirm: PropTypes.func,
    hasFridge: PropTypes.bool,
};

export default CleanupModal;
