import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
  Icon,
} from "@chakra-ui/react";
import CheckMark from "./icons/checkMark";

export default function Pricing() {
  return (
    <Box
  maxW={{ base: "100%", md: "100%", lg: "994px" }}
  maxH={{ base: "auto", md: "auto", lg: "336px" }}
  mt={{ base: "0", md: "0", lg: "-135px" }}
  mx={{ base: "20px", md: "20px", lg: "auto" }}
  bg="white"
  borderRadius={"12px"}
  overflow="hidden"
  boxShadow={
    "0px 20px 25px -5px rgba(0,0,0,0.1), 0px 10px 15px -5px rgba(0,0,0,004)"
  }
>
      {/*  box */}
      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Box bg="#F0EAFB" h={"336"} w={"378"} p="48px" textAlign={"center"}>
          {/* left box */}
          <Text
            fontSize={"24px"}
            fontWeight={"800"}
            lineHeight={"32px"}
            fontStyle={"Inter"}
          >
            Premium PRO
          </Text>
          <Heading
            fontSize={"60px"}
            fontWeight={"800"}
            lineHeight={"60px"}
            fontStyle={"Inter"}
          >
            $329
          </Heading>
          <Text
            fontSize={"18px"}
            fontWeight={"500"}
            lineHeight={"28px"}
            fontStyle={"Inter"}
            mt="10px"
          >
            billed just once
          </Text>
          <Button
            mt={"20px"}
            color="white"
            bg="#805AD5" 
            w={"282px"}
            h={"51px"}
            fontSize={"16px"}
            fontWeight={"700"}
            lineHeight={"24px"}
            fontStyle={"Inter"}
          >
            {" "}
            Get started{" "}
          </Button>
        </Box>

        <Box
          // pt="60px"
          // pl="30px"
          py="48px"
          px="60px"
          
          fontSize={"18px"}
          fontWeight={"400"}
          lineHeight={"28px"}
          fontStyle={"Inter"}
          borderRadius={"8px"}
        >
          <Text mb="20px">
            Access these features when you get this pricing package for your
            business.
          </Text>
          <HStack mb={"10px"} mr={"20px"}>
            <Icon as={CheckMark} />
            <Text>International calling and messaging API</Text>
          </HStack>
          <HStack mb={"10px"}>
            <Icon as={CheckMark} />
            <Text>Additional phone numbers</Text>
          </HStack>
          <HStack mb={"10px"}>
            <Icon as={CheckMark} />
            <Text>Automated messages via Zapier</Text>
          </HStack>
          <HStack>
            <Icon as={CheckMark} />
            <Text>24/7 support and consulting</Text>
          </HStack>
        </Box>
      </Flex>
    </Box>
  );
}
