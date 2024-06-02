import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItems: (state, action) => {

            //In Vanilla Redux(older redux) => Don't mutate the state retuning is mandatory
            //const newState = [...state]
            //newState.items.push(action.payload);
            //return newState

            //Redux Tool Kit
            //we have to mutate the state here returning is not mandatory redux is doing older thing but we do not have to do all the above things uses immer.js behind the scene
            state.items.push(action.payload);
            //OR
            // return {items: []};

        },
        removeItems: (state, action) => {
            state.items.pop();

        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },

    },

})

export const { addItems, removeItems, clearCart } = cartSlice.actions;

export default cartSlice.reducer;