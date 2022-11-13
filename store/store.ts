import { configureStore } from "@reduxjs/toolkit";
import {categorySlice, slideSlice, subCategory,productSlice, productType, supImage, authSlice, cartSlice, userSlice} from './'

const store = configureStore({
    reducer:{
        category:categorySlice,
        slide:slideSlice,
        subcategory:subCategory,
        product:productSlice,
        productType:productType,
        supImage:supImage,
        auth:authSlice,
        cart:cartSlice,
        user:userSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store; 