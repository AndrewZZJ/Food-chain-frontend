import {updatePlayers} from "../reducers/user";

function handleLaunch(dispatch, data){
    console.log(data); // TODO:
}

function handlePlayerListUpdate(dispatch, data){
    dispatch(updatePlayers(data.players));
}

export default {
    launch: handleLaunch,
    player_list_update: handlePlayerListUpdate,
};