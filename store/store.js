import { configureStore, combineReducers } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const persistConfig = { timeout: 500, key: "root", storage };

// const persistConfig = {
//     key: 'root',
//     storage,
// }

const combinedReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    [categorySlice.name]: categorySlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, combinedReducer)

const reducer = (state, action) => {
    console.log("action", action.type)
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            // ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return persistedReducer(state, action);
    }
};

const makeStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    return configureStore({
        reducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
        // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
        devTools: true,
    });
}


export const wrapper = createWrapper(makeStore);