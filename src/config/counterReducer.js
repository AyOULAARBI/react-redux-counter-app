import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState:0,
    reducers:{
        incr: state => state+1,
        decr:state => state-1
    }
})

export const {actions} = counterSlice;
export default counterSlice.reducer;