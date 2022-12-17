import React from "react";
import { Button, Text,Image,Stack} from "@chakra-ui/react";
import { Link, Navigate} from "react-router-dom";
export default function ProductsCard({ name, price, imageUrl,id }) {

//console.log(id);

const hoverEffect={backgroundColor:"#28bdb7",color:"black",cursor:"pointer"}

return (
  <Stack spacing={5} border={"0px solid green"}  justifyContent={"left"} textAlign={"left"}
  key={id}>
       <Image src={imageUrl} alt={name} mb={"50px"}  />
       <Text noOfLines={1} mb={"20px"} >{name}</Text>
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
         paddingX={"6.9rem"}
         mb={"10px"}
         _hover={hoverEffect}
         onClick={()=>{
          <Navigate to={`/products/${id}`} />
          console.log("Sapna");
         }}
       >
         <Text fontWeight={"thin"} >QUICK BUY</Text>
       </Button>
       </Link>
     </Stack>
  );
}


