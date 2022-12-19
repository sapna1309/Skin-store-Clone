import {
  Box,
  Grid,
  Heading,
  HStack,
  Stack,
  Text,
  Link,
  Select,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link as GoToHome } from "react-router-dom";
import { getData } from "../Utility/Api";
import Loader from "./Loader";
import ProductsCard from "./ProductsCard";

const styleHeadings = {
  fontFamily: "Lato-Regular,Helvetica,Arial,sans-serif",
  fontSize: "45px",
  lineHeight: "42.5px",
  fontWeight: "600",
};

export default function ProductPage() {
  const [data, setData] = useState([]);

  const [loading,setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData().then((res) => {
      setData(res.data);
      console.log(res.data);
      setLoading(false);
    });
  }, []);

  return loading? (<Loader/>): (
    <HStack
      width={"85%"}
      m={"auto"}
      border={"0px solid red"}
      justifyContent={"space-between"}
      alignItems={"start"}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"25%"}
        border={"0px solid red"}
        textAlign={"left"}
      >
        <GoToHome to="/">
          <Link _hover={{ cursor: "pointer", textDecoration: "underline" }}>
            Home
          </Link>{" "}
          / SkinCare / View All Details{" "}
        </GoToHome>
        <Text mt={"50px"} mb={"15px"} fontSize={"22px"}>
          {" "}
          <b> Refine </b>{" "}
        </Text>
        <hr style={{ backgroundColor: "gray", height: "0.5px" }} />
        <Text mt={"50px"} mb={"15px"}>
          {" "}
          <b> Brand </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>111 SKIN (46)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>3LAB(17)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Aesop (44)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>African Botanics (1)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>AHAVA(23)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Alo (3)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Alpha-H (19)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Alchimie-Forever (16)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>ALGENIST (28)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Alrux (4)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Beauty ORA (10)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Beauty State (8)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Bioderma (21)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Alpha-H (19)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Alpha-H (19)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Skin Care Product Type </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Moisturizer (1107)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Serum (734)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Cleansers (484)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Masks (339)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Exfoliators (367)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>skinCare Routine (125)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Facial Cream (19)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Sunscreen cream (16)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Night kit (28)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Scrub (4)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Facial Oil (10)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Body Oil (8)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Eye Care (21)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Powder (19)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Acne cream (19)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Skin Care Tools </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Cotton Pads (10)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Face Brushes (7)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Blemish Control Tools (4)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Wipes (4)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Face Sponges (3)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>skinCare System (58)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Face Clothes and flannels (11)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Eye Massager (10)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Oiling Tool (4)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Skin Type </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>All (1379)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Mature (975)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Normal (1545)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Oily (1062)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Sensitive (1080)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Dry (1284)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Combination (1188)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Dehydrated (88)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Skin Care Concern </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Fine Lines & Wrinkles (1046)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Acne (974)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Dehydration (785)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Pigmentaion (325)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Dullness (312)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Blemishes (234)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Visible pores (193)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Dark Circles & Puffiness (179)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Redness & Rosacea (113)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Lack of Firmness (107)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> SPF Content </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Low SPF (90)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>No SPF (432)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>SPF 15+ (81)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>SPF 30+ (152)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>SPF 50+ (115)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>SPF 40+ (105)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Skin Care Lips </b>{" "}
        </Text>
        <Stack spacing={3} borderTop={"1px solid gray"} h={"110px"}>
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Lip Balm (90)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Lip scrub (32)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Lip Treatment (81)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Skin care Day Night </b>{" "}
        </Text>
        <Stack spacing={3} borderTop={"1px solid gray"} h={"110px"}>
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Any (1823)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Day (1180)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Night (1044)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Key Ingredients </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>AHAs (310)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Algae Extract (116)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Almond Oil (4)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Aloe Vera (152)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Alpha Hydroxy Acids (7)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Amino Acids (271)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Antioxidants (772)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Arnica (31)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Avocado Oil (9)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Boitin (25)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Blueberry (1)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Caffeine (89)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Castor oil (95)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Caramides (84)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Conflower (16)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>DMAE (26)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>French Clay (6)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Preferences </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Paraben Free (310)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>PEG FRee (116)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>PHthalate Free (4)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>SLS Free (152)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Suitable for Infants (7)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Suitable for Pregnant Women (271)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Sulfate Free (772)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Vegan (31)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Gluten Free (9)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Fragrance free (25)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Cruelty Free (1)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Contains SPF (89)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>BHT Free (95)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Certified Orgainics (84)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Alcohol Free (16)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Clean (41)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Mineral Based (6)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Gender </b>{" "}
        </Text>
        <Stack spacing={3} borderTop={"1px solid gray"} h={"185px"}>
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Boys (14)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Girls (14)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Men (1979)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Women (3019)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Unisex (219)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Price </b>{" "}
        </Text>
        <Stack
          spacing={3}
          borderTop={"1px solid gray"}
          h={"185px"}
          overflowY={"scroll"}
        >
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Less than $10 (310)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>$10-$25 (116)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>$25-$50 (4)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>$50-$100 (152)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>$100-$150 (7)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>More than $150 (271)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b>Savings </b>{" "}
        </Text>
        <Stack spacing={3} borderTop={"1px solid gray"} h={"145px"}>
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>Up to 25% (14)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>25%-50% (14)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>50%-75% (1979)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>More than &5% (3019)</Text>
          </HStack>
        </Stack>
        <Text mt={"20px"} mb={"15px"}>
          {" "}
          <b> Average Reviews </b>{" "}
        </Text>
        <Stack spacing={3} borderTop={"1px solid gray"} h={"110px"}>
          <HStack mt={"15px"}>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>2-3 (90)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>3-4 (32)</Text>
          </HStack>
          <HStack>
            <button
              style={{
                border: "1px solid gray",
                width: "20px",
                height: "20px",
                marginLeft: "8px",
              }}
            ></button>
            <Text fontWeight={"thin"}>4+ (81)</Text>
          </HStack>
        </Stack>
      </Box>
      {/* RightSide */}
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"72.5%"}
        border={"0px solid green"}
      >
        <Stack
          border={"0px solid red"}
          alignItems={"start"}
          spacing={5}
          mt={"70px"}
        >
          <Heading style={styleHeadings} mb={"20px"}>
            View All Skincare
          </Heading>
          <Text textAlign={"left"} fontWeight={"thin"}>
            Radiant skin starts with effective skincare, and here at SkinStore
            we’ve curated the very best skincare brands. Shop with the peace of
            mind of our 20 years experience as an authorized retailer for brands
            such as{" "}
            <b>
              Arcona, Caudalie, Dermalogica, Elizabeth Arden, First Aid Beauty,
              Murad, Obagi, SkinCeuticals, SkinMedica, StriVectin{" "}
            </b>{" "}
            & many more. Take your pick from cleansers, moisturizers, masks,
            serums and more to treat all your skincare concerns from anti-aging
            to acne.{" "}
          </Text>
        </Stack>
        <HStack width={"100%"} m={"auto"} justifyContent={"space-between"} mt={"50px"} mb={"20px"} >
          <HStack width={"50%"} spacing={3} border={"0px solid pink"}justifyContent={"left"} >
            <Text fontWeight={"thin"}>Sort by</Text>
            <Select placeholder="Default" width={"50%"} borderRadius={"none"} >
              <option value="Popularity">Popularity</option>
              <option value="Low to High">Price: Low to High</option>
              <option value="High to Low">Price: High to Low</option>
              <option value="option3">A-Z</option>
              <option value="Percentage Discount">Percentage Discount</option>
              <option value="Newest arrivals">Newest arrivals</option>
            </Select>
          </HStack>
          <HStack width={"50%"} border={"0px solid pink"} justifyContent={"right"} spacing={1} >
            <Button>First</Button>
            <Button>Previous</Button>
            <Button>0</Button>
            <Button>Next</Button>
            <Button>Last</Button>
          </HStack>
        </HStack>
        <Grid gridTemplateColumns={"repeat(3,1fr)"} gridGap={3.5}>
          {data &&
            data?.map((el, i) => {
              return <ProductsCard key={i} {...el} />;
            })}
        </Grid>
      </Box>
    </HStack>
  );
}
