import { Text } from "@chakra-ui/react";
export default function SubTotal({sum1}){
 return(
    <>
       <Text fontSize={"20px"} fontWeight={"400"}>
                  {" "}
                  $ {sum1}.00
                </Text>
    </>
 )
}