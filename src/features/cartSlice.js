import { createSlice} from "@reduxjs/toolkit";

export const carts = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addtoCart: (state, action) => {
      const avail = state.find((item) => item.id === action.payload.id);
      if (avail) {
        avail.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: ()=>{
      return [];
    },

    increaseValue: (state, action) => {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    decreaseValue: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        if (state[index].quantity > 1) {
          state[index].quantity -= 1;
        } else {
          state.splice(index, 1);
        }
      }
    },
  },
});

export const { addtoCart, increaseValue, decreaseValue, removeFromCart } = carts.actions;
export default carts.reducer;
