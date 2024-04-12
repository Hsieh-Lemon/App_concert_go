import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Center, Image, HStack } from '@gluestack-ui/themed';
import Carousel from 'react-native-snap-carousel';

export default function Slider({ items }) {
  const _renderItem = ({ item }) => {
    return (
      <Box height={350} padding={0}>
        <Center>
        <HStack justifyContent="center">
          <Image style={styles.image} source={{ uri: item.image }} />
        </HStack>
        </Center>
      </Box>
    );
  };

  return (
    <Carousel
      layout={'default'}
      data={items}
      sliderWidth={400}
      itemWidth={300}
      renderItem={_renderItem}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 400,
    marginTop: 20,
    borderRadius: 20,
  },
});