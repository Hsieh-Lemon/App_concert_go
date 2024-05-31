import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer, useTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux';

import HomeScreen from '../screens/HomeScreen.js';
import ConcertScreen from '../screens/ConcertScreen.js';
import ShopScreen from '../screens/ShopScreen.js';
import UserScreen from '../screens/UserScreen.js';
import DetailScreen from '../screens/DetailScreen.js';
import SettingScreen from '../screens/SettingScreen.js';
import { selectColorMode } from '../redux/colorSlice';
import Theme from '../theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = () => {
  const theme = Theme(); // 使用 Theme 组件获取主题

  return (
    <NavigationContainer theme={theme}>
      <MyTabs />
    </NavigationContainer>
  );
};

const MyTabs = () => {
  const { colors } = useTheme();
  const colorMode = useSelector(selectColorMode);

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.light400,
        tabBarActiveTintColor: colors.primary700,
        tabBarStyle: {
          paddingBottom: Platform.OS === 'ios' ? 30 : 5,
          backgroundColor: colorMode === 'light' ? '#fff' : '#000',

        },
        
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
};

const HomeStack = () => {
  const colorMode = useSelector(selectColorMode);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "CONCERT GO",
          
          headerStyle: {
            backgroundColor: colorMode === 'light' ? '#fff' : '#000',
          },
          headerTitleStyle: {
            fontWeight: '800',
            fontSize: 26,
            color:"#218E83",
          },
        }}
      />
      <Stack.Screen
        name="Concert"
        component={ConcertScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: colorMode === 'light' ? '#fff' : '#000',
          },
          headerTintColor: '#459E94',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 26,
            
            color:colorMode === 'light' ? '#000' : '#fff',
          },
        })}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: colorMode === 'light' ? '#fff' : '#000',
          },
          headerTintColor: '#459E94',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 26,
            color:colorMode === 'light' ? '#000' : '#fff',          },
        })}
      />
    </Stack.Navigator>
  );
};

const ShopStack = () => {
  const colorMode = useSelector(selectColorMode);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Shop"
        component={ShopScreen}
        options={{
          title: "Shop",
          headerStyle: {
            backgroundColor: colorMode === 'light' ? '#fff' : '#000',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 26,
            color:colorMode === 'light' ? '#000' : '#fff',
          },
        }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ route }) => ({
          headerStyle: {
            backgroundColor: colorMode === 'light' ? '#fff' : '#000',
          },
          headerTintColor: '#459E94',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 26,
            color:colorMode === 'light' ? '#000' : '#fff',          },
        })}
      />
    </Stack.Navigator>
  );
};

const UserStack = () => {
  const colorMode = useSelector(selectColorMode);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={UserScreen}
        options={{
          title: 'User',
          headerStyle: {
            backgroundColor: colorMode === 'light' ? '#fff' : '#000',
          },
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 26,
            color:colorMode === 'light' ? '#000' : '#fff', 
          },
        }}
      />
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          title: 'Setting',
          headerStyle: {
            backgroundColor: colorMode === 'light' ? '#fff' : '#000',
          },
          headerTintColor: '#459E94',
          headerTitleStyle: {
            fontWeight: '500',
            fontSize: 26,
            color:colorMode === 'light' ? '#000' : '#fff',          },
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
