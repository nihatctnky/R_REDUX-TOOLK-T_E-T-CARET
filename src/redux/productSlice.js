import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
    products: [],
    productsStatus: STATUS.IDLE,
    productDetail: [],
    productDetailStatus: STATUS.IDLE
};

// getProducts için farklı bir action tipi tanımlayın
export const getProducts = createAsyncThunk("getproducts", async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
});


export const getCategoryProduct = createAsyncThunk("getcategory", async (category) => {
    const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
    const data = await response.json();
    return data;
});





// getDetailProduct için farklı bir action tipi tanımlayın
export const getDetailProduct = createAsyncThunk("getproduct", async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
});

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

            .addCase(getProducts.pending, (state) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getProducts.rejected, (state) => {
                state.productsStatus = STATUS.FAIL;
            })

            // getDetailProduct için pending, fulfilled, rejected durumları
            .addCase(getDetailProduct.pending, (state) => {
                state.productDetailStatus = STATUS.LOADING;
            })
            .addCase(getDetailProduct.fulfilled, (state, action) => {
                state.productDetailStatus = STATUS.SUCCESS;
                state.productDetail = action.payload;
            })
            .addCase(getDetailProduct.rejected, (state) => {
                state.productDetailStatus = STATUS.FAIL;
            })


            .addCase(getCategoryProduct.pending, (state) => {
                state.productsStatus = STATUS.LOADING;
            })
            .addCase(getCategoryProduct.fulfilled, (state, action) => {
                state.productsStatus = STATUS.SUCCESS;
                state.products = action.payload;
            })
            .addCase(getCategoryProduct.rejected, (state) => {
                state.productsStatus = STATUS.FAIL;
            })
    }
});

export default productSlice.reducer;
