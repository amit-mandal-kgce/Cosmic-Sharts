import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from './feature/cardSlice'

export const store = () => ({
    reducer: {
        // cartReducer,
    },
    devTools: process.env.NODE_ENV !=="production",
});

export type RootState = ReturnType<typeof store.getState>;
export type Appdispath = typeof store.dispatch;