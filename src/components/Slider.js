import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Center, Image, HStack, Pressable } from '@gluestack-ui/themed';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from "@react-navigation/native";

export default function Slider({ items }) {
  const { navigate } = useNavigation();
  const _renderItem = ({ item }) => {
    return (
      <Box height={350} padding={0} marginBottom={60}>
        <Center>
          <HStack justifyContent="center">
            <Pressable onPress={() => navigate('Concert', items)}  >
              <Image style={styles.image} source={{ uri: item.image }} alt="name" />
            </Pressable>
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