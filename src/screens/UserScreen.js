import React, { useState } from 'react';
import { GluestackUIProvider, Center, HStack, Box, Text, Button, ButtonText, Pressable, ScrollView } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectColorMode } from '../redux/colorSlice';


const UserScreen = ({ destination }) => {
    const { navigate } = useNavigation();
    const colorMode = useSelector(selectColorMode);

// 根据颜色模式设置背景色
const backgroundColor = colorMode === 'light' ? 'white' : 'black';

    return (
        <ScrollView bg={backgroundColor}>
            <Center>

                <Box
                    width={320}
                    height={280}
                    borderRadius={15}
                    bg='#F8CE58'
                    mt='$8'
                    p='$2'
                >
                    <Text textAlign="center" color='#fff' size='2xl'>
                        Cart List
                    </Text>
                </Box>
                <Box
                    width={320}
                    height={280}
                    borderRadius={15}
                    bg='#F197DF'
                    my='$8'
                    p='$2'
                >
                    <Text textAlign="center" color='#fff' size='2xl'>
                        Like
                    </Text>
                </Box>


                <Pressable

                    onPress={() => navigate('Setting', destination)}

                    borderRadius={15}
                    width={320}
                    height={77}
                    backgroundColor='#93A5E5'
                    justifyContent='center'
                >
                    <Text textAlign="center" color='#fff' size='2xl'>Setting</Text>
                </Pressable>

            </Center>
        </ScrollView>
    );
}

export default UserScreen;