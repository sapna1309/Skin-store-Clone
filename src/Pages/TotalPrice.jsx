import { Text } from "@chakra-ui/react";
export default function TotalPrice({sum}){
 return(
    <>
        <Text fontSize={"30px"} fontWeight={300}>
          ${sum}.00
        </Text>
    </>
 )
}