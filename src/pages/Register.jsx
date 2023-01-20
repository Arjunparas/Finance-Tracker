import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { registerImage, registerImage1 } from "../assets/images";
import { Select } from "@chakra-ui/react";
import Password from "../components/Password";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate()

  const clickHandler = () => {
    navigate("/login")
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
              _placeholder={{ color: "white"}}
              style={{border:"none"}}
              placeholder="English(USA)"
            >
              <option value="option1" bg="black">HINDI</option>
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
              <Box w="60%" display="flex" alignItems={"flex-start"}>
                <Text fontSize="36px" fontWeight={600} color="white">
                  {" "}
                  Create an account
                </Text>
              </Box>

              <Box>
                <FormControl mt={8}>
                  <FormLabel color="#84818A">Email address</FormLabel>
                  <Input
                    placeholder="thakurarjun880@gmail.com"
                    _placeholder={{ color: "white" }}
                    style={{color:"white"}}
                    variant="flushed"
                    focusBorderColor={"#0BAFFF"}
                  />
                </FormControl>
              </Box>
              <Box w="full" display={"flex"} gap={10} mt={5}>
                <Box>
                  <FormLabel color="#84818A" mb={-3}>
                    First name
                  </FormLabel>
                  <Input
                     style={{color:"white"}}
                    _placeholder={{ color: "white" }}
                    variant="flushed"
                    focusBorderColor={"#0BAFFF"}
                  />
                </Box>
                <Box>
                  <FormLabel color="#84818A" mb={-3}>
                    Last name
                  </FormLabel>
                  <Input
                     style={{color:"white"}}
                    _placeholder={{ color: "white" }}
                    variant="flushed"
                    focusBorderColor={"#0BAFFF"}
                  />
                </Box>
              </Box>
              <Password />
              <Button mt={5} bg="#0BAFFF" onClick={clickHandler}>
                <Text color="white" fontSize={"14px"} fontWeight={600}>
                  Create account
                </Text>
              </Button>
              <Box mt={1} display="flex" gap={5}>
                <Checkbox defaultChecked colorScheme="blue"></Checkbox>
                <Text mt={4} color="#84818A" fontSize="12px" fontWeight={600}>
                  By clicking Create account, I agree that I have read and
                  accepted the{" "}
                  <span style={{ color: "#0BAFFF" }}> Terms of Use</span> and
                  <span style={{ color: "#0BAFFF" }}> Privacy Policy</span>.
                </Text>
              </Box>
              <Box ml={9}>
              <Text fontSize="14px" fontWeight={500} color="#84818A">
                Already have an account? <span style={{ color: "#0BAFFF" }}> Sign in</span>
              </Text>
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

export default Register;
