import React from "react";
import { FlatList } from "react-native";
import PhoneDetail from "./PhoneDetail";


const PhoneList = ({ list }) => {
    const renderItem = ({ item }) => <PhoneDetail product={item} />;
    return (
        <FlatList
            data={list}
            renderItem={renderItem}
            keyExtractor={item => item.itemname}
        />
    );
};


export default PhoneList;
