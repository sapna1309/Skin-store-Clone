import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {
  Button,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text,
  Image,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Loader from "./Loader";



//cityslicka
function Login() {
  const user = { email: "", password: "" };

  const { loginUser, isAuth } = useContext(AuthContext);
  const [formdata, setFormdata] = useState(user);
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const navigate = useNavigate();

  const toast = useToast();

 
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios({
      method: "POST",
      url: "https://reqres.in/api/register",
      data: formdata
    })
      .then((res) => {
        console.log(res.data.token);
        loginUser(res.token);
        toast({
          title: "Login Successfully",
          description: "Welcome to the Tvacha Store..!!",
          status: "success",
          duration: 4000,
          position: ["bottom"],
          isClosable: true
        });
      navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Error..!",
          description: "Enter Valid Credentials !",
          status: "error",
          duration: 4000,
          position: ["bottom"],
          isClosable: true
        });
      })
      .finally(() => {
    console.log("Success");
});
};


console.log("login",isAuth);

  return (

    <>
      <HStack
        border={"0px solid black"}
        width={"60%"}
        m={"auto"}
        justifyContent={"space-between"}
        alignItems={"start"}
        marginTop={"80px"}
        marginBottom={"80px"}
      >
        <Stack
          border={"0px solid red"}
          width={"48%"}
          padding={"25px"}
          textAlign={"left"}
          spacing={6}
          boxShadow="lg"
          p="6"
          rounded="md"
          bg="white"
        >
          <Heading fontWeight={"700px"} fontSize={"30px"}>
            Existing Customers
          </Heading>
          <label>
            <b>Email</b>
          </label>
          <Input
            type="text"
            placeholder="Enter Email"
            name="email"
            value={formdata.email}
            onChange={handleChange}
          />
          <label>
            <b>Password</b>
          </label>
          <InputGroup size="md">
            <Input
              name="password"
              value={formdata.password}
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Enter password"
              onChange={handleChange}
            />
            <InputRightElement width="4.5rem" borderRadius={"none"}>
              <Button h="1.75rem" size="sm" onClick={handleClick}>
                {show ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Text
            fontWeight={"thin"}
            textDecoration={"underline"}
            _hover={{ cursor: "pointer", textDecoration: "none" }}
          >
            FORGOTTEN YOUR PASSWORD?
          </Text>
          <Button
            backgroundColor={"black"}
            color="white"
            borderRadius={"none"}
            _hover={{
              backgroundColor: "#28bdb7",
              color: "black",
              cursor: "pointer",
            }}
          >
            <Text
              fontWeight={"thin"}
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
              onClick={handleSubmit}
            >
              SIGN IN
            </Text>
          </Button>
          <Text fontWeight={"thin"}>Or, Continue with</Text>
          <HStack justifyContent={"space-between"}>
            <Button
              borderRadius={"none"}
              backgroundColor={"white"}
              width={"45%"}
              border={"1px solid black"}
            >
              <Image
                src="https://img.icons8.com/fluency/2x/facebook.png"
                width={"30px"}
              />
              <Text>
                {" "}
                <b>Facebook</b>{" "}
              </Text>
            </Button>
            <Button
              borderRadius={"none"}
              backgroundColor={"white"}
              width={"45%"}
              border={"1px solid black"}
            >
              <Image
                src="https://img.icons8.com/color/2x/google-logo.png"
                width={"30px"}
              />
              <Text>
                {" "}
                <b>Google</b>{" "}
              </Text>
            </Button>
          </HStack>
        </Stack>
        <Stack
          border={"0px solid red"}
          width={"48%"}
          paddingX={"15px"}
          textAlign={"left"}
          spacing={6}
          padding={"25px"}
          boxShadow="lg"
          p="6"
          rounded="md"
          bg="white"
        >
          <Heading fontWeight={"700px"} fontSize={"30px"} paddingX={"15px"}>
            New Customers
          </Heading>
          <Button
            backgroundColor={"black"}
            color="white"
            borderRadius={"none"}
            _hover={{
              backgroundColor: "#28bdb7",
              color: "black",
              cursor: "pointer",
            }}
          >
            {" "}
            <Text
              fontWeight={"thin"}
              _hover={{ cursor: "pointer", textDecoration: "underline" }}
            >
              REGISTER
            </Text>{" "}
          </Button>
        </Stack>
      </HStack>
    </>
  );
}
export default Login;
