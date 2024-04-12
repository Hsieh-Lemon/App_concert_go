import React, { useState } from 'react';
import { GluestackUIProvider, Center, HStack, Switch, Text } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";

const GeneralSettingScreen = () => {
    const [colorMode, setColorMode] = useState("light");
    const toggleColorMode = () => {
        if (colorMode == "light") setColorMode("dark");
        else setColorMode("light");
    };
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
                        onToggle={toggleColorMode}
                        accessibilityLabel="display-mode"
                        accessibilityHint="light or dark mode"
                    />
                </HStack>
                
            </Center>
        </GluestackUIProvider>
    );
}

export default GeneralSettingScreen;