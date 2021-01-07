import {updatePlayers} from "../reducers/user";
import {push} from "connected-react-router";

function handleLaunch(dispatch, data){
    dispatch(updatePlayers(data.players));
    dispatch(push("/game"));
}

function handlePlayerListUpdate(dispatch, data){
    dispatch(updatePlayers(data.players));
}

export default {
    launch: handleLaunch,
    player_list_update: handlePlayerListUpdate,
};