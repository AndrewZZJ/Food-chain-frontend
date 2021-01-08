import PropTypes from "prop-types";
import React, {useState} from "react";
import {Row} from "react-bootstrap";
import {ReactSVG} from "react-svg";

import "./CardGallery.css";

/**
 * This component draws a row of cards and user may select some of them.
 */
const CardGallery = (props) => {
    const [selected, selectCard] = useState({});
    const [pointedIndex, setPoint] = useState();

    // TODO fix it with dynamic parent width
    const [width] = useState(window.innerWidth * 0.77);

    const cardWidth = props.cardHeight * 0.6433;
    const cardTotalWidth = (cardWidth + 10) * props.cards.length;
    let gapOffset;
    if (width - cardTotalWidth > 0) {
        gapOffset = cardWidth + 10;
    } else {
        gapOffset = (width - cardTotalWidth) / props.cards.length;
    }
    if (gapOffset < (30 - cardWidth)) {
        gapOffset = 30 - cardWidth;
    }
    return (
        <Row className="card-gallery"
            style={{height: props.cardHeight + 50}}>
            {props.cards.map((card, index) => (
                <ReactSVG
                    className="card-gallery-image"
                    style={Object.assign(
                        {left: (gapOffset + cardWidth) * index},
                        selected[index] && { top: 0 },
                        index === pointedIndex && { zIndex: 10 },
                    )}
                    alt="Card in hand"
                    key={card}
                    draggable={false}
                    onMouseEnter={() => {
                        setPoint(index);
                    }}
                    onMouseLeave={() => {
                        setPoint(undefined);
                    }}
                    onClick={() => {
                        const newSelected = {
                            ...selected,
                            [index]: !selected[index],
                        };
                        selectCard(newSelected);
                        props.onSelected?.(Object.keys(newSelected)
                            .filter(k => newSelected[k])
                        );
                    }}
                    src={card}
                    height={props.cardHeight}
                />
            ))}
        </Row>
    );
};

CardGallery.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelected: PropTypes.func,
    cardHeight: PropTypes.number,
};

CardGallery.defaultProps = {
    cardHeight: 300,
};

export default CardGallery;
