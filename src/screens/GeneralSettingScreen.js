import React, { useState } from 'react';
import { GluestackUIProvider, Center, HStack, Switch, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useDispatch, useSelector } from 'react-redux';
import { selectColorMode } from "/Users/hsiehdaniely/app_concert_go/src/redux/colorSlice.js";
import { setColorMode } from "/Users/hsiehdaniely/app_concert_go/src/redux/colorSlice.js";


const GeneralSettingScreen = () => {
    
    const colorMode = useSelector(selectColorMode);
    const dispatch = useDispatch();
    
    return (
        <GluestackUIProvider config={config}>
            <Center flex={1} bg={colorMode == "light" ? "white" : "black"}>
                <HStack mt={20} space={8} alignItems="center">
                    <Text size="lg" px="$2" color={colorMode == "dark" ? "white" : "black"}>
                        {colorMode == "light" ? "Light Mode" : "Dark Mode"}
                    </Text>
                    <Switch
                        name="light Mode"
                        value={colorMode === "light"}
                        onToggle={() => dispatch(setColorMode())}
                        accessibilityLabel="display-mode"
                        accessibilityHint="light or dark mode"
                    />
                </HStack>
                
            </Center>
        </GluestackUIProvider>
    );
}

export default GeneralSettingScreen;