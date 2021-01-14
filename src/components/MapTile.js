import React from "react";
import PropTypes from "prop-types";

import URLImage from "./URLImage";
import {mapTiles} from "../gameConfigs";

function MapTile(props) {
    return (
        <URLImage
            src={mapTiles[props.id].image}
            x={props.offset.x + props.position.xTile * props.size.width + props.size.width / 2}
            y={props.offset.y + props.position.yTile * props.size.height + props.size.height / 2}
            width={props.size.width}
            height={props.size.height}
            rotation={props.rotate * 90}
        />
    );
}

MapTile.propTypes = {
    id: PropTypes.string.isRequired,
    position: PropTypes.shape({
        xTile: PropTypes.number.isRequired,
        yTile: PropTypes.number.isRequired,
    }),
    size: PropTypes.shape({
        height: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
    }),
    rotate: PropTypes.number,
    offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number,
    }),
};

MapTile.defaultProps = {
    rotate: 0,
    offset: {
        x: 0,
        y: 0,
    },
};

export default MapTile;
