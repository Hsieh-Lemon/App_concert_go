import React from 'react';
import { View } from 'react-native';
import { Box, Text, Image, Center, ScrollView } from "@gluestack-ui/themed";
import concertData from '../json/concerts.json';

const ConcertDetail = () => {
    
    return (
        <ScrollView>
            <Box>
                
                    <Box>
                        <Center marginTop={30} marginBottom={20}>
                            <Text fontSize={25} fontWeight={600} marginLeft={25} marginRight={25}>{concertData.name}</Text>
                        </Center>
                        <Center>
                            <Image
                                width={325}
                                height={200}
                                borderRadius={15}
                                source={{ uri: concertData.image }}
                                alt='name'
                            />
                        </Center>
                        <Box margin={30}>
                            <Box style={{ backgroundColor: '#F197DF' }} borderRadius={15} marginBottom={15} padding={18}>  
                                <Text fontSize={20} paddingBottom={7}>{concertData.time1}</Text>
                                <Text fontSize={20} paddingBottom={7}>{concertData.time2}</Text>
                            </Box>
                            <Box style={{ backgroundColor: '#F8CE58' }} borderRadius={15} marginBottom={15} padding={18}> 
                                <Text fontSize={20} paddingBottom={3}>Place：{concertData.place}</Text>
                            </Box>
                            <Box style={{ backgroundColor: '#93A5E5' }} borderRadius={15} padding={18} marginBottom={15}>
                                <Text fontSize={20} paddingBottom={3}>Host：</Text>
                                <Text fontSize={20} paddingBottom={3}>{concertData.host}</Text>
                            </Box>
                            <Box style={{ backgroundColor: '#459E94' }} borderRadius={15} padding={18}> 
                                <Text fontSize={20} paddingBottom={3} color={'white'}>Price：</Text>
                                <Text fontSize={20} paddingBottom={3} color={'white'}>{concertData.price}</Text>
                                <Text fontSize={20} paddingBottom={3} color={'white'}>Ticket System：{concertData.system}</Text>
                            </Box>
                        </Box>
                    </Box>
                
            </Box>
        </ScrollView>
    );
}

export default ConcertDetail;