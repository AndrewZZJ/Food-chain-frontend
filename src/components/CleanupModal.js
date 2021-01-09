import React, {useState} from "react";
import PropTypes from "prop-types";
import FoodModal from "./FoodModal";

import "./FoodModal.css";

const CleanupModal = (props) => {
    const [value, setValue] = useState([0, 0, 0, 0, 0]);
    function onPlus(index){
        const sumValue = value.reduce((sum, val) => (sum + val), 0);
        if(((props.initValue[index] - (value[index] + 1)) >= 0) && (sumValue < 10)){
            let newValue = [...value];
            newValue[index] += 1;
            setValue(newValue);
        }
    }
    function onMinus(index){
        if((value[index] - 1) >= 0){
            let newValue = [...value];
            newValue[index] -= 1;
            setValue(newValue);
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
            resultOnly={props.resultOnly}
            result={props.initValue.map((init, index) => (init - value[index]))}
            onPlus={onPlus}
            onMinus={onMinus}
            onConfirm={onConfirm}
        />
    );
};

CleanupModal.propTypes = {
    initValue: PropTypes.array.isRequired,
    onConfirm: PropTypes.func,
    resultOnly: PropTypes.bool,
};

export default CleanupModal;
