import React from 'react';
import { useSelector } from 'react-redux';
import { selectColorMode } from '../redux/colorSlice';

import { Box, Text, Image, Center, ScrollView } from "@gluestack-ui/themed";
import ConcertDetail from '../components/ConcertDetail';


const ConcertScreen = ({ route }) => {
  const { concert } = route.params;
  const colorMode = useSelector(selectColorMode);

  const backgroundColor = colorMode === 'light' ? 'white' : 'black';

  return (
    <Box bg={backgroundColor}>
      <ConcertDetail concert={concert} />
    </Box>
  );
};

export default ConcertScreen;