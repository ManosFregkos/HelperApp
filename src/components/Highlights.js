import React from "react";
import highimage1 from "../images/Business.svg";
import { HStack,Box, Image, Text, Heading } from "@chakra-ui/react";
import highimage2 from "../images/Marketing.svg"



export default function Highlights(){
    return (
       <Box>
            <HStack mb="132px">
                
                    <Image src={highimage1} w="390px" h="310px" ml="105px" mt="117px" />
                    <Box>
                    <Text fontFamily="Roboto" fontWeight="100" fontSize="20px" lineHeight="24px" color="#4F4FFF" pl="36px" pt="147px">For Startups & Business Owners</Text>
                    <Heading fontSize="44px" lineHeight="52px" color="white" pl="36px" pr="122px">We support the way you run your Business</Heading>
                    <Text pt="16px" pl="36px" pr="122px" color="#888888">With our drag-and-drop web editor and customizable professional templates that fit your brand, you'll be online in no time.</Text>
                    </Box>
                    
                
            </HStack>
            <HStack pb="192px">
                <Box>
                <Text fontFamily="Roboto" fontWeight="100" fontSize="20px" lineHeight="24px" color="#4F4FFF" pl="106px">For Marketing Experts</Text>
                <Heading fontSize="44px" lineHeight="52px" color="white" pl="106px">Get better conversion rates</Heading>
                <Text pl="106px" pr="20px" color="#888888">We help you create high-converting landing pages, engaging popups, integrated SEO, and social media integrations to reach a wider audience and optimize conversion rates using precise and customized A/B testing, and analytical insights.</Text>
                </Box>
                <Image src={highimage2} w="600px" h="540px" pr="106px"></Image> 
                
                
            </HStack>
       </Box>
    )
}