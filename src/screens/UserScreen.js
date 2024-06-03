import React, { useState } from 'react';
import { GluestackUIProvider, Center, HStack, Box, Text, Pressable, ScrollView, Image } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectColorMode } from '../redux/colorSlice';
import { selectLikes } from '../redux/likeSlice';


const UserScreen = ({ destination }) => {


    const { navigate } = useNavigation();
    const colorMode = useSelector(selectColorMode);
    const backgroundColor = colorMode === 'light' ? 'white' : 'black';
    const cart = useSelector(state => state.cart.items);
    const likes = useSelector(selectLikes);

    return (
        <Box bg={backgroundColor} flex={1}>
            <Center>

                <Box
                    width={320}
                    height={280}
                    borderRadius={15}
                    bg='#F8CE58'
                    mt='$3'
                    p='$2'
                >
                    <Text textAlign="center" color='#fff' size='2xl'>
                        Cart List
                    </Text>
                    <ScrollView>
                    {Array.isArray(cart) && cart.map((item, index) => (
                            <Box key={index} mt="$2">

                                <Box width={300} height={2} bg='white' />
                                <HStack space="lg" m='$4'>

                                    <Image
                                        style={{ width: 80, height: 80 }}
                                        source={{ uri: item.image }}
                                        alt='image'

                                    />

                                    <Box margin={5}>
                                        <Text color='#fff' fontSize={18}>{item.itemname}</Text>

                                        <Text color='#fff' marginTop={10}>{item.counter}  Day(s)</Text>
                                    </Box>

                                </HStack>


                            </Box>
                        ))}
                    </ScrollView>
                </Box>
                <Box
                    width={320}
                    height={280}
                    borderRadius={15}
                    bg='#F197DF'
                    my='$3'
                    p='$2'
                >
                    <Text textAlign="center" color='#fff' size='2xl'>
                        Like List
                    </Text>
                    <ScrollView>
                    {Array.isArray(likes) && likes.map((like, index) => (
                            <Box key={index} mt="$2">
                                <Box width={300} height={2} bg='white' />

                                <HStack space="lg" m='$4'>
                                    <Image
                                        style={{ width: 80, height: 80 }}
                                        source={{ uri: like.image }}
                                        alt='liked image'
                                    />
                                    <Center margin={5}>
                                        <Text color='#fff' fontSize={18}>{like.itemname}</Text>
                                    </Center>
                                </HStack>
                            </Box>
                        ))}
                    </ScrollView>
                </Box>

                <Pressable

                    onPress={() => navigate('Setting', destination)}

                    borderRadius={15}
                    width={320}
                    height={70}
                    backgroundColor='#93A5E5'
                    justifyContent='center'
                >
                    <Text textAlign="center" color='#fff' size='2xl'>Setting</Text>
                </Pressable>

            </Center>
        </Box>
    );
}

export default UserScreen;