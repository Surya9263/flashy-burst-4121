import { configureStore } from "@reduxjs/toolkit";
import {categorySlice} from './'

const store = configureStore({
    reducer:{
        category:categorySlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store; 