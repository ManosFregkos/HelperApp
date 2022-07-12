import React from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";

export default function Hero(){
    return (
        <Box
        as='section'
        color="white"
        pt='132px'
        pb='106px'
        px='32px'
        textAlign='center'
      >
        <Heading fontFamily="Roboto" fontWeight='700' fontSize='75px' mx="106px">
        Deploy modern web experiences with the smartest web builder
        </Heading>
        <Text fontFamily="Inter" fontWeight='400' fontSize='20px'lineHeight="30px" color="#888888" pt='16px'>
        Introducing Composer - the most advanced web and landing page builder for non-programmers that helps you to speed up your digital production processes
        </Text>
        <Button bgColor="#4F4FFF" mt="32px" mb="146px" rightIcon={<ArrowForwardIcon  />}  >Request your free demo</Button>

      </Box>
    )
}