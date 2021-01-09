import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { emit } from "../reducers/socket";
import NaviBar from "../components/NaviBar";
import "./WaitingPage.css";

function WaitingPage(props) {
    const setPrepared = (isReady) => props.emit("preparation", { isReady });
    const exchangePosition = (index) => props.emit("exchange_place", { index });

    const onPreparedClick = () => {
        if(props.players && props.username) {
            setPrepared(!props.players[props.username].prepared);
        }
    };

    return (
        <div id="waiting-page">
            <NaviBar/>
            <img id="waiting-room-logo" src="/waiting_room.svg"/>
            <Container id="wrapper">
                <Row id="player-wrapper">
                    {Object.keys(props.players).map(username => {
                        const player = props.players[username];
                        const { index, prepared } = player;
                        return (
                            <Col key={index} className="player">
                                <img src={`/restaurant-${index + 1}.svg`} style={{ opacity: player ? 1 : 0.25 }}/>
                                {player ?
                                    <b className="player-name">{player[0]}</b> :
                                    <Button
                                        size="lg" variant="outline-secondary"
                                        onClick={() => exchangePosition(index)}>
                                        <FontAwesomeIcon icon="exchange-alt"/>
                                    </Button>
                                }
                                <br/>
                                {player ? (
                                    prepared ?
                                        <b className="status" style={{ color: "#419641" }}>Ready</b> :
                                        <b className="status" style={{ color: "#CB2E25" }}>Waiting</b>
                                ) : <b className="status" style={{ color: "#777777" }}>Empty</b>}
                            </Col>
                        );
                    })}
                </Row>
                <Row className="justify-content-md-center" id="confirm-button">
                    {(props.players && props.username && props.players[props.username]) ? (
                        props.players[props.username].prepared ?
                            <b id="ready-message">Waiting for other players... &nbsp;
                                <Button variant="danger" size="lg" onClick={onPreparedClick}>Cancel</Button>
                            </b>
                            : <Button variant="success" size="lg" onClick={onPreparedClick}>I&apos;M READY</Button>
                    ) : <b id="ready-message">Loading...</b>}
                </Row>
            </Container>
        </div>);
}

const mapStateToProps = state => ({
    username: state.user.username,
    players: state.user.players
});

const mapDispatchToProps = {
    emit,
};

WaitingPage.propTypes = {
    username: PropTypes.string,
    players: PropTypes.object,
    emit: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(WaitingPage);
