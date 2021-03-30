import React from "react";
import PropTypes from "prop-types";
import {Group, Rect, RegularPolygon} from "react-konva";

function MarketingPopup(props){
    let xPos = props.message.x;
    let yPos = props.message.y;
    let xDock = xPos;
    let yDock = yPos;

    if(props.message.direction % 2){
        xPos -= (props.message.direction - 2) * (props.message.xSize / 2 + props.message.direction * 1.25 - 1) * props.unitSize;
        yPos -= 0.75 * props.unitSize;
        xDock = xPos + ((props.message.direction - 2) * 0.1 + (props.message.direction - 1) * 1.25) * props.unitSize;
    }else{
        yPos += (props.message.direction - 1) * (props.message.ySize / 2 - props.message.direction * 0.75 + 1.75) * props.unitSize;
        xPos -= 1.25 * props.unitSize;
        yDock = yPos - (props.message.direction * 0.85 - 1.6) * props.unitSize;
    }

    return (
        <Group>
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
                x={xPos}
                y={yPos}
                cornerRadius={8}
                width={2.5 * props.unitSize}
                height={1.5 * props.unitSize}
            />
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
    }),
    unitSize: PropTypes.number.isRequired,
};

export default MarketingPopup;