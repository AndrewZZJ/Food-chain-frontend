import React, {useState} from "react";
import PropTypes from "prop-types";
import FoodModal from "./FoodModal";

import "./FoodModal.css";

const drinkKeys = ["lemonade", "beer", "coke"];
const foodKeys = ["pizza", "burger"];

const GetFoodModal = (props) => {
    const [value, setValue] = useState({
        pizza: 0,
        burger: 0,
        lemonade: 0,
        beer: 0,
        coke: 0,
    });
    const sumDrinks = drinkKeys.reduce((sum, key) => sum + value[key], 0);
    const sumFoods = foodKeys.reduce((sum, key) => sum + value[key], 0);
    const quota = {
        pizza: props.quotas.foods - sumFoods,
        burger: props.quotas.foods - sumFoods,
        lemonade: props.quotas.drinks - sumDrinks,
        beer: props.quotas.drinks - sumDrinks,
        coke: props.quotas.drinks - sumDrinks,
    };
    function onPlus(foodName){
        const sumDrinks = drinkKeys.reduce((sum, key) => sum + value[key], 0);
        const sumFoods = foodKeys.reduce((sum, key) => sum + value[key], 0);
        if((drinkKeys.includes(foodName) ? 
            props.quotas.drinks - sumDrinks : 
            props.quotas.foods - sumFoods
        ) > 0){
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
            title="Get food &amp; drink"
            header1={<p style={{fontSize: "0.8em"}}>Errand<br/>&amp;<br/>Kitchen</p>}
            header2="Total"
            value={value}
            quota={quota}
            resultOnly={Object.values(quota).reduce((sum, val) => sum + val, 0) === 0}
            result={Object.entries(props.initValues).reduce((obj, [key, val]) => ({...obj, [key]: val + value[key]}), {})}
            onPlus={onPlus}
            onMinus={onMinus}
            onConfirm={onConfirm}
        />
    );
};

GetFoodModal.propTypes = {
    initValues: PropTypes.shape({
        pizza: PropTypes.number,
        burger: PropTypes.number,
        lemonade: PropTypes.number,
        beer: PropTypes.number,
        coke: PropTypes.number,
    }).isRequired,
    quotas: PropTypes.shape({
        drinks: PropTypes.number,
        foods: PropTypes.number
    }),
    onConfirm: PropTypes.func,
};

export default GetFoodModal;
