import React from "react";
import PropTypes from "prop-types";
import {Image} from "react-konva";
import useImage from "use-image";

function URLImage(props){
    const [image] = useImage(props.src);

    return (
        <Image
            {...props.localProps}
            image={image}
            x={props.x}
            y={props.y}
            width={props.width}
            height={props.height}
            offsetX={props.width / 2}
            offsetY={props.height / 2}
            rotation={props.rotation}
        />
    );
}

URLImage.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    rotation: PropTypes.number,
    x: PropTypes.number,
    y: PropTypes.number,
    localProps: PropTypes.object,
};

URLImage.defaultProps = {
    rotation: 0,
    x: 0,
    y: 0,
};

export default URLImage;