import React from "react";
import { Button, Col, Row, Container } from "react-bootstrap";

import NaviBar from "../components/NaviBar";
import "./WaitingPage.css";

function WaitingPage() {
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
                    <Button variant= "success" size = "lg">I&apos;M READY</Button>
                </Row>
            </Container>
        </div>);
}

export default WaitingPage;
