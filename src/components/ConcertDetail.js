import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { Box, Text, Image, Center, ScrollView } from "@gluestack-ui/themed";

const ConcertDetail = ({ concert }) => {
  const [loading, setLoading] = useState(true);

  if (!concert) {
    return <Text>No data available</Text>;
  }

  return (
    <ScrollView>
      <Box marginBottom={30}>
        <Center marginTop={30} marginBottom={20}>
          <Text fontSize={25} fontWeight={600} marginLeft={25} marginRight={25}>{concert.name}</Text>
        </Center>
        <Center >
          {loading && (
            <LottieView
              source={require('/Users/hsiehdaniely/app_concert_go/src/json/loading.json')}
              autoPlay
              loop
              style={styles.spinner}
            />)}
          <Image
            width={325}
            height={400}
            borderRadius={15}
            source={{ uri: concert.image }}
            alt='image'
            onLoadStart={() => setLoading(true)}
            onLoadEnd={() => setLoading(false)}
          />
        </Center>
        <Box margin={30}>
          <Box style={{ backgroundColor: '#F197DF' }} borderRadius={15} marginBottom={15} padding={18}>
            <Text fontSize={20} paddingBottom={7} color={'white'}>{concert.time1}</Text>
            <Text fontSize={20} paddingBottom={7} color={'white'}>{concert.time2}</Text>
          </Box>
          <Box style={{ backgroundColor: '#F8CE58' }} borderRadius={15} marginBottom={15} padding={18}>
            <Text fontSize={20} paddingBottom={3} color={'white'}>Place: {concert.place}</Text>
          </Box>
          <Box style={{ backgroundColor: '#93A5E5' }} borderRadius={15} padding={18} marginBottom={15}>
            <Text fontSize={20} paddingBottom={3} color={'white'}>Host:</Text>
            <Text fontSize={20} paddingBottom={3} color={'white'}>{concert.host}</Text>
          </Box>
          <Box style={{ backgroundColor: '#459E94' }} borderRadius={15} padding={18}>
            <Text fontSize={20} paddingBottom={3} color={'white'}>Price:</Text>
            <Text fontSize={20} paddingBottom={3} color={'white'}>{concert.price}</Text>
            <Text fontSize={20} paddingBottom={3} color={'white'}>Ticket System: {concert.system}</Text>
          </Box>
        </Box>
      </Box>
    </ScrollView>
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
export default ConcertDetail;