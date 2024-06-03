import React, { useState } from 'react';
import { useColorScheme, StyleSheet, ActivityIndicator } from "react-native";
import { Center, Box, Text, Heading, Image, Button, ButtonText, HStack, VStack, Pressable } from "@gluestack-ui/themed";
import { Badge } from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LottieView from "lottie-react-native";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addLike, removeLike, selectLikes } from '../redux/likeSlice';

const DetailScreen = ({ route }) => {
    const { itemname,
        image,
        img,
        storage
    } = route.params;
    const colorScheme = useColorScheme();
    const [selectedImage, setSelectedImage] = useState(image);
    const [showAnimation, setShowAnimation] = useState(false);
    const dispatch = useDispatch();
    const [counter, setCounter] = useState(1);
    const [colorMode, setColorMode] = useState("unpress");
    const [itemStorage, setItemStorage] = useState(storage);
    const [loading, setLoading] = useState(true);
    const likes = useSelector(selectLikes);
    const isLiked = Array.isArray(likes) && likes.some(like => like.itemname === itemname);

    const handleLikeToggle = () => {
        if (isLiked) {
            dispatch(removeLike({ itemname }));
        } else {
            dispatch(addLike({ itemname, image: selectedImage }));
        }
    };
    const toggleColorMode = () => {
        if (colorMode == "unpress") setColorMode("press");
        else setColorMode("unpress");
    };
    const decreaseCounter = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };
    const increaseCounter = () => {
        if (counter < itemStorage) {
            setCounter(counter + 1);
        }
    };
    const handleCheckout = () => {
        setShowAnimation(true);
        dispatch(addToCart({ itemname, image: selectedImage, counter }));
    };

    const onAnimationFinish = () => {
        setShowAnimation(false);
    };

    return (
        <Box bg={colorScheme == "light" ? "white" : "black"} h="100%">
            <Center>
                <Center>
                    {loading && (
                        <LottieView
                            source={require('/Users/hsiehdaniely/app_concert_go/src/json/loading.json')}
                            autoPlay
                            loop
                            style={styles.spinner}
                        />)}
                    <Image
                        style={{ width: 325, height: 325, borderRadius: 20, marginTop: 20 }}
                        source={{ uri: selectedImage }}
                        alt='selected image'
                        onLoadStart={() => setLoading(true)}
                        onLoadEnd={() => setLoading(false)}
                    />
                </Center>
                <Box pt="$5">
                    <Center>
                        {img ? (
                            <HStack space="lg">
                                <Pressable
                                    onPress={() => setSelectedImage(image)}
                                    style={[
                                        styles.imageContainer,
                                        selectedImage === image && styles.selectedBorder,
                                    ]}
                                >
                                    <Image
                                        style={styles.thumbnail}
                                        source={{ uri: image }}
                                        alt='image'
                                        onLoadStart={() => setLoading(true)}
                                        onLoadEnd={() => setLoading(false)}
                                    />
                                </Pressable>
                                <Pressable
                                    onPress={() => setSelectedImage(img)}
                                    style={[
                                        styles.imageContainer,
                                        selectedImage === img && styles.selectedBorder,
                                    ]}
                                >
                                    <Image
                                        style={styles.thumbnail}
                                        source={{ uri: img }}
                                        alt='img'
                                        onLoadStart={() => setLoading(true)}
                                        onLoadEnd={() => setLoading(false)}
                                    />
                                </Pressable>
                            </HStack>
                        ) : (
                            <Pressable onPress={() => setSelectedImage(image)} style={styles.singleImageContainer}>
                                <Image
                                    style={styles.thumbnail}
                                    source={{ uri: image }}
                                    alt='image'
                                    onLoadStart={() => setLoading(true)}
                                    onLoadEnd={() => setLoading(false)}
                                />
                            </Pressable>
                        )}
                    </Center>
                </Box>
                <Box p="$2" w="80%">
                    <HStack justifyContent='space-between'>
                        <Heading size='xl'>{itemname}</Heading>
                        <Pressable onPress={handleLikeToggle}>
                            <AntDesign color={isLiked ? "red" : "#B4B4B4"} name="heart" size={30} pt="$2" />
                        </Pressable>
                    </HStack>
                    <HStack justifyContent='space-between' my='$6'>
                        <Pressable onPress={decreaseCounter}>

                            <Badge
                                style={{ backgroundColor: '#BFBFBF', }}
                                size={40}
                                pl='$5'
                            >-</Badge>
                        </Pressable>
                        <Badge
                            style={{ backgroundColor: '#BFBFBF' }}
                            size={40}
                        >{counter}</Badge>
                        <Pressable onPress={increaseCounter}>
                            <Badge
                                style={{ backgroundColor: '#BFBFBF' }}
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
                            handleCheckout();
                        }}
                    >
                        <ButtonText size='3xl'>
                            Check Now
                        </ButtonText>
                    </Button>
                </Box>
                {showAnimation && (
                    <Box style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} bg={colorScheme == "light" ? "white" : "black"}>
                        <LottieView
                            source={require("../json/move_shoppingcart.json")}
                            autoPlay
                            loop={false}
                            onAnimationFinish={onAnimationFinish}
                            style={{ width: '100%', height: '100%' }}
                        />
                    </Box>
                )}
            </Center>

        </Box>
    );
};
const styles = StyleSheet.create({
    imageContainer: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedBorder: {
        borderColor: '#E11D48',
    },
    thumbnail: {
        width: 70,
        height: 70,
        borderRadius: 10,
    },
    spinner: {
        position: 'absolute',
        zIndex: 1,
        width: 100,
        height: 100,
    },
    singleImageContainer:{
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#E11D48',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default DetailScreen;
