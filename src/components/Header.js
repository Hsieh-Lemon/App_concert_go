import React from "react";
import { Box, Text, Image } from "@gluestack-ui/themed";

const Header = () => {
  return (
    <Box
      bg='#fff'
      justifyContent="center"
      alignItems="center"
      height={40}
      shadowColor="#000"
      shadowOffset={{ width: 0, height: 4 }}
      shadowOpacity={0.1}
      elevation={2}
    >
        <Text style={{fontFamily: "koulen",fontSize: 24, fontWeight: "bold", color: "#218E83"}}>CONCERT GO</Text>
    </Box>
  );
};

export default Header;