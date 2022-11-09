import { configureStore } from "@reduxjs/toolkit";
import {categorySlice, slideSlice} from './'

const store = configureStore({
    reducer:{
        category:categorySlice,
        slide:slideSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store; 