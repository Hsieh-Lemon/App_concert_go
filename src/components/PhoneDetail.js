import React from "react";
import { Box, HStack, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const PhoneDetail = ({ product }) => {
    const { navigate } = useNavigation();
    return (

        <VStack mx="$3" my="$3">
            <Pressable onPress={() => navigate('Detail', product)}>
                <Image
                    width={200}
                    height={200}
                    borderRadius={20}
                    source={{ uri: product.image }}
                    alt="itemname"
                />
            </Pressable>
            <VStack space="md" alignItems="flex-start">
                <Text bold>{product.itemname}</Text>
                <Text>{product.brand}</Text>
            </VStack>
        </VStack>

    )
};

export default PhoneDetail;

