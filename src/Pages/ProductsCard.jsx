import React from "react";
import { Button, Text,Image,Stack, HStack,} from "@chakra-ui/react";
import { Link} from "react-router-dom";
export default function ProductsCard({ name, price, imageUrl,id }) {

//console.log(id);

const hoverEffect={backgroundColor:"#28bdb7",color:"black",cursor:"pointer"}

return (
  <Stack spacing={5} border={"0px solid green"}  justifyContent={"left"} textAlign={"left"}
  key={id}>
        <HStack width={"100%"} border={"0px solid red"} alignItems={"start"} marginTop={"30px"} >
       <Image src={imageUrl} alt={name} mb={"30px"} width={"100%"} />
       <Image src="https://img.icons8.com/material-outlined/24/null/filled-like.png" alt={name+id} pos={"absolute"}  />
    
       </HStack>
       <Text noOfLines={1} mb={"20px"}>{name}</Text>
       <Button
         borderRadius={"none"}
         border={"1px solid red"}
         backgroundColor={"white"}
         _hover={"none"}
         mb={"15px"} 
         width={"200px"}
        >
         <Text color={"gray"} fontWeight={"thin"} >
           25% off with code REPLAY
         </Text>
       </Button>
       <Text  mb={"15px"} fontWeight={"bold"} fontSize={"20px"} > ${price}</Text>
       <Link to={`/products/${id}`} >
       <Button
         backgroundColor={"black"}
         color="white"
         borderRadius={"none"}
         paddingX={"7rem"}
         mb={"10px"}
         _hover={hoverEffect}
       >
         <Text fontWeight={"thin"} >QUICK BUY</Text>
       </Button>
       </Link>
     </Stack>
  );
}


