import React, { useState } from 'react';
import { Center, useToast, Toast,ToastTitle,ToastDescription, Box, Text, Heading, Image, Button, ButtonText, HStack,VStack, Pressable } from "@gluestack-ui/themed";
import { Badge } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';

const DetailScreen = ({ route }) => {
    const { itemname,
        image,
        img
    } = route.params;
    const toast = useToast()
    const [counter, setCounter] = useState(1);
    const [colorMode, setColorMode] = useState("unpress");
    const toggleColorMode = () => {
        if (colorMode == "unpress") setColorMode("press");
        else setColorMode("unpress");
    };
    return (
        <Box bg="#fff" h="100%">
            <Center>
                <Center>
                    <Image
                        style={{ width: 325, height: 325, borderRadius: 20 }}
                        source={{ uri: image }}
                        alt='image'
                    />
                </Center>
                <Box pt="$5">
                    <Center>
                        <HStack space="lg">
                            <Pressable borderWidth="$1" borderRadius={10} borderColor='$rose500'>
                                <Image
                                    style={{ width: 70, height: 70, borderRadius: 10 }}
                                    source={{ uri: image }}
                                    alt='image'
                                />
                            </Pressable>
                            <Pressable>
                                <Image
                                    style={{ width: 70, height: 70, borderRadius: 10 }}
                                    source={{ uri: img }}
                                    alt='img'
                                />
                            </Pressable>
                        </HStack>
                    </Center>
                </Box>
                <Box p="$2" w="80%">
                    <HStack justifyContent='space-between'>
                        <Heading size='2xl'>{itemname}</Heading>
                        <Pressable onPress={toggleColorMode}>
                            <AntDesign color={colorMode=="unpress"?"#B4B4B4":"red"} name="heart" size={30} pt="$2" />
                        </Pressable>
                    </HStack>
                    <HStack justifyContent='space-between' my='$6'>
                        <Pressable onPress={() => {setCounter(counter - 1)}}>
                            
                            <Badge
                                style={{ backgroundColor: '#D9D9D9',}}
                                size={40}
                                pl='$5'
                            >-</Badge>
                        </Pressable>
                        <Badge
                            style={{ backgroundColor: '#D9D9D9' }}
                            size={40}
                        >{counter}</Badge>
                        <Pressable onPress={() => setCounter(counter + 1)}>
                            <Badge
                                style={{ backgroundColor: '#D9D9D9' }}
                                size={40}
                            >+</Badge>
                        </Pressable>
                        <Text pt='$1' pr='$5' size='2xl'>Days</Text>
                    </HStack>
                    <Button
                        mt="4"
                        bg='#459E94'
                        height={70}
                        $active-bg="$success700"
                        onPress={() => {
                            toast.show({
                              placement: "top",
                              render: ({ id }) => {
                                const toastId = "toast-" + id
                                return (
                                  <Toast nativeID={toastId} action="success" variant="accent">
                                    <VStack space="xs">
                                      <ToastTitle>Sucessful</ToastTitle>
                                      <ToastDescription>
                                        Your order has been add in cart
                                      </ToastDescription>
                                    </VStack>
                                  </Toast>
                                )
                              },
                            })
                          }}
                    >
                        <ButtonText size='3xl'>
                            Check Now
                        </ButtonText>
                    </Button>
                </Box>
            </Center>
        </Box>
    );
}

export default DetailScreen;
