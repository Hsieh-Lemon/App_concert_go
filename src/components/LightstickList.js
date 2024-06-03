import React from "react";
import { Box, VStack,HStack } from "@gluestack-ui/themed";
import { FlatList } from "react-native";
import LightstickDetail from "./LightstickDetail";



const LightstickList = ({list}) => {
    const renderItem = ({ item }) => <LightstickDetail product={item} />;

    return (
        <Box>
        <FlatList
        data={list}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={item => item.itemname}
      />  
      </Box>
      );
};



export default LightstickList;
