import React from "react";
import logo from "../images/ComposerLogo.png";
import { Box, Image, Text, Flex, Spacer, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Navbar() {
  return (
    <Box w="100%" h="124px">
      <Flex pt="32px" pl="106px" pr="106px">
        <Image src={logo} />
        <Text
          fontSize="28px"
          fontFamily="Roboto"
          color="white"
          fontWeight="900"
          pl="16px"
          mt="10px"
        >
          Composer{" "}
        </Text>
        <Spacer />
        <Button
          bgColor="#4F4FFF"
          mt="10px"
          borderRadius="99px"
          rightIcon={<ArrowForwardIcon />}
        >
          Request your free demo
        </Button>
      </Flex>
    </Box>
  );
}
