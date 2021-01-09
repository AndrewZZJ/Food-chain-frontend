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
            spectaculars: action.message.spectaculars,
            players: action.message.players,
        };
    default:
        return state;
    }
};
