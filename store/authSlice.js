import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
    authStatus: false,
    token: null,
    user: null
};

// Actual Slice
export const slice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Action to set the authentication status
        setLoginTrue(state, action) {
            state.authStatus = true;
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setAuth(state, action) {
            state = action.payload;
        },
        setUser(state, action) {
            state.user = action.payload;
        },
        setAuthStatus(state, action) {
            state.authStatus = action.payload;
        },
    },
});

export const { setAuthState, setLoginTrue, setAuth, setUser } = slice.actions;

export const selectAuth = (state) => state.auth;
export const selectAuthStatus = (state) => state.auth.authStatus;

export default slice;