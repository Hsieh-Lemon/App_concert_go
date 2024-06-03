import { configureStore } from '@reduxjs/toolkit';
import colorReducer from './colorSlice';
import themeReducer from './themeSlice';
import accountReducer from "./accountSlice";
import cartReducer from './cartSlice.js';
import likeReducer from './likeSlice.js';

import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};


export const store = configureStore({
  reducer: {
    color: colorReducer,
    theme: themeReducer, 
    account: persistReducer(persistConfig, accountReducer),
    cart:persistReducer(persistConfig,cartReducer),
    likes:persistReducer(persistConfig,likeReducer)
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  });

  export const persistor = persistStore(store);
