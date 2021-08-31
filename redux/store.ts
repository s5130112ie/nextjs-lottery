import { combineReducers, configureStore } from "@reduxjs/toolkit";
import lotterySlice from "./lotterySlice";

const reducers = combineReducers({
    lotto: lotterySlice
});

export const store = configureStore({
    reducer: reducers
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
