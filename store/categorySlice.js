import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories, getAllSubcategories } from "../services/adminApi";

// Initial state
const initialState = {
    allcategory: [],
    allsubcategory: [],
};

export const fetchAllCategory = createAsyncThunk(
    'category/all',
    async () => {
        console.log('Fetching all categories')
        const response = await getAllCategories();
        return response.data
    }
)


export const fetchAllSubCategory = createAsyncThunk(
    'subcategory/all',
    async () => {
        console.log('Fetching all subcategories')
        const response = await getAllSubcategories();
        return response.data
    }
)

// Actual Slice
export const slice = createSlice({
    name: "category",
    initialState,
    reducers: {
        // Action to set the authentication status
        setAllCategory(state, action) {
            state.allcategory = action.payload;
        },
        setAllSubcategory(state, action) {
            state.allsubcategory = action.payload;
        },
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: (builder) => {
        builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
            // Add user to the state array
            state.allcategory = action.payload.data;
        });
        builder.addCase(fetchAllSubCategory.fulfilled, (state, action) => {
            // Add user to the state array
            state.allsubcategory = action.payload.data;
        });
    },
});

export const { setAllCategory, setAllSubcategory } = slice.actions;

export const selectAllCategory = (state) => state.category.allcategory;

export default slice;