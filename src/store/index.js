import { configureStore } from "@reduxjs/toolkit"
import loveSlice from "./mainSectionSlice"
import loginSlice from "./loginSlice"
const store = configureStore({
    reducer: {
        mainSection: loveSlice.reducer,
        loginModal: loginSlice.reducer
    }
})

export default store