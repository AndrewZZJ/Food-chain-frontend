import {createSlice} from "@reduxjs/toolkit";

// eslint-disable-next-line no-undef
const API_HOST = process.env.API_HOST;

const initialState = {
    username: null,
    token: null, // TODO: save token to cookie
};
  
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginReply(state, action){
            state.username = action.payload.username;
            state.token = action.payload.token;
        }
    }
});

export const login = user => dispatch => {
    fetch(`${API_HOST}/login`,{
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
        .then(data => data.json())
        .then(data => {
            dispatch(userSlice.actions.loginReply({
                username: user.username,
                token: data.token,
            }));
        });
};

export default userSlice.reducer;