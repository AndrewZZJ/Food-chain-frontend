import React from "react";
import PropTypes from "prop-types";
import "./MapTile.css";


function MapTile(props) {
    const TileStyle = {
        position: "absolute",
        left: props.position.xTile,
        top: props.position.yTile,
        height: props.size.height,
        width: props.size.width,
    };

    TileStyle.transform = "rotate(" + props.rotate * 90 + "deg)";

    return (
        <div className="App">
            <img src={props.id} style={TileStyle}/>
        </div>
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
};

MapTile.defaultProps = {
    rotate: 0,
};

export default MapTile;
