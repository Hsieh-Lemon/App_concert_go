import React from "react";
import { useColorScheme } from "react-native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/navigation";
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from "./src/redux/store";


const queryClient = new QueryClient();
const App = () => {

  const colorScheme = useColorScheme();
  const defaultColorMode = colorScheme === 'light' ? 'light' : 'dark'; // 默认根据设备的颜色模式设置主题

  return (

    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <GluestackUIProvider config={config} colorMode={defaultColorMode}>
              <Navigation />
            </GluestackUIProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
};

export default App;
