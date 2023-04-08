import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllCategories, getAllProducts, getAllSubcategories } from "../services/adminApi";
import { HYDRATE } from "next-redux-wrapper";
import { REHYDRATE } from "redux-persist";

// Initial state
const initialState = {
    allcategory: [],
    allsubcategory: [],
    allproducts: []
};

export const fetchAllCategory = createAsyncThunk(
    'category/all',
    async () => {
        console.log('Fetching all categories')
        const response = await getAllCategories();
        console.log("categories: " + response)
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

export const fetchAllProducts = createAsyncThunk(
    'products/all',
    async () => {
        console.log('Fetching all products...')
        const response = await getAllProducts();
        console.log("products: " + response)
        return response.data
    }
)

// Actual Slice
export const slice = createSlice({
    name: "category",
    initialState,
    reducers: {
        // // Action to set the authentication status
        setAllCategory(state, action) {
            console.log("setAllCategory called")
            state.allcategory = action.payload;
        },
        setAllSubcategory(state, action) {
            state.allsubcategory = action.payload;
        },
        setAllProducts(state, action) {
            console.log("setAllCategory called")
            state.allproducts = action.payload;
        },
    },
    // Special reducer for hydrating the state. Special case for next-redux-wrapper
    extraReducers: (builder) => {
        // builder.addCase(HYDRATE, (state, action) => {
        //     return state;
        //     return {
        //         ...state,
        //         ...action.payload.category,
        //     };
        // },)
        // builder.addCase(REHYDRATE, (state, action) => {
        //     return state;
        //     if (action.payload.category.allproducts.length != 0)
        //         return {
        //             ...state,
        //             ...action.payload.category,
        //         };
        // },)
        builder.addCase(fetchAllCategory.fulfilled, (state, action) => {
            // Add user to the state array
            console.log("setAllCategory called")
            // state.allcategory = action.payload.data;
            // state.allcategory = [];
            return {
                ...state,
                allcategory: action.payload.data
            };
        });
        builder.addCase(fetchAllSubCategory.fulfilled, (state, action) => {
            // state.allsubcategory = action.payload.data;
            return {
                ...state,
                allsubcategory: action.payload.data
                // ...action.payload.auth,
            };
        });
        builder.addCase(fetchAllProducts.fulfilled, (state, action) => {
            // Add user to the state array
            console.log("setAllProducts called", state.allproducts, action.payload.data?.length)
            return {
                ...state,
                allproducts: action.payload.data
            };
        });
        builder.addDefaultCase((state, action) => {
            if (action.payload?.category?.allproducts.length != 0) {
                return {
                    ...state,
                    allproducts: action.payload?.category?.allproducts || []
                }
            }
            if (action.payload?.category?.allcategory.length != 0) {
                return {
                    ...state,
                    allcategory: action.payload?.category?.allcategory || []
                }
            }
            return state;
        })

    },
});

export const { setAllCategory, setAllSubcategory, setAllProducts } = slice.actions;

export const selectAllCategory = (state) => state.category.allcategory;
export const selectAllProducts = (state) => state.category.allproducts;

export default slice;