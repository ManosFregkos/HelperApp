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
  useMediaQuery,
} from "@chakra-ui/react";
import githublogo from "../images/Github.svg";
import figmalogo from "../images/Figma.svg";

export default function Contribute() {
  const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
  return (

    <Box display={"flex"} flexDirection={isLargerThan1024 ? "row" : "column"} pt="100px">
      {/* <HStack > */}
        <Box  mr={"20px"} width={isLargerThan1024 ? "33%" : "100%"}  pt="92px" color="white">
          <Image src={githublogo} pb="16px"  />
          <Heading fontSize="20px" lineHeight="24px"  pb="24px">
            Composer is open-sourced on GitHub. You're welcome to contribute!
          </Heading>
          <Button bgColor="#4F4FFF" borderRadius="99px">
            Contribute on GitHub
          </Button>
        </Box>
      {/* </HStack> */}
      {/* <HStack  w={"100%"}  h="32px" pt="92px" color="white"> */}
      <Box mr={"20px"} width={isLargerThan1024 ? "33%" : "100%"} pt="92px" color="white">
          <Image src={figmalogo} pb="16px" />
          <Heading fontSize="20px" lineHeight="24px" pb="24px">
            Composer is part of the Figma community. Visit us with the handle
            @impulsum
          </Heading>
          <Button bgColor="#4F4FFF" borderRadius="99px">
            Contribute on Figma
          </Button>
        </Box>
      {/* </HStack> */}
      {/* <HStack  w={"100%"} h="32px" pt="92px" color="white"> */}
      <Box width={isLargerThan1024 ? "33%" : "100%"} pt="92px" color="white">
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
      {/* </HStack> */}
    </Box>

  );
}
