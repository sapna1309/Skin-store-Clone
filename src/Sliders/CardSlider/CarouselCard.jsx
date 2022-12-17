import React from "react";
import { Button, Text,Image, Box } from "@chakra-ui/react";
export default function CardCarousel({ name, price, imageUrl, id }) {
return (
    <Box mb={"35px"} ml={"7px"} mr={"7px"} textAlign={"left"} border={"0px solid green"} zIndex={-9999}>
      <Image src={imageUrl} alt={name} mb={"50px"}  />
      <Text noOfLines={2} mb={"20px"} >{name}</Text>
      <Button
        colorScheme="red"
        variant="outline"
        borderRadius={"none"}
        _hover={"none"}
        mb={"15px"} 
       >
        <Text color={"gray"} fontWeight={"thin"} mb={"15px"} >
          25% off with code REPLAY
        </Text>
      </Button>
      <Text  mb={"15px"} >{price}</Text>
      <Button
        backgroundColor={"black"}
        color="white"
        borderRadius={"none"}
        _hover={{ backgroundColor: "#28bdb7", color: "black",cursor:"pointer" }}
        paddingX={"6.6rem"}
        mb={"10px"}
      >
        <Text fontWeight={"thin"} >QUICK BUY</Text>
      </Button>
    </Box>
  );
}

function CardCarousel1({ name, price, imageUrl, id }) {
  return (
    <Box mb={"35px"} ml={"7px"} mr={"7px"} textAlign={"left"} border={"0px solid green"} zIndex={0}>
      <Image src={imageUrl} alt={name} mb={"50px"}  />
      <Text noOfLines={2} mb={"20px"} >{name}</Text>
      <Button
        colorScheme="red"
        variant="outline"
        borderRadius={"none"}
        _hover={"none"}
        mb={"15px"} 
       >
        <Text color={"gray"} fontWeight={"thin"} mb={"15px"} >
          25% off with code REPLAY
        </Text>
      </Button>
      <Text  mb={"15px"} >{price}</Text>
      <Button
        backgroundColor={"black"}
        color="white"
        borderRadius={"none"}
        _hover={{ backgroundColor: "#28bdb7", color: "black" }}
        paddingX={"6rem"}
        mb={"20px"}
      >
        <Text fontWeight={"thin"} >QUICK BUY</Text>
      </Button>
    </Box>
  );
}

export {CardCarousel1};
