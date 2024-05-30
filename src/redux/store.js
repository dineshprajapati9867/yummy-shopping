import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";
import CategorySlice, { setCategory } from "./slices/CategorySlice";
import SearchSlice from "./slices/SearchSlice";
import AuthSlice from "./slices/AuthSlice";
export const   store=configureStore({
    reducer:{
        cart:CartSlice,
        category:CategorySlice,
        search:SearchSlice,
        auth:AuthSlice
    }
})