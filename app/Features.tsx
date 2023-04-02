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
import { HasleFreeIcon } from "./icons/checkMark";
import { MoneyBackGuranteeIcon } from "./icons/checkMark";
import { MonthlySubscriptionIcon } from "./icons/checkMark";
//import Icon from '@chakra-ui/icon/dist/icon';

export default function Features() {
  return (
    <Box mx={{ base: "40px", lg: "auto" }} maxW={"800px"} mt="25px">
      <Flex direction={{ base: "column", lg: "row" }}>
        <HStack mb="15px" ml="10px">
          <Icon as={MoneyBackGuranteeIcon} />
          <Text fontSize="18px" fontWeight="700" lineHeight="24px"> 30 days money back Guarantee</Text>
        </HStack>
        <HStack mb="15px" ml="10px">
          <Icon as={HasleFreeIcon} />
          <Text fontSize="18px" fontWeight="700" lineHeight="24px"> No setup fees 100% hassle-free</Text>
        </HStack>
        <HStack mb="15px" ml="10px">
          <Icon as={MonthlySubscriptionIcon} />
          <Text fontSize="18px" fontWeight="700" lineHeight="24px">No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
  );
}
