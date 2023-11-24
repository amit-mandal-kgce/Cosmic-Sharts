import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IProduct {
    id: number,
    headings: string,
    imgs: string,
    priceDelet: number,
    offer: number,
}

const initialState: Array<IProduct> = [];
export const cartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if(state.findIndex((pro)=> pro.id === action.payload.id)=== -1){
                state.push(action.payload)
            }else{
                return state.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1}: item)
            }
        }
    }
})

export const {} = cartSlice.actions;
export default cartSlice.reducer;