import React from "react";
import { Text, StyleSheet } from "react-native";

import LightstickList from "../components/LightstickList";
import PhoneList from "../components/PhoneList";
import { Box, HStack } from "@gluestack-ui/themed";
import { useLights, usePhones } from "../tanstack-query";
import { useSelector } from 'react-redux';
import { selectColorMode } from '../redux/colorSlice';



const ShopScreen = () => {
  const { data: phoneData } = usePhones();
  const { data: lightstickData } = useLights();
  const colorMode = useSelector(selectColorMode);

  // 根据颜色模式设置背景色
  const backgroundColor = colorMode === 'light' ? 'white' : 'black';
  const textColor = colorMode === 'light' ? 'black' : 'white';

  return (
    
    <Box  bg={backgroundColor} h="100%" >
      <Text style={[styles.sectionHeader, { color: textColor }]} >lightstick Rent</Text>

      <LightstickList list={lightstickData} />
    
      <Text style={[styles.sectionHeader, { color: textColor }]} >phone Rent</Text>

      <PhoneList list={phoneData} />
    </Box>
   
  );
};
const styles = StyleSheet.create({
  sectionHeader: {
    fontWeight: '600',
    fontSize: 18,
    paddingTop: 20,
    paddingBottom: 5,
    paddingLeft: 10,
    textTransform: 'uppercase',
    
  },

});
export default ShopScreen;
