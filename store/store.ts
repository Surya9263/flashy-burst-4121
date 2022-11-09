import { configureStore } from "@reduxjs/toolkit";
import {categorySlice, slideSlice, subCategory} from './'

const store = configureStore({
    reducer:{
        category:categorySlice,
        slide:slideSlice,
        subcategory:subCategory,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store; 