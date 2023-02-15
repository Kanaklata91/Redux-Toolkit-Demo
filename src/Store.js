import { createSlice, configureStore } from '@reduxjs/toolkit';

const InitialValue = { counter: 0 };

const CounterSlice = createSlice({
  name: 'Counter',
  initialState: InitialValue,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
    incrementByPayload(state, payloadVal) {
      state.counter = state.counter + payloadVal.payload;
    },
  },
});

const Store = configureStore({
  reducer: CounterSlice.reducer,
});
export const CounterActions = CounterSlice.actions;

export default Store;
