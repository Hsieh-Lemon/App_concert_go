import React from 'react';
import { SafeAreaView, View } from 'react-native';
import Slider from '../components/Slider.js';
import carouselItems from '../json/concerts.json';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: 'white',
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Slider items={carouselItems} />
        </View>
      </SafeAreaView>
    );
  }
}