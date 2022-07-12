import React from "react";
import logo from "../images/ComposerLogo.png";
import { Box, Image, Text, HStack, Spacer,Button} from "@chakra-ui/react"; 
import { ArrowForwardIcon } from "@chakra-ui/icons";



export default function Navbar(){
    return (
        
       <Box w="100%"   >
            <HStack>
                <Image py="32px" pl="106px" src={logo}/>
                <Text fontSize="28px" fontFamily="Roboto" color="white" ml="16px" letterSpacing="0.2em" fontWeight="900" >Composer </Text>
                <Spacer />
                <Button bgColor="#4F4FFF" rightIcon={<ArrowForwardIcon />}  >Request your free demo</Button>
            </HStack>
            
           
       </Box>
       
       
    )
}