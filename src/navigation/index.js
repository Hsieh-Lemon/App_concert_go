import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AntDesign from 'react-native-vector-icons/AntDesign';

import HomeScreen from '../screens/HomeScreen.js';
import ConcertScreen from '../screens/ConcertScreen.js';
import ShopScreen from '../screens/ShopScreen.js';
import UserScreen from '../screens/UserScreen.js';
import DetailScreen from '../screens/DetailScreen.js'
import SettingScreen from '../screens/SettingScreen.js'
import light from '../theme';

import concertData from "../json/concerts.json";
import shopData from "../json/lightsticks.json";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
    return (
        <NavigationContainer theme={light}>
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
                tabBarInactiveTintColor: colors.light400,
                tabBarActiveTintColor: colors.primary700,
                tabBarStyle: { 
                    paddingBottom: Platform.OS === 'ios' ? 30 : 5, 
                  },
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
                name="ShopStack"
                component={ShopStack}
                options={{
                    title: "Shop",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="shoppingcart" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="UserStack"
                component={UserStack}
                options={{
                    title: "User",
                    headerShown: false,
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
                    title: concertData.name,
                    headerShown: false,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26
                    },
                }}
            />
            <Stack.Screen
                name="Concert"
                component={ConcertScreen}
                options={() => ({
                    title: concertData.name,
                   
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#459E94',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26,
                        color:"#000"
                    },
                })}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={() => ({
                    title: shopData.itemname,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#459E94',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26,
                        color:"#000"
                    },
                })}
            />
        </Stack.Navigator>
    );
}
const ShopStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Shop"
                component={ShopScreen}
                options={{
                    title: shopData.title,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26
                    },
                }}
            />
            <Stack.Screen
                name="Detail"
                component={DetailScreen}
                options={({ route }) => ({
                    title: route.params.title,
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#459E94',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26,
                        color:"#000"
                    },
                })}
            />
        </Stack.Navigator>
    );
}
const UserStack = () =>{
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="User"
                component={UserScreen}
                options={{
                    title: 'User',
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#000',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26
                    },
                }}
            />
            <Stack.Screen
                name="Setting"
                component={SettingScreen}
                options={({ route }) => ({
                    title: 'Setting',
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#459E94',
                    headerTitleStyle: {
                        fontWeight: '500',
                        fontSize: 26,
                        color:"#000"
                    },
                })}
            />
        </Stack.Navigator>
    );
}
export default Navigation;