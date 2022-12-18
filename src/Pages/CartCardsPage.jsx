import { CloseButton, HStack, Text, Image, Tr, Td,Button } from "@chakra-ui/react";
import { AddIcon,MinusIcon } from "@chakra-ui/icons";

export default function CartCardPage({ imageUrl, name, id, price,quantity,handleQuantity,handleDelete }) {


  return (
    <Tr key={id} >
    <Td> {/*  <HStack> */}
      <HStack spacing={5}>
        <Image src={imageUrl} alt={name} width={"100px"} />
        <Text>{name}</Text>
      </HStack></Td>
     <Td> <Text>$ {price}.00</Text></Td>
     <Td> <HStack spacing={3} >
        <Button borderRadius={"none"}
      backgroundColor={"#EBEBEB"}
      padding={-10}
      _hover={{backgroundColor:"grey"}} 
      disabled={quantity===0}
      onClick={()=>handleQuantity(id,-1)} 
        >
          <MinusIcon width={"10px"}/>
        </Button>
        <Text fontSize={"20px"} >{quantity}</Text>
        <Button borderRadius={"none"} backgroundColor={"#EBEBEB"} padding={-10}_hover={{backgroundColor:"grey"}} 
        onClick={()=>handleQuantity(id,+1)} >
           <AddIcon width={"10px"} />
        </Button>
      </HStack></Td>
     <Td> <Text>$ {price*quantity}.00</Text> </Td>
     <Td> <CloseButton backgroundColor={"#EBEBEB"} _hover={{backgroundColor:"grey"}} handleDelet={()=>handleDelete(id)} /> </Td>
    {/* </HStack> */}
    </Tr>
  );
}
