
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 0,
  },

  reducers: {
    increment(state) {
      state.value++;
    },

    decrement(state) {
      state.value--;
    },

    increaseBy10(state) {
      state.value += 10;
    },

    toggleCounter(state) {
      state.value = -state.value;
    },
  },
});

export const {
  increment,
  decrement,
  increaseBy10,
  toggleCounter,
} = counterSlice.actions;

export default counterSlice.reducer;