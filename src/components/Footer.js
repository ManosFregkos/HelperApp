import React from "react";
import { Box, Flex, Text, Image, Spacer } from "@chakra-ui/react";
import logo from "../images/ComposerLogo.png";

export default function Footer() {
  return (
    <Box w="100%">
      <Flex>
        <Text color="#888888" fontSize="16px" pl="106px" pb="92px" pt="164px">
          © {new Date().getFullYear()} Composer. Proudly powered by{" "}
          <Text as="span" color="#4F4FFF">
            Impulsum Venture Colab
          </Text>
          . All Rights Reserved.
          <Text as="span" color="Privacy Policy">
            Privacy Policy
          </Text>
        </Text>
        <Spacer></Spacer>
        <Image src={logo} w="60px" h="60px" mr="106px" mt="155px" />
      </Flex>
    </Box>
  );
}
