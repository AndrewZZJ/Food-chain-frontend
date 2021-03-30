import React from "react";
import PropTypes from "prop-types";
import URLImage from "./URLImage";
import { Group } from "react-konva";

function MarketingTile(props) {
    let [xTile, yTile] = props.marketing.position;
    const [xSize, ySize] = props.marketing.size;

    switch(props.marketing.direction){
    case 0:
        xTile += xSize / 2;
        yTile += ySize / 2;
        break;
    case 1:
        xTile += ySize / 2;
        yTile += xSize / 2;
        break;
    case 2:
        xTile -= (xSize / 2 - 1);
        yTile -= (ySize / 2 - 1);
        break;
    case 3:
        xTile += ySize / 2;
        yTile -= (xSize / 2 - 1);
        break;
    }

    let popDir = 0;
    if(props.marketing.type == "airplane"){
        if(props.marketing.order == 4){
            if(props.marketing.direction % 2){
                popDir = (props.marketing.position[1] >= 0) ? 0 : 2;
            }else{
                popDir = (props.marketing.position[0] >= 0) ? 3 : 1;
            }
        }else if(props.marketing.direction % 2){
            popDir = (props.marketing.position[0] >= 0) ? 3 : 1;
        }else{
            popDir = (props.marketing.position[1] >= 0) ? 0 : 2;
        }
    }

    function onMouseOver(){
        props.setAdvertise({
            x: props.offset.x + xTile * props.unitSize,
            y: props.offset.y + yTile * props.unitSize,
            xSize: (props.marketing.direction % 2) ? ySize : xSize,
            ySize: (props.marketing.direction % 2) ? xSize : ySize,
            direction: popDir
        });
    }
    function onMouseOut(){
        props.setAdvertise(null);
    }

    return (
        <Group
            x={props.offset.x + xTile * props.unitSize}
            y={props.offset.y + yTile * props.unitSize}
        >
            <URLImage
                src={props.marketing.image}
                stroke="#1A1311"
                strokeWidth={1}
                width={xSize * props.unitSize}
                height={ySize * props.unitSize}
                rotation={props.marketing.direction * 90}
                localProps={{onMouseOver, onMouseOut}}
            />
        </Group>
    );
}

MarketingTile.propTypes = {
    unitSize: PropTypes.number.isRequired,
    offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    marketing: PropTypes.shape({
        type: PropTypes.string.isRequired,
        size: PropTypes.arrayOf(PropTypes.number).isRequired,
        image: PropTypes.string.isRequired,
        order: PropTypes.number.isRequired,
        position: PropTypes.arrayOf(PropTypes.number).isRequired,
        direction: PropTypes.number.isRequired,
    }),
    setAdvertise: PropTypes.func.isRequired,
};

export default MarketingTile;
