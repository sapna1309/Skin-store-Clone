import { Box, Heading, HStack,Text,Image,Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function DefaultContent(){

    const styleHeadings = {
        fontFamily: "Lato-Regular,Helvetica,Arial,sans-serif",
        fontSize: "40px",
        lineHeight: "42.5px",
        fontWeight: "500",
      };
    return(
        <Box width={"90%"}
        margin={"auto"}
        border={"0px solid black"}
        marginTop={"80px"}>
            <Stack width={"100%"} textAlign="left" borderBottom={"1px solid black"} >
            <Heading style={styleHeadings} mb={"30px"}>Your Cart</Heading>
            </Stack>
            <Stack marginBottom={"50px"} alignItems={"center"}>
                <Heading style={styleHeadings}>There are currently no items in your cart.</Heading>
                <Button
          backgroundColor={"black"}
          color="white"
          borderRadius={"none"}
          width={"18%"}
          _hover={{
            backgroundColor: "#28bdb7",
            color: "black",
            cursor: "pointer",
          }}
        >
          <Text fontWeight={"thin"}><Link to="/products" >COUNTINUE SHOPPING</Link></Text>
        </Button>
            </Stack>
           <Stack spacing={6}>
            <HStack spacing={6}>
                <Stack>
                    <Image src="https://s1.thcdn.com/widgets/121-us/53/Skincare-041053.jpg" width={"1000px"} />
                    <Text>Skin Care</Text>
                </Stack>
                <Stack>
                    <Image src="https://s1.thcdn.com/widgets/121-us/30/580x580-125830.jpg" width={"1000px"}/>
                    <Text>Hair Care</Text>
                </Stack>
                <Stack>
                    <Image src="https://s1.thcdn.com/widgets/121-us/17/original-NF_PROD_SpringPromo22-Mini_Hero_01-102717.jpg" width={"1000px"}/>
                    <Text>Tools</Text>
                </Stack>
            </HStack>
            <HStack spacing={6}>
                <Stack>
                    <Image src="https://s1.thcdn.com/widgets/121-us/16/Makeup-041316.jpg" width={"1000px"}/>
                    <Text>Makeup</Text>
                </Stack>
                <Stack>
                    <Image src="https://s1.thcdn.com/widgets/121-us/32/Body-041332.jpg" width={"1000px"}/>
                    <Text>Bath & Body</Text>
                </Stack>
                <Stack>
                    <Image src="https://s1.thcdn.com/widgets/121-us/49/Wellness-041349.png" width={"1000px"}/>
                    <Text>Wellness</Text>
                </Stack>
            </HStack>
           </Stack>
        </Box>
    )
}