import React from "react";
import { Box, HStack, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";

const PhoneDetail = ({ product }) => {

    return (
        <Box borderRadius={20} marginX={5} margintop={10} p={5}>
            <HStack >

                <Image
                    width={200}
                    height={200}
                    source={{ uri: product.image }}
                    alt="itemname"
                />
            </HStack>
            <VStack justifyContent="space-around" flexDirection="column" paddingLeft={12}>
                <Text bold>{product.itemname}</Text>
                <Text >{product.artist}</Text>
            </VStack>

        </Box>
    )
};

export default PhoneDetail;
