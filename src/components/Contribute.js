import React from "react";
import {
  Flex,
  HStack,
  VStack,
  Heading,
  Image,
  Button,
  Text,
  Box,
} from "@chakra-ui/react";
import githublogo from "../images/Github.svg";
import figmalogo from "../images/Figma.svg";

export default function () {
  return (
    <Box h="500px" pt="200px">
      <HStack ml="106" mr="106px" h="32px" pt="92px" color="white">
        <Box w="400px">
          <Image src={githublogo} pb="16px" pr="240px" />
          <Heading fontSize="20px" lineHeight="24px" w="271px" pb="24px">
            Composer is open-sourced on GitHub. You're welcome to contribute!
          </Heading>
          <Button bgColor="#4F4FFF" borderRadius="99px">
            Contribute on GitHub
          </Button>
        </Box>
        <Box w="400px">
          <Image src={figmalogo} pb="16px" pr="270px" />
          <Heading fontSize="20px" lineHeight="24px" w="301px" pb="24px">
            Composer is part of the Figma community. Visit us with the handle
            @impulsum
          </Heading>
          <Button bgColor="#4F4FFF" borderRadius="99px">
            Contribute on Figma
          </Button>
        </Box>
        <Box w="400px" pt="56px">
          <Heading fontSize="20px" lineHeight="24px">
            Keep in touch
          </Heading>
          <Text fontSize="14px" pt="24px">
            Share feedback on GitHub
          </Text>
          <Text fontSize="14px" pt="24px">
            Find us on Linkedin
          </Text>
          <Text fontSize="14px" pt="24px">
            Meet the crew on Instagram
          </Text>
        </Box>
      </HStack>
    </Box>
  );
}

{
  /* <VStack w="400px">
          <Image src={githublogo} pb="16px" pr="240px" />
          <Heading
            fontSize="20px"
            lineHeight="24px"
            ml="32px"
            w="271px"
            pb="24px"
          >
            Composer is open-sourced on GitHub. You're welcome to contribute!
          </Heading>
          <Button bgColor="#4F4FFF">Contribute on GitHub</Button>
        </VStack>

        <VStack w="400px">
          <Image src={figmalogo} pb="16px" pr="270px" />
          <Heading fontSize="20px" lineHeight="24px" w="301px" pb="24px">
            Composer is part of the Figma community. Visit us with the handle
            @impulsum
          </Heading>
          <Button bgColor="#4F4FFF">Contribute on Figma</Button>
        </VStack>
        <VStack w="400px" pt="100px">
          <Heading fontSize="20px" lineHeight="24px">
            Keep in touch
          </Heading>
          <Text fontSize="14px" pt="24px">
            Share feedback on GitHub
          </Text>
          <Text fontSize="14px" pt="24px">
            Find us on Linkedin
          </Text>
          <Text fontSize="14px" pt="24px">
            Meet the crew on Instagram
          </Text>
        </VStack> */
}
