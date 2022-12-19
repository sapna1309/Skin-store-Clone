import {
  HStack,
  Stack,
  Text,
  Input,
  Select,
  AlertIcon,
  Alert,
  Image,
  Checkbox,
  Button,
  Box,
  useDisclosure,
  CloseButton,
  AlertDescription,
  AlertTitle,
  Modal,
  ModalOverlay,
  ModalContent,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import CheckoutCartPage from "./CheckoutCartPage";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { prodArray } = useContext(AuthContext);

  let totalcartitems = 0;

  prodArray.map((el) => (totalcartitems += el.quantity));

  let totalAmount = 0;

  prodArray.map((el) => (totalAmount += el.price * el.quantity));

  const handleBookOrder = () => {
    onOpen();
  };

  return (
    <Box>
      <Stack>
        <Modal isOpen={isOpen} size={"2xl"} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent >
            <Alert
              status="success"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              height="250px"
              width={"100%"}
              m={"auto"}
            >
              <AlertIcon boxSize="40px" mr={0} />
              <Box>
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Booked successfully !🎉
                </AlertTitle>
                <AlertDescription maxWidth="sm" >
                  You have successfully placed order. Your order will get deliver with in 72 hours.
                </AlertDescription>
              </Box>
              <CloseButton
                alignSelf="flex-end"
                position="absolute"
                right={3}
                top={3}
                onClick={() => {
                  onClose();
                  navigate("/");
                }}
              />
            </Alert>
          </ModalContent>
        </Modal>
      </Stack>
      <HStack
        width={"67%"}
        margin={"auto"}
        border={"0px solid black"}
        mt={"60px"}
        mb={"50px"}
        alignItems={"start"}
        spacing={6}
        justifyContent={"space-between"}
      >
        <Stack
          width={"63%"}
          border={"0px solid gray"}
          borderTop={"4px solid black"}
          spacing={10}
        >
          <Stack
            width={"100%"}
            border={"0px solid gray"}
            textAlign={"left"}
            spacing={5}
            paddingX={"20px"}
            paddingY={"30px"}
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
          >
            <Text fontSize={"20px"} fontWeight={500}>
              1. Email and delivery address
            </Text>
            <label>Email address</label>
            <Input type="text" placeholder="Enter Email" />
            <label for="">Country/Region</label>
            <Select name="">
              <option value=""></option>
              <option value="United States Of America">
                United States Of America
              </option>
              <option value="India">India</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="China">China</option>
              <option value="Russia">Russia</option>
              <option value="Australia">Australia</option>
              <option value="Canada">Canada</option>
              <option value="South America">South America</option>
              <option value="Germany">Germany</option>
              <option value="Denmark">Denmark</option>
            </Select>
            <label>Full Name</label>
            <Input type="text" placeholder="Enter Full Name" />
            <label>Address</label>
            <Input type="text" placeholder="Enter Address" />

            <label>Contact Number</label>
            <Input type="number" placeholder="Enter Mobile Number" />
          </Stack>
          <Stack
            width={"100%"}
            border={"0px solid gray"}
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
            textAlign={"left"}
            spacing={6}
            paddingX={"20px"}
            paddingY={"30px"}
          >
            <Text fontSize={"20px"} fontWeight={500}>
              2. Select Delivery Option
            </Text>
            <Alert status="info">
              <AlertIcon />
              <Text color={"#0065AD"}>
                Please enter your address so we can calculate your delivery
                options.
              </Text>
            </Alert>
          </Stack>
          <Stack
            width={"100%"}
            border={"0px solid gray"}
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
            textAlign={"left"}
            paddingX={"20px"}
            paddingY={"30px"}
            spacing={5}
          >
            <Text fontSize={"20px"} fontWeight={500} marginBottom={"30px"}>
              3. Select Payment Method
            </Text>
            <Stack
              width={"100%"}
              border={"4px solid gray"}
              borderRadius={"8px"}
              textAlign={"left"}
              padding={"20px"}
              spacing={6}
              marginTop={"50px"}
            >
              <Text fontWeight={500}>Credit/Debit Card</Text>
              <HStack spacing={3} justifyContent={"flex-start"}>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg"
                    width={35}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg"
                    width={35}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg"
                    width={35}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg"
                    width={35}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/0528692e7541ff3755880b3408793969.svg"
                    width={35}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg"
                    width={35}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg"
                    width={35}
                  />
                </Stack>
              </HStack>
              <label>Card Number</label>
              <Input type="number" placeholder="Enter Card Number" />
              <label>Name on card</label>
              <Input type="text" placeholder="Enter Name of card" />

              <label for="">Expiry date</label>
              <HStack spacing={6}>
                <Select name="">
                  <option value="">Month</option>
                  <option value="1-Jan">1-Jan</option>
                  <option value="2-Feb">2-Feb</option>
                  <option value="3-Mar">3-Mar</option>
                  <option value="4-Apr">4-Apr</option>
                  <option value="5-May">5-May</option>
                  <option value="6-Jun">6-Jun</option>
                  <option value="7-Jul">7-Jul</option>
                  <option value="8-Aug">8-Aug</option>
                  <option value="9-Sep">9-Sep</option>
                  <option value="10-Oct">10-Oct</option>
                  <option value="11-Nov">11-Nov</option>
                  <option value="12-Dec">12-Dec</option>
                </Select>
                <Select name="">
                  <option value="">Year</option>
                  <option value="2022">2022</option>
                  <option value="2023">2023</option>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                  <option value="2029">2029</option>
                  <option value="2030">2030</option>
                  <option value="2031">2031</option>
                  <option value="2032">2032</option>
                  <option value="2033">2033</option>
                  <option value="2034">2034</option>
                  <option value="2035">2035</option>
                  <option value="3036">2036</option>
                </Select>
              </HStack>
              <label>Security Code (CV2)</label>
              <Input type="number" placeholder="Enter CVV" />
              <HStack>
                <Checkbox defaultChecked>Checkbox</Checkbox>
                <Text>Use my shipping address as my cardholder address</Text>
              </HStack>
            </Stack>
            <Stack
              width={"100%"}
              border={"1px solid gray"}
              borderRadius={"8px"}
              textAlign={"left"}
              padding={"20px"}
              spacing={6}
            >
              <Text fontWeight={500}>Use a different payment method</Text>
              <HStack spacing={4} justifyContent={"flex-start"}>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/6528547f8322e9cf64458725f0a72827.svg"
                    width={"80px"}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9Im5vbmUiIHZpZXdCb3g9IjAgMCA0My4xIDE2IiB3aWR0aD0iNDMiIGhlaWdodD0iMTYiPgogICAgPHRpdGxlPlppcFBheTwvdGl0bGU+CiAgICA8cGF0aCBmaWxsPSIjQUE4RkZGIiBkPSJNMTQuNjcgNC45MjdsMS4zNDUgMTEuMDMyaDEzLjE1NkwyNy44MjUgNC45MjdIMTQuNjdoMHoiLz4KICAgIDxwYXRoIGZpbGw9IiMxQTA4MjYiIGQ9Ik0xOC40MjMuNzE4Yy44NC43OTQuOTU0IDIuMDQ1LjI1NyAyLjc5Mi0uNjk3Ljc0Ny0xLjk0Mi43MDktMi43ODEtLjA4NS0uODQtLjc5Ny0uOTU1LTIuMDQ2LS4yNTctMi43OTQuNjk3LS43NDYgMS45NDEtLjcwOSAyLjc4MS4wODdoMHoiLz4KICAgIDxwYXRoIGZpbGw9IiMxQTA4MjYiIGQ9Ik00Mi45NTkgOC44OTljLS4zMDMtMi40ODEtMi4yMzctMy45OC00Ljg2My0zLjk3MmgtOC43NDdsMS4zNDQgMTEuMDMxaDMuOTM3bC0uMjY4LTIuMjA1aDQuMTY3YzMuMjc1IDAgNC43NzYtMi4wNiA0LjQzLTQuODUzaDB2LS4wMDF6TTM4LjEgMTAuNjZsLTQuMTIuMDA0LS4zMjMtMi42NDYgNC4xNC4wMDRjLjk3My4wMTMgMS40Ny41NjIgMS41NTIgMS4zMi4wNTMuNDg0LS4xNjggMS4zMTgtMS4yNSAxLjMxOHoiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiAgICA8cGF0aCBmaWxsPSIjMUEwODI2IiBkPSJNLjk2OSAxMi44NzZsLjM3NiAzLjA4M2gxMy4xNDNsLS40MzMtMy41MjhINy45M2wtLjA1Ny0uNDQgNS42NDctMy45NzItLjM3Ny0zLjA5MkgwbC40MjggMy41MzJoNi4xNGwuMDU1LjQ0LTUuNjU0IDMuOTc3aDB6Ii8+Cjwvc3ZnPgo="
                    width={"75px"}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/3c5574b5e1fe1470a49f46bc08828ef4.svg"
                    width={"70px"}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/5ba5f9cd0c43d9f966774630aa65d7c6.svg"
                    width={"60px"}
                  />
                </Stack>
                <Stack>
                  <Image
                    src="https://s1.thcdn.com/checkout/resources/images/61199182e45613b7932d163ec9ad823c.svg"
                    width={100}
                  />
                </Stack>
              </HStack>
            </Stack>
          </Stack>
          <Stack
            width={"100%"}
            border={"0px solid gray"}
            boxShadow="lg"
            p="6"
            rounded="md"
            bg="white"
            textAlign={"center"}
            padding={"20px"}
            spacing={3}
          >
            {" "}
            <Button
              backgroundColor={"black"}
              color="white"
              borderRadius={"none"}
              height={"60px"}
              _hover={{
                backgroundColor: "#28bdb7",
                color: "black",
                cursor: "pointer",
              }}
              onClick={handleBookOrder}
            >
              <Image
                src="https://img.icons8.com/material-rounded/24/null/lock--v1.png"
                filter={"invert(100%)"}
                mr="15px"
                _hover={{ filter: "invert(100%)" }}
              />
              <Text fontWeight={"thin"} fontSize={"20px"}>
                SUBMIT MY ORDER
              </Text>
            </Button>
          </Stack>
          <Text fontWeight={"thin"}>
            By placing this order, you are confirming that you agree to our{" "}
            <span style={{ textDecoration: "underline", fontSize: "15px" }}>
              {" "}
              Terms and Conditions
            </span>{" "}
            and{" "}
            <span style={{ textDecoration: "underline", fontSize: "15px" }}>
              {" "}
              Privacy Policy
            </span>
            .
          </Text>
        </Stack>
        {/* right side start */}
        <Stack
          border={"0px solid gray"}
          boxShadow="lg"
          p="6"
          rounded="sm"
          bg="white"
          width={"34%"}
          padding={"20px"}
          spacing={5}
          pos={"sticky"}
          top={150}
          right={0}
        >
          <HStack justifyContent={"space-between"}>
            <Text fontWeight={500}>Order Summary</Text>
            <Text>{totalcartitems} items</Text>
          </HStack>
          <HStack spacing={3}>
            <Text>Order Number :</Text>
            <Text>{Math.random() + Date.now()}</Text>
          </HStack>
          <Stack
            height={"350px"}
            borderBottom={"1px solid gray"}
            overflowY={"scroll"}
            padding={"5px"}
          >
            {prodArray.map((el) => (
              <CheckoutCartPage key={el.id} {...el} />
            ))}
          </Stack>
          <HStack justifyContent={"space-between"}>
            <Text>Delivery</Text>
            <Text>Calculated at next step</Text>
          </HStack>
          <HStack
            justifyContent={"space-between"}
            borderTop={"1px solid gray"}
            alignItems={"center"}
          >
            <Text fontSize={"20px"}>Total to pay</Text>
            <Text fontSize={"20px"}>$ {totalAmount}.00</Text>
          </HStack>
        </Stack>
      </HStack>
    </Box>
  );
}
