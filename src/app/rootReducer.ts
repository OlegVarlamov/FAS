import { combineReducers } from "@reduxjs/toolkit";

import orderReducer from "features/receiveStatus/receiveStatusSlice";

const rootReducer = combineReducers({
  order: orderReducer,
});

export default rootReducer;
