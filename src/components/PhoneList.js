import React from "react";
import { Box, VStack,HStack } from "@gluestack-ui/themed";
import { FlatList, StyleSheet } from "react-native";
import PhoneDetail from "./PhoneDetail";



const PhoneList = ({list}) => {
    const renderItem = ({ item }) => <PhoneDetail product={item} />;

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

const styles = StyleSheet.create({
    sectionHeader: {
        fontWeight: '600',
        fontSize: 18,
        paddingTop: 20,
        paddingBottom: 5,
        paddingLeft: 10,
        textTransform: 'uppercase',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
});


export default PhoneList;
