import React from "react";
import { Text,FlatList, SectionList, StyleSheet } from "react-native";
import LightstickDetail from "./LightstickDetail";
import PhoneDetail from "./PhoneDetail";
import sections from "../json/lightsticks.json"


const LightstickList = () => {
    const renderSectionHeader = ({ section }) => (
        <>
            <Text style={styles.sectionHeader}>{section.title}</Text>
            {section.horizontal ? (
                <FlatList
                    horizontal={true}
                    data={section.data}
                    renderItem={({ item }) => <LightstickDetail product={item} />}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item.itemname}
                />
            ) : null}
        </>
    );
    const renderItem = ({ item, section }) => {
        if (section.horizontal) {
            return null;
        }
        return <PhoneDetail product={item} />
    };

    return (
        <SectionList
            sections={sections}
            contentContainerStyle={{ paddingHorizontal: 10 }}
            stickySectionHeadersEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderSectionHeader={renderSectionHeader}
            renderItem={renderItem}
            keyExtractor={item => item.itemname}
        />
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
  })


export default LightstickList;
