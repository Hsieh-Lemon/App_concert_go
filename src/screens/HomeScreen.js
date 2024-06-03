import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { selectColorMode } from '../redux/colorSlice';
import LottieView from 'lottie-react-native';

import { SafeAreaView } from 'react-native';
import { Box, Text, Image, Center, ScrollView } from '@gluestack-ui/themed';
import Slider from '../components/Slider.js';
import HomeItem from '../components/HomeItem.js';
import { useConcert, useLights, usePhones } from '../tanstack-query';


const HomeScreen = () => {
  const { data: concerts, isLoading: concertsLoading } = useConcert();
  const { data: lights, isLoading: lightsLoading } = useLights();
  const { data: phones, isLoading: phonesLoading } = usePhones();

  const colorMode = useSelector(selectColorMode);

  const backgroundColor = colorMode === 'light' ? 'white' : 'black';

  if (concertsLoading || lightsLoading || phonesLoading) {
    return <LottieView
      source={require('src/json/loading.json')}
      autoPlay
      loop
      style={styles.spinner}
    />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <ScrollView bg={backgroundColor}>
        <Box mt="$2">
          <Slider items={concerts} />
        </Box>
        <Box>
          <HomeItem product={[...lights, ...phones]} items={concerts} />
        </Box>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({

  spinner: {
    position: 'absolute',
    zIndex: 1,
    width: 100,
    height: 100,
  },
});
export default HomeScreen;