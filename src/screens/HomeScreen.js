import React from 'react';
import { SafeAreaView } from 'react-native';
import { Box, Text, Image, Center, ScrollView } from '@gluestack-ui/themed';
import Slider from '../components/Slider.js';
import carouselItems from '../json/concerts.json';
import products from '../json/lightsticks.json'

import Header from '../components/Header.js';
import HomeItem from '../components/HomeItem.js';

export default class HomeScreen extends React.Component {
    
    render(items) {
        
        return (
            <SafeAreaView backgroundColor="#FFFFFF">
                <Header />
                <ScrollView>
                    <Box
                        mt="$2"
                    >
                        <Slider items={carouselItems} />
                    </Box>
                    <Box >
                        <HomeItem product={products} items={carouselItems} />
                    </Box>
                </ScrollView>
            </SafeAreaView>
        );
    }
}