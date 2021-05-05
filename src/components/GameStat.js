import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Col, Row} from "react-bootstrap";

import "./GameStat.css";

function GameStat(props){
    return (
        <Col id="game-stat">
            <Row id="game-phase">
                <div className="turn-back">
                    {props.turn}
                </div>
                <b className="turn-phase">{props.phase}</b>
            </Row>
            <Row id="game-reserve">
                <img src="/Reserve.svg"/>
                <b id="reserve-value">${props.money}</b>
            </Row>
        </Col>
    );
}

GameStat.propTypes = {
    players: PropTypes.object,
    turn: PropTypes.number,
    phase: PropTypes.string,
    money: PropTypes.number,
};

const mapStateToProps = state => ({
    players: state.game.players,
    turn: state.game.turn,
    phase: state.game.phase,
    money: state.game.money,
});

export default connect(mapStateToProps, null)(GameStat);
