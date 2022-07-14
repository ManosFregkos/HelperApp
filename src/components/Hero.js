import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Hero() {
  return (
    <Box color="white" py="132px" px="32px" textAlign="center">
      <Heading fontFamily="Roboto" fontWeight="700" fontSize="75px" mx="106px">
        Deploy modern web experiences with the smartest web builder
      </Heading>
      <Text
        fontFamily="Inter"
        fontWeight="400"
        fontSize="20px"
        lineHeight="30px"
        color="#888888"
        pt="16px"
        px="300px"
      >
        Introducing Composer - the most advanced web and landing page builder
        for non-programmers that helps you to speed up your digital production
        processes
      </Text>
      <Button
        bgColor="#4F4FFF"
        borderRadius="99px"
        mt="32px"
        rightIcon={<ArrowForwardIcon />}
      >
        Request your free demo
      </Button>
    </Box>
  );
}
