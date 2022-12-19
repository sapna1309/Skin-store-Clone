import {
  Box,
  Heading,
  HStack,
  Button,
  Text,
  Image,
  Stack,
  AlertIcon,
  Alert,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
} from "@chakra-ui/react";
import { useContext } from "react";
import { Link,useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import CartCardPage from "./CartCardsPage";
import DefaultContent from "./Defaultcartcontent";
import TotalPrice from "./TotalPrice";


const styleHeadings = {
  fontFamily: "Lato-Regular,Helvetica,Arial,sans-serif",
  fontSize: "40px",
  lineHeight: "42.5px",
  fontWeight: "500",
};

export default function CartPage() {

const navigate =useNavigate();  

const {prodArray,setProdArray,isAuth}= useContext(AuthContext);   

let sum=0;

prodArray.map((el) => (sum += Math.floor(el.price * el.quantity)));


const handleQuantity=(id,value)=>{
const updatedData = prodArray.map((item) =>
item.id === id ? { ...item, quantity: item.quantity + value } : item
  );
  setProdArray(updatedData);
};

const handleDelete=(id)=>{
const filteredData = prodArray.filter((el)=>el.id!==id);
setProdArray(filteredData);
console.log("sapna");
}

console.log("after deleted",prodArray);

console.log("Auth",isAuth);

return prodArray.length===0? (<DefaultContent/>): (
    <Box
      width={"90%"}
      margin={"auto"}
      border={"0px solid black"}
      marginTop={"100px"}
    >
      <HStack justifyContent={"space-between"}>
        <Heading style={styleHeadings}>Your Cart</Heading>
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
          <Image
            src="https://img.icons8.com/material-rounded/24/null/lock--v1.png"
            filter={"invert(100%)"}
            mr="15px"
            _hover={{ filter: "invert(100%)" }}
          />
          <Text fontWeight={"thin"}>CHECKOUT SECURELY NOW</Text>
        </Button>
      </HStack>
      {/* <Stack spacing={3} marginTop={"30px"}>
        <Alert status="success" height={"40px"}>
          <AlertIcon />
          <Text color={"green"}>
            {" "}
            Your discount has been applied: <b>
              {" "}
              25% off Last Minute Gifts{" "}
            </b>{" "}
          </Text>
        </Alert>
        <Alert status="success" height={"40px"}>
          <AlertIcon />
          <Text color={"green"}>
            You have qualified for:{" "}
            <b>
              {" "}
              Complimentary SkinCeuticals Resveratrol BE 4ml (Worth $21) when
              you spend $220 or more on the brand{" "}
            </b>
          </Text>
        </Alert>
        <Alert status="success" height={"40px"}>
          <AlertIcon />
          <Text color={"green"}>
            You have qualified for:{" "}
            <b>
              Select a gift for you or someone you love when you spend $130 or
              more
            </b>
            - Don't forget to make your selection below
          </Text>
        </Alert>
      </Stack> */}
      <Table border="0px" marginTop={"20px"}>
        <Thead>
          <Tr>
            <Th>Items</Th>
            <Th>Price</Th>
            <Th>Quantity</Th>
            <Th>SubTotal</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* map through the data */}
          {prodArray &&
            prodArray?.map((item) => {
              return <CartCardPage key={item.id} {...item} handleQuantity={handleQuantity} handleDelete={handleDelete} />;
            })}
        </Tbody>
      </Table>
      <HStack
        width={"95%"}
        m={"auto"}
        justifyContent={"center"}
        spacing={4}
        h={"60px"}
        borderBottom={"1px solid gray"}
        paddingX={"20px"}
        marginTop={"20px"}
        marginBottom={"30px"}
        borderTop={"1px solid gray"}
      >
        <Text fontSize={"30px"} fontWeight={300}>
          Cart Subtotal:
        </Text>
       <TotalPrice sum={sum} />
      </HStack>
      <HStack width={"95%"} margin={"auto"} justifyContent={"space-between"} marginBottom="40px" >
        <Button
          backgroundColor={"#EBEBEB"}
          border={"0px solid grey"}
          borderRadius={"none"}
          width={"20%"}
          _hover={{backgroundColor:"gray",color:"white"}}
        >
          {" "}
          <Link to="/">
            {" "}
            <Text fontWeight={"thin"}>CONTINUE SHOPPING</Text>
          </Link>
        </Button>
       
        <Button
          backgroundColor={"black"}
          color="white"
          borderRadius={"none"}
          width={"20%"}
          _hover={{
            backgroundColor: "#28bdb7",
            color: "black",
            cursor: "pointer",
          }}
          onClick={()=>{
            {isAuth?navigate("/checkout"):navigate("/login")}
            console.log("sapna");
          }}
        
        >
          <Image
            src="https://img.icons8.com/material-rounded/24/null/lock--v1.png"
            filter={"invert(100%)"}
            mr="15px"
            _hover={{ filter: "invert(100%)" }}
           
          />
         
          <Text fontWeight={"thin"}>CHECKOUT SECURELY NOW</Text>
        </Button>
      </HStack>
    </Box>
  );
}
