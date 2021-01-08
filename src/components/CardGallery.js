import PropTypes from "prop-types";
import React, {createRef} from "react";
import {Row} from "react-bootstrap";

import Card from "./EmployeeCard";

import "./CardGallery.css";

/**
 * This component draws a row of cards and user may select some of them.
 */
class CardGallery extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selected: {},
            offset: 10,
            cardWidth: 64,
            height: 100,
        };
        this.rowRef = createRef();
        this.onResize = this.onResize.bind(this);
    }

    componentDidMount() {
        window.addEventListener("resize", this.onResize);
        this.onResize();
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.onResize);
    }
    onResize(){
        if(this.rowRef.current){
            const width = this.rowRef.current.offsetWidth;
            const height = this.rowRef.current.offsetHeight * 0.95;
            const cardWidth = height * 0.6443;
            const cardMaxWidth = cardWidth * this.props.cards.length;
            const cardMinWidth = cardWidth + (cardWidth * 0.2 * this.props.cards.length);
            let offset = cardWidth * 0.2;
            if(width > cardMaxWidth){
                offset = cardWidth;
            }else if(width > cardMinWidth){
                offset = (width - cardWidth) / (this.props.cards.length - 1);
            }
            this.setState({
                offset,
                cardWidth,
                height,
            });
        }
    }
    onCardClick(index) {
        const newSelected = {
            ...this.state.selected,
            [index]: !this.state.selected[index],
        };
        this.setState({selected: newSelected});
        this.props.onSelected?.(Object.keys(newSelected)
            .filter(k => newSelected[k])
        );
    }

    render(){
        return (
            <Row className="card-gallery"
                {...this.props}
                ref={this.rowRef}
            >
                {this.props.cards.map((card, index) => (
                    <Card
                        className="card-gallery-image"
                        key={index}
                        src={card}
                        style={{
                            width: this.state.cardWidth,
                            height: this.state.height,
                            left: this.state.offset * index,
                            top: (this.state.selected[index]) ? 0 : "5%",
                        }}
                        onClick={this.onCardClick.bind(this, index)}
                    />
                ))}
            </Row>
        );
    }
}

CardGallery.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.string).isRequired,
    onSelected: PropTypes.func,
};

export default CardGallery;
