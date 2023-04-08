import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import categorySlice from "./categorySlice";
import { FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import thunkMiddleware from 'redux-thunk';

import { createWrapper, HYDRATE } from 'next-redux-wrapper';

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
    [categorySlice.name]: categorySlice.reducer,
});

const makeConfiguredStore = () =>
    configureStore({
        reducer: rootReducer,
        devTools: true,
    });

export const makeStore = () => {
    const isServer = typeof window === "undefined";
    if (isServer) {
        return makeConfiguredStore();
    } else {
        // we need it only on client side
        const persistConfig = {
            key: "nextjs",
            whitelist: ["category"], // make sure it does not clash with server keys
            storage,
        };
        const persistedReducer = persistReducer(persistConfig, rootReducer);
        let store = configureStore({
            reducer: persistedReducer,
            middleware: (getDefaultMiddleware) => getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                }
            }),
            // middleware: (defaultMod),
            devTools: true,
        });
        store.__persistor = persistStore(store); // Nasty hack
        return store;
    }
};

export const wrapper = createWrapper(makeStore);