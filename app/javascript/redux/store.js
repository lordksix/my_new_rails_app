import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

const selectGreetings = (store) => store.greeting;

export { selectGreetings };

export default store;
