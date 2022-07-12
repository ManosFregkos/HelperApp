import React from "react";
import { Box, Button, Heading, VStack } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Contact(){
    return (
        <Box>
            <Box bg="#4F4FFF" my="112px" ml="106px" mr="106px" w="1228px" h="380px" >
                <Box ml="186px" mr="186px" mt="176px">
                <Heading fontSize="64px" fontWeight="700px" color="white" pt="64px">Ready to deploy more and better products?</Heading>
                <Button bgColor="#4F4FFF" mt="44px" backgroundColor="#FFFFFF" rightIcon={<ArrowForwardIcon  />}  >Request your free demo</Button>
                </Box>
            </Box>
        </Box>
    )
}