import React from "react";
import { Box, Heading, Text, VStack, Image, Flex } from "@chakra-ui/react";
import featuresImage1 from "../images/DesignSystemTool.svg"
import featuresImage2 from "../images/ComponentCatalog.svg"

export default function Features(){
    return (
        <Box>
            <Box>
                <Heading fontSize="44px" textAlign="center" mt="132px" mb="16px" color="white">We have got what you need</Heading>
                <Text fontSize="20px" textAlign="center" color="#4F4FFF">Learn more about the amazing features our team is developing.</Text>
            </Box>
            <Flex >
                <Flex  >
                    <VStack>
                    <Image src={featuresImage1} w="604px" h="340px"  />
                    <Heading color="white">Apply your Brand Identity into our Design System Tool</Heading>
                    <Text color="#888888">We have created the most flexible Design System tool to enable you to easily deploy your brand color scheme, fonts, images, and style into it to create your personalized Theme, or if you need it multi-brand themes!</Text>
                    </VStack>
                </Flex>
                <Flex >
                    <VStack>
                <Image src={featuresImage2} w="604px" h="340px" ml="16px"/>
                    <Heading color="white">Get your perfect branded and coded Component Catalog</Heading>
                    <Text color="#888888">Once your brand theming is applied you can rapidly launch modern experiences with a space grade React component catalog based on the ubiquitous open-source Chakra UI library.</Text>
                    </VStack>
                </Flex>
            </Flex>
        </Box>

    )
}