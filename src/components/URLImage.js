import React from "react";
import PropTypes from "prop-types";
import {Image} from "react-konva";
import useImage from "use-image";

function URLImage(props){
    const [image] = useImage(props.src);

    return (
        <Image
            {...props}
            image={image}
        />
    );
}

URLImage.propTypes = {
    src: PropTypes.string.isRequired,
};

export default URLImage;