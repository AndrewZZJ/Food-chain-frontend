import React from "react";
import { Row } from "react-bootstrap";

import NaviBar from "../components/NaviBar";
import "./GamePage.css";

import GameMap from "../components/GameMap";
import GameStat from "../components/GameStat";

function GamePage() {
    return (
        <div id="game-page">
            <NaviBar/>
            <Row id="game-page-row">
                <GameStat />
                <GameMap />
            </Row>
        </div>);
}

export default GamePage;
