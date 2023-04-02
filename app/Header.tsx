import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

export default function Header() {
  return (
    <Box 
      textAlign={{base:"left",md:"left", lg:"center"}}
      bg="#6B46C1"
      pt="100px"
      pb="200px"
      color={"white"}
      h={"397px"}
    >
      <Heading fontSize={"48px"}
            fontWeight={"800"}
            lineHeight={"62.4px"}
            fontStyle={"Inter"}>Simple Pricing for your Bussiness</Heading>
      <Text pt="4px" fontSize={"24px"}
            fontWeight={"500"}
            lineHeight={"32px"}
            fontStyle={"Ag"}>
        {" "}
        Plan that are carefully crafted to suit your bussiness
      </Text>
    </Box>
  );
}
