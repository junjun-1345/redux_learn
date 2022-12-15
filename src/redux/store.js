import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

//すべてのファイルからアクセスできるようにする。

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
