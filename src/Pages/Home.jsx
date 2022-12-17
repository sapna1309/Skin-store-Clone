import React from "react";
import { Box, Stack, Text, HStack, Image, Button } from "@chakra-ui/react";
import HeadCrousel from "../Sliders/HeaderCarousel";
import CardSlider, { CardSlider1 } from "../Sliders/CardSlider/FinalCarousel";
const styleHeadings = {
  fontFamily: "Lato-Regular,Helvetica,Arial,sans-serif",
  fontSize: "40px",
  lineHeight: "42.5px",
  fontWeight: "500",
};

export default function Home() {
  return (
    <Box width={"90%"} m={"auto"}>
      <HeadCrousel />
      {/* myStyling Section */}
      <Stack textAlign={"center"} width={"100%"} m="auto">
        <Text style={styleHeadings} mb="35px">
          Shop by Category
        </Text>
        <HStack width={"100%"} spacing={4}>
          <Stack>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/04/round_widget_ss_homepage_-_Untitled_Page-062904.png" />
          </Stack>
          <Stack>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/round_widget_ss_homepage_-_Untitled_Page_%281%29-062906.png" />
          </Stack>
          <Stack>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/round_widget_ss_homepage_-_Untitled_Page_%282%29-062926.png" />
          </Stack>
          <Stack>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/round_widget_ss_homepage_-_Untitled_Page_%283%29-063011.png" />
          </Stack>{" "}
          <Stack>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/round_widget_ss_homepage_-_Untitled_Page_%286%29-063207.png" />
          </Stack>{" "}
          <Stack>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/32/round_widget_ss_homepage_-_Untitled_Page_%285%29-063132.png" />
          </Stack>
        </HStack>
      </Stack>
      {/* cardSlidersection STARTS */}
      <Box width={"100%"}>
        <Text style={styleHeadings} mt={"35px"}>
          Missed Black Friday?
        </Text>
        <HStack width={"100%"} justifyContent={"center"} mt="25px" spacing={-1}>
          <Button
            borderRadius={"none"}
            backgroundColor={"#EBEBEB"}
            borderBottom={"3px solid black"}
          >
            25% off Black Friday Replay
          </Button>
          <Button borderRadius={"none"} backgroundColor={"#EBEBEB"}>
            BioEffect
          </Button>
          <Button borderRadius={"none"} backgroundColor={"#EBEBEB"}>
            Christophe Robin
          </Button>
        </HStack>
      </Box>
      <Box width={"100%"} zIndex={-9999} >
      <CardSlider />
      </Box>
      {/* cardSlidersection ENDS */}
      {/* trending offers Section starts */}
      <Box>
        <Text style={styleHeadings} mt={"40px"} mb={"25px"}>
          Trending Offers
        </Text>
        <HStack spacing={10}>
          <Stack spacing={5} alignItems={"center"}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-500x500-041753.jpeg" />
            <Text fontWeight={"bold"}>Skin Ceuticals Gift</Text>
            <Text fontWeight={"thin"} fontSize={"15px"}>
              Recieve a SkinCeutical Resveratol BE 4ml (worth $21) when you
              spend $220 or more on the brand{" "}
            </Text>
            <Button
              backgroundColor={"white"}
              border={"1px solid black"}
              borderRadius={"none"}
              width={"30%"}
            >
              <Text fontWeight={"thin"}>SHOP NOW</Text>
            </Button>
          </Stack>
          <Stack spacing={5} alignItems={"center"}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-500x500-041805.jpeg" />
            <Text fontWeight={"bold"}>20% off SkinMedica + $135 gift</Text>
            <Text fontWeight={"thin"} fontSize={"15px"}>
              Recieve a SkinCeutical Resveratol BE 4ml (worth $21) when you
              spend $220 or more on the brand
            </Text>
            <Button
              backgroundColor={"white"}
              border={"1px solid black"}
              borderRadius={"none"}
              width={"30%"}
            >
              <Text fontWeight={"thin"}>SHOP NOW</Text>
            </Button>
          </Stack>
          <Stack spacing={5} alignItems={"center"}>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/original-500x500-060614.jpg" />
            <Text fontWeight={"bold"}>
              25% off 111SKIN with code REPLAY + $95 gift
            </Text>
            <Text fontWeight={"thin"} fontSize={"15px"}>
              Recieve a SkinCeutical Resveratol BE 4ml (worth $21) when you
              spend $220 or more on the brand
            </Text>
            <Button
              backgroundColor={"white"}
              border={"1px solid black"}
              borderRadius={"none"}
              width={"30%"}
            >
              {" "}
              <Text fontWeight={"thin"}>SHOP NOW</Text>{" "}
            </Button>
          </Stack>
        </HStack>
      </Box>
      {/* trending offers Section ends */}
      <HStack
        mt={"30px"}
        mb={"30px"}
        width={"95%"}
        m={"auto"}
        spacing={3}
        justifyContent={"center"}
      >
        <Stack width={"18%"}>
          <Image
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png"
            width={"100%"}
          />
        </Stack>
        <Stack w={"16%"}>
          <Image
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png"
            width={"100%"}
          />
        </Stack>
        <Stack w={"15%"}>
          <Image
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png"
            width={"100%"}
          />
        </Stack>
        <Stack w={"15%"}>
          <Image
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png"
            width={"100%"}
          />
        </Stack>
        <Stack w={"15%"}>
          <Image
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png"
            width={"100%"}
          />
        </Stack>
        <Stack w={"17%"}>
          <Image
            src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png"
            width={"100%"}
          />
        </Stack>
      </HStack>
      <Box  mb={"30px"}>
      <Text style={styleHeadings} mb="40px" mt={"35px"}>
          What People Are Buying Right Now
        </Text> 
        <HStack spacing={7}border={"0px solid black"} alignItems={"end"}>
         <Stack spacing={3}>
          <Image src="https://static.thcdn.com/images/small/webp//productimg/480/480/11289609-1174892770940184.jpg" />
          <Text noOfLines={1} >SkinCeuticals C E Ferulic with 15% L-  Ascorbic acid vitamin C Serum 30ml</Text>
          <Text>$169.00</Text>
          <Button backgroundColor={"black"}
        color="white"
        borderRadius={"none"}
        _hover={{ backgroundColor: "#28bdb7", color: "black" }}
        paddingX={"6.6rem"}
        mb={"10px"}>
            <Text fontWeight={"thin"}>SHOP NOW</Text>
          </Button>
         </Stack>

         <Stack spacing={3}>
          <Image src="https://static.thcdn.com/images/small/webp//productimg/480/480/13973771-1764998807002190.jpg" />
          <Text noOfLines={1}>Eve Lom ecandent Double Cleanse Ritual Holiday Set 2022 (worth $235.00)</Text>
          <Text>$155.00</Text>
          <Button backgroundColor={"black"}
        color="white"
        borderRadius={"none"}
        _hover={{ backgroundColor: "#28bdb7", color: "black" }}
        paddingX={"6.6rem"}
        mb={"10px"}>
            <Text fontWeight={"thin"}>SHOP NOW</Text>
          </Button>
         </Stack>

         <Stack spacing={3}>
          <Image src="https://static.thcdn.com/images/small/webp//productimg/480/480/12434373-1744821040696653.jpg" />
          <Text noOfLines={1}>BIOEFFECT EGF Eye Serum 6ml</Text>
          <Text>$95.00</Text>
          <Button backgroundColor={"black"}
        color="white"
        borderRadius={"none"}
        _hover={{ backgroundColor: "#28bdb7", color: "black" }}
        paddingX={"6.6rem"}
        mb={"10px"}>
            <Text fontWeight={"thin"}>SHOP NOW</Text>
          </Button>
         </Stack>

         <Stack spacing={3}>
          <Image src="https://static.thcdn.com/images/small/webp//productimg/480/480/12588477-1794776910642146.jpg" />
          <Text noOfLines={1}>111SKIN Y Theorem Bio Cellulose Facial Mask Single 0.87oz (Worth $32.00)</Text>
          <Text>$10.00</Text>
          <Button backgroundColor={"black"}
        color="white"
        borderRadius={"none"}
        _hover={{ backgroundColor: "#28bdb7", color: "black" }}
        paddingX={"6.6rem"}
        mb={"10px"}>
            <Text fontWeight={"thin"}>SHOP NOW</Text>
          </Button>
         </Stack>

        </HStack> 
      </Box>
       
       {/* Brand of month starts */}

       <Box width={"100%"} >
       <Text style={styleHeadings} mb="40px" mt={"35px"}>
          Brand of the Month: Olaplex
        </Text> 
        <HStack width={"100%"} border={"0px solid black"} spacing={10} alignItems={"end"} justifyContent={"space-between"} >
         <Stack width={"45%"} border={"0px solid green"}>
          <Image src="https://static.thcdn.com/images/medium/webp/widgets/121-us/28/600x600-065228.jpeg" h={"570px"} />
         </Stack>
         <Stack width={"50%"} border={"0px solid red"}>
          <CardSlider1/>
         </Stack>
        </HStack>
       </Box>
       
       <Stack w={"100%"} mt={"40px"} borderBottom={"1px solid gray"} mb="30px">
        <Box border={"0px solid black"} mb="20px">
        <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/33/Skinstore_August_Referral_-_Untitled_Page_%281%29-022033.png" />
        </Box>
        <Box mb="30px">
        <Image src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-0308-STDCRE32346-SS-AH-SkinStore-Concierge-Banners-1180x200-084632.jpg" mb="70px" />
        </Box>
       </Stack>

    </Box>
  );
}
