import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    loadProductReducer: (state, action) => {
      state.productList = action.payload;
    },
    addProductReducer: (state, action) => {
      console.log(state);
      let products = state.productList;
      products.push(action?.payload);
      state.productList = products;
    },
    deleteProductReducer: (state, action) => {
      let products = state.productList.filter((x) => x?._id !== action.payload);
      state.productList = products;
    },
    updateProductReducer: (state, action) => {
      let products = state.productList.map((x) => {
        if (x?._id == action.payload.id) {
          return action.payload;
        }
        return x;
      });
      state.productList = products;
    },
  },
});

export const {
  loadProductReducer,
  addProductReducer,
  deleteProductReducer,
  updateProductReducer,
} = productSlice.actions;

export default productSlice.reducer;
