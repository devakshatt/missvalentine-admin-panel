import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";

import { createWrapper, HYDRATE } from 'next-redux-wrapper';



const combinedReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    [categorySlice.name]: categorySlice.reducer,
});

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
        devTools: true,
    });
}


export const wrapper = createWrapper(makeStore);