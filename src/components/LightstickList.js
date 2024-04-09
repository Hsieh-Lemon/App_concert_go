import React from "react";
import { FlatList } from "react-native";
import LightstickDetail from "./LightstickDetail";


const LightstickList = ({list}) => {
    const renderItem = ({ item }) => <LightstickDetail product={item} />;
  return (
    <FlatList
      data={list}
      renderItem={renderItem}
      keyExtractor={item => item.itemname}
    />    
  );
};


export default LightstickList;
