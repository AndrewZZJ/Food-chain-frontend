
function handleLaunch(dispatch, data){
    console.log(data);
}

function handlePlayerListUpdate(dispatch, data){
    console.log(data);
}

export default {
    launch: handleLaunch,
    player_list_update: handlePlayerListUpdate,
};