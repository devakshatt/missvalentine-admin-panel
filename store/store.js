import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";

import { createWrapper } from "next-redux-wrapper";

const makeStore = () =>
    configureStore({
        reducer: {
            [authSlice.name]: authSlice.reducer,
            [categorySlice.name]: categorySlice.reducer,
        },
        devTools: true,
    });

export const wrapper = createWrapper(makeStore);