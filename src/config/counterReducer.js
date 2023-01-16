import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:0,
    reducers:{
        incr: state => state+1,
        decr:state => state-1,
        reset: state => 0
    }
})

export const {incr,decr,reset} = counterSlice.actions;
export default counterSlice.reducer;