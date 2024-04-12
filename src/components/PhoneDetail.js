import React from "react";
import { Box, HStack, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const PhoneDetail = ({ product }) => {
    const { navigate } = useNavigation();
    return (
        <Box mx="auto">
            <Box mb="$20">
                <Pressable
                    onPress={() => navigate('Detail', product)}
                >
                    <Image
                        width={200}
                        height={200}
                        borderRadius={20}
                        source={{ uri: product.image }}
                        alt="itemname"
                    />
                </Pressable>
            </Box>
            <Box >
                <VStack space="lg">
                    <Text bold>{product.itemname}</Text>
                    <Text >{product.artist}</Text>
                </VStack>
            </Box>

        </Box>
    )

};

export default PhoneDetail;
