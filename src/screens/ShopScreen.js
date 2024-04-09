import React from "react";
import { Box, VStack } from "@gluestack-ui/themed"
import LightstickList from "../components/LightstickList";
import LightstickData from "../json/lightsticks.json";
import PhoneList from "../components/PhoneList";
import PhoneData from "../json/phones.json";


const ShopScreen = () => {
    return (
        <VStack>
            <Box>
                <LightstickList list={LightstickData.data} />
            </Box>
            <Box>
                <PhoneList list={PhoneData.data} />
            </Box>
        </VStack>
    );
};

export default ShopScreen;
