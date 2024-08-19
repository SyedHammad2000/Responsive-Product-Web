import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface Products {
    name: string,
    price: number,
    quantity: number,
    img: string,
    id: number,
}

const initialState: Array<Products> = []

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addtoCart: (state, action: PayloadAction<Products>) => {
            if (state.findIndex((item) => item.id === action.payload.id) === -1) {
                state.push(action.payload)
            } else {
                state.map((prd) => {
                    return prd.id === action.payload.id ? { ...prd, quantity: prd.quantity + 1 } : prd

                })
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            const id = action.payload;

            return state.filter((prd) => prd.id !== id)
        }

    }

})

export const { addtoCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer