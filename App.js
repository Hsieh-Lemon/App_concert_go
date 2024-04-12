import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { useDispatch, useSelector, Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";


const App = () => {
  return (
    <SafeAreaProvider>
      
        <GluestackUIProvider config={config}>
          <Navigation />   
        </GluestackUIProvider>         
      
    </SafeAreaProvider>
  );
};

export default App;
