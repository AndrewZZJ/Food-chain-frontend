import React from "react";
import PropTypes from "prop-types";
import {Group, Rect, RegularPolygon} from "react-konva";
import URLImage from "./URLImage";

function MarketingPopup(props){
    let xPos = props.message.x;
    let yPos = props.message.y;
    let xDock = 1.25 * props.unitSize;
    let yDock = 0.75 * props.unitSize;

    if(props.message.direction % 2){
        xPos -= ((props.message.direction - 2) * (props.message.xSize / 2 + 0.25) + (props.message.direction - 1) * 1.25) * props.unitSize;
        yPos -= 0.75 * props.unitSize;
        xDock = ((props.message.direction == 3) ? 2.615 : -0.115) * props.unitSize;
    }else{
        yPos += ((props.message.direction - 1) * (props.message.ySize / 2 + 0.25) + (props.message.direction - 2) * 0.75) * props.unitSize;
        xPos -= 1.25 * props.unitSize;
        yDock = ((props.message.direction == 0) ? 1.615 : -0.115) * props.unitSize;
    }

    return (
        <Group
            x={xPos}
            y={yPos}
        >
            <RegularPolygon
                fill="#FFFFFF"
                x={xDock}
                y={yDock}
                sides={3}
                radius={0.25 * props.unitSize}
                rotation={(props.message.direction - 2) * 90}
            />
            <Rect
                fill="#FFFFFF"
                cornerRadius={8}
                width={2.5 * props.unitSize}
                height={1.5 * props.unitSize}
            />
            {<URLImage
                src={`/restaurant-${props.message.restaurant}.svg`}
                x={0.65 * props.unitSize}
                y={0.75 * props.unitSize}
                width={1.1 * props.unitSize}
                height={1.1 * props.unitSize}
            />}
        </Group>
    );
}

MarketingPopup.propTypes = {
    message: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        xSize: PropTypes.number.isRequired,
        ySize: PropTypes.number.isRequired,
        direction: PropTypes.number.isRequired,
        restaurant: PropTypes.number.isRequired,
    }),
    unitSize: PropTypes.number.isRequired,
};

export default MarketingPopup;