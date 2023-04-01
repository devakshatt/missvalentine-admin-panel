import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

// Initial state
const initialState = {
    allcategory: [],
};

// Actual Slice
export const slice = createSlice({
    name: "category",
    initialState,
    reducers: {
        // Action to set the authentication status
        setAllCategory(state, action) {
            state.allcategory = action.payload;
        },
    },

    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: {
        [HYDRATE]: (state, action) => {
            return {
                ...state,
                ...action.payload.category,
            };
        },
    },
});

export const { setAllCategory } = slice.actions;

export const selectAllCategory = (state) => state.category.allcategory;

export default slice;