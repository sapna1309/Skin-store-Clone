import { HStack, Stack,Text,Image } from "@chakra-ui/react";

export default function CheckoutCartPage({name,price,quantity,imageUrl}){
    return(
        <>
        <HStack spacing={5} alignItems={"center"} justifyContent={"space-between"} borderBottom={"1px solid gray"} backgroundColor={"whiteSmoke"}>
            <Stack alignItems={"center"}>
                <Image src={imageUrl} alt={name} w={"200px"} />
            </Stack>
            <Stack textAlign={"left"}>
                <Text noOfLines={2}>{name}</Text>
                <Text>Quantity : {quantity}</Text>
                <Text>${price*quantity}.00</Text>
            </Stack>
        </HStack>
        </>
    )
}