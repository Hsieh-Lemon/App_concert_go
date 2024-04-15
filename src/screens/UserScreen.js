import React, { useState } from 'react';
import { GluestackUIProvider, Center, HStack, Box, Text, Button, ButtonText, Pressable, ScrollView } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { useNavigation } from '@react-navigation/native';


const UserScreen = ({ destination }) => {
    const { navigate } = useNavigation();
    return (
        <ScrollView>
            <Center>

                <Box
                    width={320}
                    height={280}
                    borderRadius='15'
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
                    borderRadius='15'
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