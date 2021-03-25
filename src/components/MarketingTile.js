import React from "react";
import PropTypes from "prop-types";
import URLImage from "./URLImage";

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
    return (
        <URLImage
            src={props.marketing.image}
            x={props.offset.x + xTile * props.unitSize}
            y={props.offset.y + yTile * props.unitSize}
            stroke="#1A1311"
            strokeWidth={1}
            width={xSize * props.unitSize}
            height={ySize * props.unitSize}
            rotation={props.marketing.direction * 90}
        />
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
};

export default MarketingTile;
