import React from "react";
import { connect } from "react-redux";
import { Button, Col, Row, Container } from "react-bootstrap";

import {emit} from "../reducers/socket";

import NaviBar from "../components/NaviBar";
import "./WaitingPage.css";

function WaitingPage(props) {
    return (
        <div id="waiting-page">
            <NaviBar />
            <img id="waiting-room-logo" src="/waiting_room.svg" />
            <Container id="wrapper">
                <Row id="player-wrapper">
                    {[1, 2, 3, 4, 5].map((player, index) => (
                        <Col key={index} className="player">
                            <img src={`/restaurant-${player}.svg`} />
                            <b className="player-name">AAA</b>
                            <b className="status">Ready</b>
                        </Col>
                    ))}
                </Row>
                <Row className="justify-content-md-center" id="confirm-button">
                    <Button variant= "success" size = "lg" onClick={props.prepared}>
                        I&apos;M READY
                    </Button>
                </Row>
            </Container>
        </div>);
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    prepared: () => {
        dispatch(emit("preparation", {prepared: true})); // FIXME:
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(WaitingPage);
