import React, {useState} from "react";
import PropTypes from "prop-types";
import FoodModal from "./FoodModal";

import "./FoodModal.css";

const GetfoodModal = (props) => {
    const [value, setValue] = useState([0, 0, 0, 0, 0]);
    function calculateQuota(){
        if(props.quota && ((props.quota[0] + props.quota[1]) != 0)){
            const sumDrinks = [0, 1, 2].reduce((sum, index) => sum + value[index], 0);
            const sumFoods = [3, 4].reduce((sum, index) => sum + value[index], 0);
            return value.map((_, index) => (index < 3) ? (props.quota[0] - sumDrinks): (props.quota[1] - sumFoods));
        }else{
            return [];
        }
    }
    function onPlus(index){
        const sumDrinks = [0, 1, 2].reduce((sum, index) => sum + value[index], 0);
        const sumFoods = [3, 4].reduce((sum, index) => sum + value[index], 0);
        if(props.quota && (((index < 3) ? props.quota[0] - sumDrinks : props.quota[1] - sumFoods) > 0)){
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
            title="Get food &amp; drink"
            header1={<p style={{fontSize: "0.8em"}}>Errand<br/>&amp;<br/>Kitchen</p>}
            header2="Total"
            value={value}
            quota={calculateQuota()}
            resultOnly={calculateQuota() === []}
            result={props.initValue.map((init, index) => (init + value[index]))}
            onPlus={onPlus}
            onMinus={onMinus}
            onConfirm={onConfirm}
        />
    );
};

GetfoodModal.propTypes = {
    initValue: PropTypes.array.isRequired,
    quota: PropTypes.array,  // [drink, food]
    onConfirm: PropTypes.func,
};

export default GetfoodModal;
