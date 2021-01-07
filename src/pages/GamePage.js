import React from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router";

import NaviBar from "../components/NaviBar";
import "./GamePage.css";

function GamePage(props) {
    if(!props.username){
        return <Redirect to="/" />;
    }
    return (
        <div id="game-page">
            <NaviBar />
        </div>);
}

const mapStateToProps = state => ({
    username: state.user.username,
});

export default connect(mapStateToProps, null)(GamePage);
