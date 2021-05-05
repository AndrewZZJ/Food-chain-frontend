const initialState = {
    players: {},
    spectaculars: [],
    isPlaying: false,
    turn: 0,
    phase: "Setting up",
    money: 200, 
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
