import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./feature/cartSlice";


export const store = configureStore(
    {
        reducer: {
            //& Add your reducers here
            cart: cartSlice.reducer

        }
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;