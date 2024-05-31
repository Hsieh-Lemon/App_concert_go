import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';
import themeReducer from './themeSlice';
import accountReducer from "./accountSlice";

// Part2: Combine Reducers and Create a Store
const store = configureStore({
   reducer: {
     color: colorReducer,
     theme: themeReducer, 
     account: accountReducer,

   },
   devTools: process.env.NODE_ENV !== 'production',
 });

//  export store to global
export default store;

