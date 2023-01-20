import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { registerImage, registerImage1 } from "../assets/images";
import { Select } from "@chakra-ui/react";
import Password from "../components/Password";
import { Facebook_logo, Googlelogo } from "../assets/images/Icons";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
   navigate("/")
  }

  const registraionHandler = () => {
    navigate("/register")
  }

  return (
    <>
      <Box
        w="full"
        display="flex"
        justifyContent={"space-between"}
        position="relative"
      >
        <Box w="30%">
          <Image src={registerImage} w="100%" h="100vh" objectFit="cover" />
        </Box>

        <Box w="72%" bg="black">
          <Box display={"flex"} justifyContent="flex-end" color="white">
            <Select
              borderRadius="2xl"
              bg="#35373D"
              w="20%"
              mt={5}
              mr={10}
              focusBorderColor="black"
              _placeholder={{ color: "white" }}
              style={{ border: "none" }}
              placeholder="English(USA)"
            >
              <option value="option1">HINDI</option>
              <option value="option2">URDU</option>
              <option value="option3">PUNJABI</option>
            </Select>
          </Box>

          <Box
            w="70%"
            display="flex"
            justifyContent={"center"}
            mx="auto"
            mt={10}
          >
            <Box display={"grid"} h="full" w="70%">
              <Box w="70%" display="flex" alignItems={"flex-start"}>
                <Text fontSize="36px" fontWeight={600} color="white">
                  {" "}
                  Let’s Sign You In
                </Text>
              </Box>
              <Box cursor="pointer" onClick={registraionHandler}>
                <Text color="white">
                  New user?{" "}
                  <span style={{ color: "#0BAFFF" }}> Create an account</span>{" "}
                </Text>
              </Box>

              <Box>
                <FormControl mt={8}>
                  <FormLabel color="#84818A">Email address</FormLabel>
                  <Input
                    placeholder="thakurarjun880@gmail.com"
                    _placeholder={{ color: "white" }}
                    style={{ color: "white" }}
                    variant="flushed"
                    focusBorderColor={"#0BAFFF"}
                  />
                </FormControl>
              </Box>
              <Password />
              <Box
                w="full"
                display={"flex"}
                gap={10}
                mt={5}
                justifyContent="space-between"
              >
                <Box w="full">
                  <Text color="#0BAFFF" fontSize="14px" fontWeight={600} mt={3}>
                    Forgot password?
                  </Text>
                </Box>
                <Box w="full">
                  <Button h="8vh" bg="#0BAFFF" w="100%" onClick={loginHandler}>
                    <Text fontSize="14px" fontWeight={600} color="white">
                      Sign In
                    </Text>
                  </Button>
                </Box>
              </Box>

              <Box display="flex" justifyContent={"space-between"} mt={3}>
                <Box>
                  <Divider orientation="horizontal" />
                </Box>
                <Text color="white">or</Text>
                <Box>
                  <Divider orientation="horizontal" />
                </Box>
              </Box>
              <Box>
                <Button
                  mt={5}
                  w="full"
                  bg="#35373D"
                  h="8vh"
                  _hover={{ color: "none" }}
                  onClick={loginHandler}

                >
                  <Image src={Googlelogo} />
                  <Text color="white" fontSize={"14px"} fontWeight={600} ml={2}>
                    Sign in with Google
                  </Text>
                </Button>
              </Box>

              <Box>
                <Button
                  mt={5}
                  w="full"
                  bg="#35373D"
                  h="8vh"
                  _hover={{ color: "none" }}
                  onClick={loginHandler}
                >
                  <Image src={Facebook_logo} borderRadius="full" />
                  <Text color="white" fontSize={"14px"} fontWeight={600} ml={2}>
                    Sign in with facebook
                  </Text>
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box position={"absolute"} bottom="1" left="270">
        <Image src={registerImage1} />
      </Box>
    </>
  );
};

export default Login;
