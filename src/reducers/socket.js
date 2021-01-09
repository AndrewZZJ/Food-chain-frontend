const initialState = {
    message: null,
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
    case "socket/emit":
        return {
            ...state,
            message: action.payload,
        };
    default:
        return state;
    }
};

export default reducer;

export const emit = (event, data) => ({
    type: "socket/emit",
    payload: {
        event,
        data,
    },
});

export const updateSocketEvent = (eventName, payload) => ({
    type: `socket/update/${eventName}`,
    payload,
});
