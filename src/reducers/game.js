const initialState = {
    players: {},
    spectaculars: [],
    isPlaying: false,
};

export default (state = initialState, action) => {
    switch(action.type) {
    case "socket/update/launch":
        return {
            ...state,
            isPlaying: true,
            spectaculars: action.payload.spectaculars,
            players: action.payload.players,
        };
    case "socket/update/player_list_update":
        return {
            ...state,
            spectaculars: action.payload.spectaculars,
            players: action.payload.players,
        };
    default:
        return state;
    }
};
