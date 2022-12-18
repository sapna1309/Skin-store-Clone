import { useParams, Link } from "react-router-dom";
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  HStack,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
  Grid,
} from "@chakra-ui/react";
import { useContext, useEffect, useState } from "react";
import { getSingleData } from "../Utility/Api";
import { AuthContext } from "../Context/AuthContext";
import SubTotal from "./SubTotal";

const styleHeadings = {
  fontFamily: "Lato-Regular,Helvetica,Arial,sans-serif",
  fontSize: "40px",
  lineHeight: "42.5px",
  fontWeight: "500",
};

export default function SingleProduct() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [details, setDetails] = useState({});
  const {prodArray,setProdArray} = useContext(AuthContext)
  const [totalItems,setTotalItems] = useState(1);


  const { id } = useParams();

  console.log("id", id);
  console.log("item",totalItems);

  useEffect(() => {
    getSingleData(id).then((res) => {
      let data=res.data
      setDetails({...data,quantity:1});
      console.log(res.data);
    }).catch((err)=>console.log(err))
  }, [id]);


  let sum1=0;

prodArray.map((el) => (sum1 += el.price * el.quantity));

let totalCount1 =0;

prodArray.map((ele) => (totalCount1+=ele.quantity));

console.log("count1",totalCount1);


  const handleAddProductArray = () => {
   setProdArray([...prodArray,details]);
    
    onOpen();
  };


  //console.log("quantity",totalItems)
  
  console.log("array",prodArray);
  return (
    <Box width={"90%"} m={"auto"} border={"0px solid red"}>
      {/* Modal */}
      <Stack>
        <Modal isOpen={isOpen} size={"3xl"} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent>
            <HStack
              borderBottom={"1px solid gray"}
              paddingX={"20px"}
              paddingY={"10px"}
              bg={"#EBEBEB"}
              alignItems={"center"}
            >
              <Heading
                fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}
                fontWeight={500}
                fontSize={"30px"}
              >
                Added to Your Cart
              </Heading>
              <ModalCloseButton />
            </HStack>
            <ModalBody>
              <HStack
                border={"0px solid black"}
                width={"full"}
                alignItems={"start"}
                marginTop={"20px"}
                marginBottom={"20px"}
                justifyContent={"space-between"}
              >
                <Stack border={"0px solid red"} width={"30%"}>
                  <Image src={details?.imageUrl} width={"200px"} />
                </Stack>
                <Stack border={"0px solid red"} width={"60%"} spacing={2}>
                  <Text fontWeight={"thin"}>
                    {details?.name} (Worth ${details?.price + 110}.00){" "}
                  </Text>
                  <Text fontWeight={"thin"}>Quantity : {totalItems}</Text>
                  <Text fontSize={"20px"} fontWeight={"500"}>
                    ${details?.price}.00
                  </Text>
                </Stack>
              </HStack>
              <HStack justifyContent={"space-between"}>
                <Text fontSize={"20px"} fontWeight={"400"}>
                  Subtotal :
                </Text>
                <SubTotal sum1={sum1} />
              </HStack>
              <Text fontSize={"20px"} fontWeight={"400"} >
                ({totalCount1} Items in Your cart)
              </Text>
              <HStack
                border={"0px solid green"}
                marginBottom={"20px"}
                marginTop={"20px"}
                h={"55px"}
                borderBottom={"1px solid gray"}
                borderTop={"1px solid gray"}
              >
                <Button
                  backgroundColor={"white"}
                  border={"1px solid grey"}
                  borderRadius={"none"}
                  width={"50%"}
                >
                  {" "}
                  <Link to="/products">
                    {" "}
                    <Text fontWeight={"thin"}>CONTINUE SHOPPING</Text>
                  </Link>
                </Button>
                <Button
                  backgroundColor={"black"}
                  color="white"
                  borderRadius={"none"}
                  width={"50%"}
                  _hover={{
                    backgroundColor: "#28bdb7",
                    color: "black",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  <Link to="/cart">
                    <Text fontWeight={"thin"}>VIEW CART</Text>
                  </Link>
                </Button>
              </HStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Stack>
      {/* Modal */}
      <HStack
        width={"100%"}
        m={"auto"}
        border={"0px solid black"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        marginTop={"50px"}
        borderBottom={"1px solid gray"}
      >
        <Box
          width={"50%"}
          ml={"50px"}
          mb={"50px"}
          role={"group"}
          p={6}
          maxW={"600px"}
          w={"full"}
          bg={useColorModeValue("gray.400", "#DB4F61")}
          boxShadow={"xl"}
          rounded={"lg"}
          pos={"relative"}
          zIndex={1}
        >
          <Box
            rounded={"lg"}
            mt={-12}
            pos={"relative"}
            height={"full"}
            _after={{
              transition: "all .3s ease",
              content: '""',
              w: "full",
              h: "full",
              pos: "absolute",
              top: 5,
              left: 0,
              backgroundImage: `url(${details?.imageUrl})`,
              filter: "blur(20px)",
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: "blur(25px)",
              },
            }}
          >
            <Image
              rounded={"lg"}
              height={"full"}
              width={"100%"}
              objectFit={"cover"}
              src={details?.imageUrl}
            />
          </Box>
          <Stack pt={10} align={"center"}>
            <Text
              color={"white"}
              fontSize={"2xl"}
              textTransform={"uppercase"}
              fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}
            >
              {details?.name}
            </Text>
            <Heading
              fontSize={"xl"}
              fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}
              fontWeight={600}
            >
              Price: $ {details?.price}
            </Heading>
            <Stack align={"center"}>
              <Text
                fontWeight={500}
                fontSize={"xl"}
                textTransform={"uppercase"}
                fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}
              >
                {details?.type}
              </Text>
              <Text
                fontFamily={"Lato-Regular,Helvetica,Arial,sans-serif"}
                color={"white"}
                fontSize={"18px"}
              >
                {details?.discription}
              </Text>
            </Stack>
          </Stack>
        </Box>
        <Stack
          width={"45%"}
          border={"0px solid red"}
          spacing={4}
          borderBottom={"1px solid gray"}
        >
          <Text
            textAlign={"left"}
            fontStyle={"Lato-Regular,Helvetica,Arial,sans-serif"}
            fontWeight={"thin"}
          >
            <b>Description : </b>
            Reveal a smooth, balanced, and radiant complexion with our Decadent
            Double Cleanse Ritual Set. The first step is our iconic Cleanser
            Balm that gives you the ultimate cleanse, then, our Foaming Cream
            Cleanser that is the ideal second step to give you that perfect
            double cleanse. Lastly, our Rescue Mask draws out impurities without
            harsh exfoliants and provides a refined bright glow.
          </Text>
          <Text
            textAlign={"left"}
            fontStyle={"Lato-Regular,Helvetica,Arial,sans-serif"}
            fontWeight={"thin"}
          >
            <b>Ingredients :</b> Paraffinum Liquidum, Peg-30 Lanolin, Cetearyl
            Alcohol, Bis-Diglyceryl Polyacyladipate-2, Aluminum Stearate,
            Theobroma Cacao (Cocoa) Seed Butter, Peg-75 Lanolin, Phenoxyethanol,
            Chamomilla Recutita (Matricaria) Flower Oil, Eucalyptus Globulus
            Leaf Oil, Eugenia Caryophyllus (Clove) Leaf Oil, Humulus Lupulus
            (Hops) Cone Oil, Bht, Eugenol, Limonene.
          </Text>
          <Heading
            textAlign={"left"}
            fontStyle={"Lato-Regular,Helvetica,Arial,sans-serif"}
            fontWeight={400}
            fontSize={"35px"}
            lineHeight={"50px"}
          >
            {details?.name}{" "}
            <span style={{ color: "gray" }}>
              (Worth ${details.price + 110}.00)
            </span>{" "}
          </Heading>
          <Heading
            textAlign={"left"}
            fontStyle={"Lato-Regular,Helvetica,Arial,sans-serif"}
            fontWeight={400}
            fontSize={"40px"}
            lineHeight={"50px"}
          >
            {" "}
            ${details?.price}.00{" "}
          </Heading>

          <HStack
            borderTop={"1px solid gray"}
            h={"80px"}
            justifyContent={"space-around"}
          >
            <Text fontSize={20}>
              <b>Quantity</b>
            </Text>
            <HStack spacing={0}>
              <Button
                borderRadius={"none"}
                border={"1px solid gray"}
                disabled={totalItems===1}
                onClick={()=>setTotalItems(totalItems-1)}
              >
                -
              </Button>
              <Button borderRadius={"none"} border={"1px solid gray"}>
               {totalItems}
              </Button>
              <Button
                borderRadius={"none"}
                border={"1px solid gray"}
                onClick={()=>setTotalItems(totalItems+1)}
              >
                +
              </Button>
            </HStack>
          </HStack>
          <Button
            backgroundColor={"black"}
            color="white"
            borderRadius={"none"}
            marginBottom={"10px"}
            _hover={{
              backgroundColor: "#28bdb7",
              color: "black",
              cursor: "pointer",
            }}
            onClick={handleAddProductArray}
          >
            ADD TO CART
          </Button>
          <HStack spacing={3} alignItems={"center"}>
            <Image
              src="https://img.icons8.com/material-outlined/24/null/filled-like.png"
              ml={3}
            />
            <Text mt={"7px"}>
              <b> Save To Wishlist</b>
            </Text>
          </HStack>
          <Text
            marginTop={"30px"}
            marginBottom={"15px"}
            fontWeight={"semibold"}
            fontSize={"20px"}
            textAlign={"left"}
          >
            25% off Last Minute Gifts
          </Text>
          <hr
            style={{ height: "1px", backgroundColor: "gray", marginTop: "5px" }}
          ></hr>
          <Text textAlign={"left"} marginTop={-1}>
            Discount will automatically apply at the cart. Offer valid for a
            limited time only.
          </Text>
        </Stack>
      </HStack>
      <Heading style={styleHeadings} marginTop={"30px"}>
        Other customers bought:
      </Heading>
      <Grid
        gridTemplateColumns={"repeat(3,1fr)"}
        gap={6}
        spacing={7}
        border={"0px solid black"}
        alignItems={"end"}
        width={"75%"}
        m={"auto"}
      >
        <Stack spacing={4} textAlign={"left"}>
          <Image src="https://static.thcdn.com/images/xsmall/webp//productimg/original/13973768-8004998593922840.jpg" />
          <Text noOfLines={1}>
            SkinCeuticals C E Ferulic with 15% L- Ascorbic acid vitamin C Serum
            30ml
          </Text>
          <Button
            borderRadius={"none"}
            border={"1px solid red"}
            backgroundColor={"white"}
            _hover={"none"}
            mb={"15px"}
            width={"200px"}
          >
            <Text color={"gray"} fontWeight={"thin"}>
              25% off with code REPLAY
            </Text>
          </Button>
          <Text>$169.00</Text>

          <Button
            backgroundColor={"black"}
            color="white"
            borderRadius={"none"}
            _hover={{ backgroundColor: "#28bdb7", color: "black" }}
            mb={"10px"}
          >
            <Text fontWeight={"thin"}>QUICK BUY</Text>
          </Button>
        </Stack>

        <Stack spacing={4} textAlign={"left"}>
          <Image src={details?.imageUrl} />
          <Text noOfLines={1}>
            Eve Lom ecandent Double Cleanse Ritual Holiday Set 2022 (worth
            $235.00)
          </Text>
          <Button
            borderRadius={"none"}
            border={"1px solid red"}
            backgroundColor={"white"}
            _hover={"none"}
            mb={"15px"}
            width={"200px"}
          >
            <Text color={"gray"} fontWeight={"thin"}>
              25% off with code REPLAY
            </Text>
          </Button>
          <Text>$155.00</Text>
          <Button
            backgroundColor={"black"}
            color="white"
            borderRadius={"none"}
            _hover={{ backgroundColor: "#28bdb7", color: "black" }}
            mb={"10px"}
          >
            <Text fontWeight={"thin"}>QUICK BUY</Text>
          </Button>
        </Stack>

        <Stack spacing={4} textAlign={"left"}>
          <Image src="https://static.thcdn.com/images/xsmall/webp//productimg/original/12466575-4164897192402848.jpg" />
          <Text noOfLines={1}>BIOEFFECT EGF Eye Serum 6ml</Text>
          <Button
            borderRadius={"none"}
            border={"1px solid red"}
            backgroundColor={"white"}
            _hover={"none"}
            mb={"15px"}
            width={"200px"}
          >
            <Text color={"gray"} fontWeight={"thin"}>
              25% off with code REPLAY
            </Text>
          </Button>
          <Text>$95.00</Text>
          <Button
            backgroundColor={"black"}
            color="white"
            borderRadius={"none"}
            _hover={{ backgroundColor: "#28bdb7", color: "black" }}
            mb={"10px"}
          >
            <Text fontWeight={"thin"}>QUICK BUY</Text>
          </Button>
        </Stack>
      </Grid>
      <Stack
        width={"85%"}
        border={"1px solid black"}
        m={"auto"}
        marginBottom={"35px"}
        spacing={3.5}
        marginTop={"30px"}
        alignItems={"center"}
        padding={"15px"}
      >
        <Heading style={styleHeadings}>Customer Reviews</Heading>
        <Text fontWeight={"thin"}>
          This product has no reviews. Be the first to write a review and you
          could
          <br />
          WIN A $100 VOUCHER
        </Text>
        <Button
          backgroundColor={"white"}
          border={"1px solid grey"}
          borderRadius={"none"}
          width={"18rem"}
        >
          WRITE A PRODUCT REVIEW
        </Button>
      </Stack>
    </Box>
  );
}
