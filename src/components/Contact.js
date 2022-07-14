import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Contact() {
  return (
    <Box bg="#4F4FFF" ml="106px" w="80%" mb="112px">
      <Heading fontSize="64px" fontWeight="700px" color="white" p="64px">
        Ready to deploy more and better products?
      </Heading>
      <Button
        color="#4F4FFF"
        bgColor="#FFFFFF"
        rightIcon={<ArrowForwardIcon />}
        ml="64px"
        mb="72px"
        borderRadius="99px"
      >
        Request your free demo
      </Button>
    </Box>
  );
}
