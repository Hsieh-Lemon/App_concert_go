import React from 'react';
import { View } from 'react-native';
import { Box, Text, Image, Center, ScrollView, Pressable } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const HomeItem = ({ product,items }) => {
       const { navigate } = useNavigation();
       return (
              <Center >
                     <Text fontSize={25} fontWeight={600} mb="$2">New Item</Text>
                     <Pressable onPress={() => navigate('Concert', items)}>
                            <Image width={325} height={200} borderRadius={15} marginBottom={30}
                                   source={{ uri: "https://github.com/Hsieh-Lemon/App_concert_go/blob/master/src/img/concert_svt.jpg?raw=true" }}
                            /></Pressable>
                     <Pressable onPress={() => navigate('Detail', product)}>
                            <Image width={325} height={200} borderRadius={15} marginBottom={30} 
                                   source={{ uri: "https://github.com/Hsieh-Lemon/App_concert_go/blob/master/src/img/phone_s23_2.jpg?raw=true" }}
                            /></Pressable>
                     <Pressable onPress={() => navigate('Detail', product)}>
                            <Image width={325} height={200} borderRadius={15} marginBottom={30} 
                                   source={{ uri: "https://github.com/Hsieh-Lemon/App_concert_go/blob/master/src/img/lightstick_njs.jpg?raw=true" }}
                            /></Pressable>
              </Center>
       );
}

export default HomeItem;