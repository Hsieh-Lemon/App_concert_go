import React, { useState } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Box, Text, Center } from "@gluestack-ui/themed";
import { useSelector } from 'react-redux';
import { selectColorMode } from '../redux/colorSlice';

import GeneralSettingScreen from './GeneralSettingScreen';
import AdvancedSettingScreen from './AdavancedSettingScreen';

const  SettingScreen = ({route}) => {
    
    const [selectedIndex, setSelectedIndex] = useState(0);
 
    const SegmentedContent = () => {
       return(selectedIndex == 0 ?
          <GeneralSettingScreen/>:
          <AdvancedSettingScreen/>
          );
    }
    const colorMode = useSelector(selectColorMode);

    // 根据颜色模式设置背景色
    const backgroundColor = colorMode === 'light' ? 'white' : 'black';
    
    return (
       <Box flex={1} bg={backgroundColor} >
          <SegmentedControlTab
             values={["General", "Advanced"]}
             tabStyle={{ 
                backgroundColor: "white",
                marginTop: 10,
                borderColor: "#218E83",
             }}
             activeTabStyle={{
                backgroundColor: "#218E83",
                marginTop: 10,    
                borderColor: "#218E83",       
             }}
             firstTabStyle={{ marginLeft: 20 }}
             lastTabStyle={{ marginRight: 20 }}
             tabTextStyle={{ fontSize: 16, padding: 5, color: "black"}}
             activeTabTextStyle={{ color: "white" }}
             selectedIndex={selectedIndex}
             onTabPress={(index) => setSelectedIndex(index)}
          />
          <SegmentedContent />
       </Box>
    );
 }
 export default SettingScreen;