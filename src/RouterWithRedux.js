import React from "react";
import { history } from "./store";
import { Route, Switch } from "react-router-dom";
import GamePage from "./pages/GamePage";
import WaitingPage from "./pages/WaitingPage";
import LoginPage from "./pages/LoginPage";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";

const RouterWithRedux = () => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route path="/">
                    <LoginPage/>
                </Route>
                <Route exact path="/waiting">
                    <WaitingPage/>
                </Route>
                <Route exact path="/game">
                    <GamePage/>
                </Route>
            </Switch>
        </ConnectedRouter>
    );
};

const mapStateToProps = () => ({
});

export default connect(mapStateToProps)(RouterWithRedux);
