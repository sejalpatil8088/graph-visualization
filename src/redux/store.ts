import { configureStore } from "@reduxjs/toolkit";
import graphReducer from "./graphSlice";
import historyReducer from "./historySlice";

const store = configureStore({
  reducer: {
    graph: graphReducer,
    history: historyReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;