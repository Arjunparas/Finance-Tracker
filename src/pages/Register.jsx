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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signupUser } from "../api/auth";
import { toast } from "react-toastify";

const schema = yup
  .object({
    email: yup.string().required("Please Enter your Email"),
    password: yup
      .string()
      .min(6, "Password must be atleast six characters")
      .required(),
  })
  .required();

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const navigate = useNavigate();

  const clickHandler = (data) => {
    const apiData = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    };
    signupUser(apiData)
      .then((res) => {
        if (res.success === true) {
          toast.success(res.message);
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };
  return (
    <>
      <Box
        w={{ lg: "100%", md: "100%", sm: "100%" }}
        display="flex"
        justifyContent={"space-between"}
        position="relative"
      >
        <Box w={{ lg: "30%", md: "30%", sm: "0%" }}>
          <Image src={registerImage} w="100%" h="100vh" objectFit="cover" />
        </Box>

        <Box w={{ lg: "72%", md: "72%", sm: "100%" }} bg="black">
          <Box display={"flex"} justifyContent="flex-end" color="white">
            <Select
              borderRadius="2xl"
              bg="#35373D"
              w={{ lg: "20%", md: "25%", sm: "40%" }}
              mt={{ lg: 5, md: 3, sm: 3 }}
              mr={{ lg: 10, md: 3, sm: 3 }}
              focusBorderColor="black"
              _placeholder={{ color: "white" }}
              style={{ border: "none" }}
              placeholder="English(USA)"
            >
              <option value="option1" bg="black">
                HINDI
              </option>
              <option value="option2">URDU</option>
              <option value="option3">PUNJABI</option>
            </Select>
          </Box>

          <Box
            w={{ lg: "70%", md: "68%", sm: "70%" }}
            display="flex"
            justifyContent={"center"}
            mx="auto"
            mt={{ lg: 10, md: 5, sm: 5 }}
          >
            <Box
              display={"grid"}
              h="full"
              w={{ lg: "70%", md: "100%", sm: "100%" }}
            >
              <Box
                w={{ lg: "60%", md: "70%", sm: "100%" }}
                display="flex"
                alignItems={"flex-start"}
              >
                <Text
                  fontSize={{ lg: "36px", md: "32px", sm: "30px" }}
                  fontWeight={600}
                  color="white"
                >
                  {" "}
                  Create an account
                </Text>
              </Box>

              <Box>
                <FormControl mt={8}>
                  <FormLabel color="#84818A">
                    <Text
                      fontSize={{ lg: "16px", md: "14px", sm: "12px" }}
                      fontWeight={500}
                    >
                      Email address
                    </Text>
                  </FormLabel>
                  <Input
                    pl={2}
                    placeholder="Enter your email"
                    _placeholder={{ color: "white" }}
                    style={{ color: "white" }}
                    variant="flushed"
                    focusBorderColor={"#0BAFFF"}
                    {...register("email")}
                  />
                </FormControl>
                <Text color="red">{errors.email?.message}</Text>
              </Box>
              <Box
                w="full"
                display={{ lg: "flex", md: "flex" }}
                gap={10}
                mt={5}
              >
                <Box>
                  <FormLabel color="#84818A" mb={-3}>
                    <Text
                      fontSize={{ lg: "16px", md: "14px", sm: "12px" }}
                      fontWeight={500}
                    >
                      First Name
                    </Text>
                  </FormLabel>
                  <Input
                    pl={2}
                    style={{ color: "white" }}
                    _placeholder={{ color: "white" }}
                    variant="flushed"
                    focusBorderColor={"#0BAFFF"}
                    {...register("firstName")}
                  />
                </Box>
                <Box mt={{ lg: 0, md: 0, sm: 3 }}>
                  <FormLabel color="#84818A" mb={-3}>
                    <Text
                      fontSize={{ lg: "16px", md: "14px", sm: "12px" }}
                      fontWeight={500}
                    >
                      Last Name
                    </Text>
                  </FormLabel>
                  <Input
                    pl={2}
                    style={{ color: "white" }}
                    _placeholder={{ color: "white" }}
                    variant="flushed"
                    focusBorderColor={"#0BAFFF"}
                    {...register("lastName")}
                  />
                </Box>
              </Box>
              <Password userReg={register} />
              <Text color="red">{errors.password?.message}</Text>
              <Button mt={5} bg="#0BAFFF" onClick={handleSubmit(clickHandler)}>
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
                <Text fontSize="14px" fontWeight={500} color="#84818A" cursor="pointer">
                  Already have an account?{" "}
                  <span style={{ color: "#0BAFFF" }} onClick={clickHandler} > Sign in</span>
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        position={"absolute"}
        bottom={{ lg: "1", md: "2", sm: "0" }}
        left={{ lg: "270", md: "100", sm: "200" }}
      >
        <Image src={registerImage1} />
      </Box>
    </>
  );
};

export default Register;
