import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import {
  CIproduct,
  IproRem,
  initialState,
} from "../../interface/client/product.interface";

export const addProduct = createAsyncThunk(
  "product/add",
  async (productdata: object, thunkapi) => {
    try {
      const res: AxiosResponse<CIproduct> = await axios.post("/api/product", 
        productdata
      );

      return res.data;
    } catch (e: any) {
      return thunkapi.rejectWithValue(e.message);
    }
  }
);

export const getAllProduct = createAsyncThunk(
  "product/getall",
  async (productdata: object, thunkapi) => {
    console.log("inside getFunc");
    try {
      const res: AxiosResponse<Array<CIproduct>> = await axios.get(
        "/api/product"
      );
      console.log(res.data);

      return res.data;
    } catch (e: any) {
      return thunkapi.rejectWithValue(e.message);
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/delete",
  async (id: string, thunkapi) => {
    try {
      const res: AxiosResponse<IproRem> = await axios.delete(
        `/api/product/${id}`
      );
      return res.data;
    } catch (e: any) {
      return thunkapi.rejectWithValue(e.message);
    }
  }
);

const initialState: initialState = {
  isErro: false,
  isLoading: false,
  errorMsg: "",
  products: [],
};

const productSlice = createSlice({
  name: "productslice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addProduct.pending, (state, action) => {
        state.isErro = false;
        state.isLoading = true;
        state.errorMsg = "";
      })
      .addCase(addProduct.rejected, (state, action: PayloadAction<any>) => {
        state.isErro = true;
        state.isLoading = false;
        state.errorMsg = action.payload.errorMsg;
      })
      .addCase(
        addProduct.fulfilled,
        (state, action: PayloadAction<CIproduct>) => {
          state.isErro = false;
          state.isLoading = false;
          state.errorMsg = "";
          state.products = [...state.products, action.payload];
        }
      )
      .addCase(getAllProduct.pending, (state, action) => {
        state.isErro = false;
        state.isLoading = true;
        state.errorMsg = "";
      })
      .addCase(getAllProduct.rejected, (state, action: PayloadAction<any>) => {
        state.isErro = true;
        state.isLoading = false;
        state.errorMsg = action.payload;
      })
      .addCase(
        getAllProduct.fulfilled,
        (state, action: PayloadAction<Array<CIproduct>>) => {
          state.isErro = false;
          state.isLoading = false;
          state.errorMsg = "";
          state.products = action.payload;
        }
      )
      .addCase(deleteProduct.pending, (state, action) => {
        state.isErro = false;
        state.isLoading = true;
        state.errorMsg = "";
      })
      .addCase(deleteProduct.rejected, (state, action: PayloadAction<any>) => {
        state.isErro = true;
        state.isLoading = false;
        state.errorMsg = action.payload;
      })
      .addCase(
        deleteProduct.fulfilled,
        (state, action: PayloadAction<IproRem>) => {
          state.isErro = false;
          state.isLoading = false;
          state.errorMsg = "";
          state.products = state.products.filter((product) => {
            return product._id !== action.payload.id;
          });
        }
      );
  },
});

export default productSlice.reducer;
