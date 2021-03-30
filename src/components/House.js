import React from "react";
import PropTypes from "prop-types";
import URLImage from "./URLImage";
import {Group, Text} from "react-konva";

function House(props) {
    let [xTile, yTile] = props.house.position;
    switch(props.house.direction){
    case 0:
        xTile += 1;
        yTile += 1.5;
        break;
    case 1:
        xTile -= 0.5;
        yTile += 1;
        break;
    case 2:
        yTile -= 0.5;
        break;
    case 3:
        xTile += 1.5;
        break;
    }
    return (
        <Group
            x={props.offset.x + xTile * props.unitSize}
            y={props.offset.y + yTile * props.unitSize}
            rotation={props.house.direction * 90}
        >
            {(props.house.fixed ? null : 
                <URLImage
                    src="/house.svg"
                    width={2 * props.unitSize}
                    height={3 * props.unitSize}
                    localProps={{
                        stroke: "#1A1311",
                        strokeWidth: 2,
                    }}
                />
            )}
            {(props.house.fixed ? null : 
                <Text
                    x={props.unitSize / 3}
                    y={-(props.unitSize * 1.3)}
                    fontSize={props.unitSize / 2.5}
                    fontFamily="AveriaSerifLibre"
                    fill="#FFF5E0"
                    width={props.unitSize / 2.5}
                    height={props.unitSize / 2}
                    align="right"
                    verticalAlign="center"
                    text={`${props.house.order}`}
                />
            )}
            {props.house.demands.map((demand, index) => {
                let width = props.unitSize, height = props.unitSize;
                switch(demand){
                case "burger":
                    height = height * 21 / 30;
                    break;
                case "pizza":
                    height = height * 29/ 31;
                    break;
                case "coke":
                case "beer":
                    width = width * 13 / 34;
                    break;
                case "lemonade":
                    width = width * 20 / 31;
                    break;
                }
                return(
                    <URLImage
                        key={index}
                        x={(index % 2 == 0) ? -props.unitSize / 2 : props.unitSize / 2}
                        y={(Math.floor(index / 2) - 1) * props.unitSize}
                        src={`/Foods-${demand}.svg`}
                        width={width}
                        height={height}
                        localProps={{
                            opacity: 0.6,
                            shadowColor: "#FFFFFF",
                            shadowBlur: 3,
                        }}
                    />
                );
            })}
        </Group>
    );
}

House.propTypes = {
    unitSize: PropTypes.number.isRequired,
    offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    house: PropTypes.shape({
        fixed: PropTypes.bool.isRequired,
        garden: PropTypes.bool.isRequired,
        order: PropTypes.number.isRequired,
        position: PropTypes.arrayOf(PropTypes.number).isRequired,
        direction: PropTypes.number.isRequired,
        demands: PropTypes.arrayOf(PropTypes.string),
    }),
};

export default House;
