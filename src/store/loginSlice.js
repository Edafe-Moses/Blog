import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    name:"login",
    initialState: false,
    reducers: {
        show: (state) => !state
    }
})

export const loginAction = loginSlice.actions
export default loginSlice