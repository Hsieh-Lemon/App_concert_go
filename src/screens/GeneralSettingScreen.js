import React, { useState } from 'react';
import { Appearance, useColorScheme } from "react-native";
import { selectColorMode ,setColorMode} from '../redux/colorSlice';

import { Box, Center, HStack, Switch, Text } from "@gluestack-ui/themed";
import { useDispatch, useSelector } from 'react-redux';

const GeneralSettingScreen = () => {
    const colorScheme = useColorScheme();
    const colorMode = useSelector(selectColorMode);
    const dispatch = useDispatch();

    return (
        <Box mt="$1" bg={colorScheme == "light" ? "white" : "black"} height="100%">
            <Center
                shadow={2}
                width="90%"
                mt="$2"
                px="$2"
                py="$4"
                bg={colorScheme == "light" ? "white" : "black"}
                borderRadius={3}
                alignSelf="center"
            >
                <HStack space={8} alignItems="center">
                    <Text fontSize={28} px="$2">
                        {colorScheme == "light" ? "Light Mode" : "Dark Mode"}
                    </Text>
                    <Switch
                        name="light Mode"
                        size="md"
                        accessibilityLabel="display-mode"
                        accessibilityHint="light or dark mode"
                        $active-bg="#000"
                        value={colorMode === 'dark'}
                        onValueChange={() => {
                            const nextColorMode =
                                colorMode === "light" ? "dark" : "light";
                            dispatch(setColorMode(nextColorMode));
                            Appearance.setColorScheme(nextColorMode);
                        }}
                    />
                </HStack>
            </Center>
        </Box>
    );
}

export default GeneralSettingScreen;
