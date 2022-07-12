import React from "react";
import { Flex, HStack, VStack, Heading, Image, Button, Text } from "@chakra-ui/react";
import githublogo from "../images/Github.svg"
import figmalogo from "../images/Figma.svg"

export default function() {
    return (
        <Flex h="500px">
            <HStack ml="106" mr="106px" h="32px" pt="92px" color="white">
                <VStack w="400px">
                    <Image src={githublogo} pb="16px" pr="240px" />
                    <Heading fontSize="20px" lineHeight="24px"  ml="32px" w="271px" pb="24px">Composer is open-sourced on GitHub. You're welcome to contribute!</Heading>
                    <Button bgColor="#4F4FFF"  >Contribute on GitHub</Button>
                </VStack>
                <VStack w="400px" >
                    <Image src={figmalogo} pb="16px" pr="270px"/>
                    <Heading fontSize="20px" lineHeight="24px"  w="301px" pb="24px">Composer is part of the Figma community. Visit us with the handle @impulsum</Heading>
                    <Button bgColor="#4F4FFF" >Contribute on Figma</Button>
                </VStack>
                <VStack w="400px" pt="100px" >
                    <Heading fontSize="20px" lineHeight="24px" >Keep in touch</Heading>
                    <Text fontSize="14px" pt="24px" >Share feedback on GitHub</Text>
                    <Text fontSize="14px" pt="24px" >Find us on Linkedin</Text>
                    <Text fontSize="14px" pt="24px">Meet the crew on Instagram</Text>
                </VStack>
            </HStack>
        </Flex>
    )
}