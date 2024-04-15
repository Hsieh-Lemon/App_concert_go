import React, { useState } from 'react';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { Box, Text, Center } from "@gluestack-ui/themed";

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
 
    return (
       <Box flex={1} >
          <SegmentedControlTab
             values={["General", "Advanced"]}
             tabStyle={{ 
                backgroundColor: "white",
                marginTop: 10,
                borderColor: "#5A7EFF",
             }}
             activeTabStyle={{
                backgroundColor: "#5A7EFF",
                marginTop: 10,    
                borderColor: "#5A7EFF",       
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