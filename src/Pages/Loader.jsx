import { HStack, Image } from '@chakra-ui/react';
export default function Loader(){
return(
    <HStack width={"100%"} justifyContent={"center"} alignItems={"center"}>
   
     <Image src="https://media.tenor.com/guhB4PpjrmUAAAAC/loading-loading-gif.gif" />
     </HStack>
)
}