import React, { useState } from "react";
import { StyleSheet } from 'react-native';
import { Box, HStack, VStack, Text, Image, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import LottieView from 'lottie-react-native';

const PhoneDetail = ({ product }) => {
    const { navigate } = useNavigation();
    const [loading, setLoading] = useState(true);

    return (

        <VStack mx="$3" my="$3">
            <Pressable onPress={() => navigate('Detail', product)}>
                {loading && (
                    <LottieView
                        source={require('/Users/hsiehdaniely/app_concert_go/src/json/loading.json')}
                        autoPlay
                        loop
                        style={styles.spinner}
                    />)}
                <Image
                    width={200}
                    height={200}
                    borderRadius={20}
                    source={{ uri: product.image }}
                    alt="itemname"
                    onLoadStart={() => setLoading(true)}
                    onLoadEnd={() => setLoading(false)}
                />
            </Pressable>
            <VStack space="md" alignItems="flex-start">
                <Text bold>{product.itemname}</Text>
                <Text>{product.brand}</Text>
            </VStack>
        </VStack>

    )
};
const styles = StyleSheet.create({

    spinner: {
        position: 'absolute',
        zIndex: 1,
        width: 50,
        height: 50,
    },
});
export default PhoneDetail;

