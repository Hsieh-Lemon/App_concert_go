import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';

// Part2: Combine Reducers and Create a Store
const store = configureStore({
   reducer: {
     color: colorReducer
   },
   devTools: process.env.NODE_ENV !== 'production',
 });

//  export store to global
export default store;
