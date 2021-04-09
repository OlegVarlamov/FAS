import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import apiClient from "helpers/apiClient";
import { OrderState, OrderDetails } from "./models";

const INITIAL_STATE: OrderState = {
  isLoading: false,
};

export const getOrder = createAsyncThunk(
  "order/get",
  async (id: number, thunkAPI) => {
    try {
      const source = axios.CancelToken.source();
      thunkAPI.signal.addEventListener("abort", () => {
        source.cancel();
      });
      const response: AxiosResponse = await apiClient.get<OrderDetails>(
        `/orders/${id}`,
        {
          cancelToken: source.token,
        }
      );
      return response.data;
    } catch (err) {
      if (!err.response) {
        // eslint-disable-next-line no-console
        console.error("Error: Network Error. Checvk VPN!");
        return { message: "Error: Network Error" };
      }
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

/* eslint-disable no-param-reassign */
const orderSlice = createSlice({
  name: "order",
  initialState: INITIAL_STATE,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload.data;
        state.isLoading = false;
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.error = action.error;
        state.isLoading = false;
      });
  },
});
/* eslint-disable no-param-reassign */
export default orderSlice.reducer;
