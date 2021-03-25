import React from "react";
import {Circle, Group, Line, Rect} from "react-konva";
import PropTypes from "prop-types";
import URLImage from "./URLImage";

function RestaurantTile(props) {
    const [x, y] = props.position;
    return (
        <Group
            x={props.offset.x + (x + 1) * props.unitSize}
            y={props.offset.y + (y + 1) * props.unitSize}
            rotation={props.rotate * 90}
        >
            <Rect
                fill="#FFF5E0"
                stroke="#1A1311"
                strokeWidth={1}
                width={2 * props.unitSize}
                height={2 * props.unitSize}
                x={-props.unitSize}
                y={-props.unitSize}
            />
            <URLImage
                src={`/restaurant-${props.player}.svg`}
                width={2 * props.unitSize}
                height={2 * props.unitSize}
            />
            <Line
                stroke="#1A1311"
                strokeWidth={1}
                points={[
                    3 - props.unitSize, -props.unitSize / 2,
                    3 - props.unitSize , 3 - props.unitSize,
                    -props.unitSize / 2, 3 - props.unitSize]}
            />
            {props.isEditing ?
                <Group
                    x={-props.unitSize / 2}
                    onClick={props.onRotate}
                >
                    <Circle 
                        fill="#777777"
                        width={0.6 * props.unitSize}
                        height={0.6 * props.unitSize}
                    />
                    <URLImage
                        src="/rotate.svg"
                        x={1}
                        width={0.4 * props.unitSize}
                        height={0.4 * props.unitSize}
                    />
                </Group> : null}
            {props.isEditing ?
                <Group
                    x={props.unitSize / 2}
                    onClick={props.onRemove}
                >
                    <Circle 
                        fill="#C5352F"
                        width={0.6 * props.unitSize}
                        height={0.6 * props.unitSize}
                    />
                    <URLImage
                        src="/close.svg"
                        width={0.4 * props.unitSize}
                        height={0.4 * props.unitSize}
                    />
                </Group> : null}
        </Group>
    );
}

RestaurantTile.propTypes = {
    player: PropTypes.number.isRequired,
    unitSize: PropTypes.number.isRequired,
    offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
    position: PropTypes.arrayOf(PropTypes.number).isRequired,
    rotate: PropTypes.number,
    isEditing: PropTypes.bool,
    onRotate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired,
};

RestaurantTile.defaultProps = {
    rotate: 0,
    isEditing: true, // FIXME:
};

export default RestaurantTile;
