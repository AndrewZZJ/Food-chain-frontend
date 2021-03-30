import React from "react";
import { history } from "./store";
import { Route, Switch } from "react-router-dom";
import GamePage from "./pages/GamePage";
import WaitingPage from "./pages/WaitingPage";
import LoginPage from "./pages/LoginPage";
import { ConnectedRouter } from "connected-react-router";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

const redirectWaitingPage = (hasUser, isPlaying) => {
    if(!hasUser) {
        return <Redirect to="/"/>;
    } else if(isPlaying) {
        return <Redirect to="/game"/>;
    }
    return <WaitingPage />;
};

const RouterWithRedux = (props) => {
    return (
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path="/game">
                    {/*props.username ? <GamePage/> : <Redirect to="/"/>*/}
                    <GamePage/>
                </Route>
                <Route exact path="/waiting">
                    {redirectWaitingPage(Boolean(props.username), props.isPlaying)}
                </Route>
                <Route path="/">
                    {props.username ? <Redirect to="/waiting"/> : <LoginPage/>}
                </Route>
            </Switch>
        </ConnectedRouter>
    );
};

RouterWithRedux.propTypes = {
    username: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
    username: state.user.username,
    isPlaying: state.game.isPlaying,
});

export default connect(mapStateToProps)(RouterWithRedux);
