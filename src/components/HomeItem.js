import React from 'react';
import { Pressable } from 'react-native';
import { Text, Image, Center, ScrollView } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";

const HomeItem = ({ items }) => {
    const { navigate } = useNavigation();



    return (
        <Center >
            <Text fontSize={25} fontWeight={600} mb="$2">New Item</Text>
            <Pressable onPress={() => navigate('Concert', { concert: items[6] })}>
                <Image width={325} height={250} borderRadius={15} marginBottom={30}
                    source={{ uri: items[6]?.image }} alt='Concert'
                />
            </Pressable>
            <Pressable onPress={() => navigate('Detail', {
                itemname: 'Samsung Galaxy AI S23',
                storage:'5',
                image: 'https://firebasestorage.googleapis.com/v0/b/checkconcertgo.appspot.com/o/phone_s23_1.jpg?alt=media&token=dd1f56a5-a525-439c-af63-440f24bb1527',
                img: 'https://firebasestorage.googleapis.com/v0/b/checkconcertgo.appspot.com/o/phone_s23_2.jpg?alt=media&token=d2272b8f-4efb-4453-bca7-a5b839f48d43'
            })}>
                <Image width={325} height={250} borderRadius={15} marginBottom={30}
                    source={{ uri: "https://github.com/Hsieh-Lemon/App_concert_go/blob/master/src/img/phone_s23_2.jpg?raw=true" }}
                    alt='Phone'
                />
            </Pressable>
            <Pressable onPress={() => navigate('Detail', {
                itemname: 'NewJeans Light Stick',
                storage:'6',
                image: 'https://firebasestorage.googleapis.com/v0/b/checkconcertgo.appspot.com/o/lightstick_njs.jpg?alt=media&token=353ba2ee-2dec-4c94-8f0b-2f78c2274449'
            })}>
                <Image width={325} height={250} borderRadius={15} marginBottom={30}
                    source={{ uri: "https://github.com/Hsieh-Lemon/App_concert_go/blob/master/src/img/lightstick_njs.jpg?raw=true" }}
                    alt='Lightstick'
                />
            </Pressable>
        </Center>
    );
}

export default HomeItem;
