import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    message: null,
};
  
const socketSlice = createSlice({
    name: "socket",
    initialState,
    reducers: {
        emit(state, action){
            state.message = action.payload;
        }
    }
});

export const emit = (event, data) => {
    return socketSlice.actions.emit({event, data});
};
export default socketSlice.reducer;