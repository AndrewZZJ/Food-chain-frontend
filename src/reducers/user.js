import {createSlice} from "@reduxjs/toolkit";
import {push} from "connected-react-router";

// eslint-disable-next-line no-undef
const API_HOST = process.env.API_HOST;

const initialState = {
    username: null,
    players: {},
    token: null, // TODO: save token to cookie
};
  
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginSuccess(state, action){
            state.username = action.payload.username;
            state.token = action.payload.token;
        },
        loginError(state){
            state.token = false;
        },
        updatePlayers(state, action){
            state.players = action.payload;
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
            if(typeof data.token !== "undefined"){
                dispatch(userSlice.actions.loginSuccess({
                    username: user.username,
                    token: data.token,
                }));
                dispatch(push("/waiting"));
            }else{
                dispatch(userSlice.actions.loginError());
            }
        });
};
export const {updatePlayers} = userSlice.actions;
export default userSlice.reducer;