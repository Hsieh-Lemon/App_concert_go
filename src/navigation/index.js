import React from 'react';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen.js';
import ConcertScreen from '../screens/ConcertScreen.js';
import ShopScreen from '../screens/ShopScreen.js';
import UserScreen from '../screens/UserScreen.js';
import DetailScreen from '../screens/DetailScreen.js'
import MyTheme from '../theme';

import concertData from "../json/concerts.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer theme={MyTheme}>
            <MyTabs />
        </NavigationContainer>
    );
}

const MyTabs = () => {
    const { colors } = useTheme();
    return (
        <Tab.Navigator
            initialRouteName="HomeStack"
            screenOptions={{
                tabBarInactiveTintColor: colors.light500,
                tabBarActiveTintColor: colors.primary700,
                // headerShown: false
            }}
        >
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    headerShown: false,
                    title: "Home",
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    title: "Shop",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="shoppingcart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="User"
                component={UserScreen}
                options={{
                    title: "User",
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const HomeStack = () => {
    return (
        <Stack.Navigator
        // screenOptions={{
        //   headerShown: false
        // }}
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: concertData.concertPic,
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                }}
            />
            <Stack.Screen
                name="Concert"
                component={ConcertScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                })}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: '400',
                        fontSize: 20
                    },
                })}
            />
        </Stack.Navigator>
    );
}

export default Navigation;