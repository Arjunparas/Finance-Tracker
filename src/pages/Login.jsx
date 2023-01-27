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
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "../api/auth";

const schema = yup
  .object({
    email: yup.string().required("Please Enter your Email"),
    password: yup
      .string()
      .min(6, "Password must be atleast six characters")
      .required(),
  })
  .required();

const Login = (data) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const loginHandler = (data) => {
    const apiData = {
      email: data.email,
      password: data.password,
    };
    loginUser(apiData)
      .then((res) => {
        if (res.success === true) {
          toast.success(res.message);
          navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.message);
      });
  };

  const registrationHandler = () => {
    navigate("/signup");
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
              <option value="option1">HINDI</option>
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
                w={{ lg: "70%", md: "75%", sm: "75%" }}
                display="flex"
                alignItems={"flex-start"}
              >
                <Text
                  fontSize={{ lg: "36px", md: "32px", sm: "25px" }}
                  fontWeight={600}
                  color="white"
                >
                  {" "}
                  Let’s Sign You In
                </Text>
              </Box>
              <Box cursor="pointer" onClick={registrationHandler}>
                <Text color="white" fontSize="14px" fontWeight={600}>
                  New user?{" "}
                  <span style={{ color: "#0BAFFF" }}> Create an account</span>{" "}
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
                    type="email"
                    placeholder="Enter your email"
                    _placeholder={{ color: "white" }}
                    style={{ color: "white" }}
                    variant="flushed"
                    focusBorderColor={"#0BAFFF"}
                    {...register("email")}
                  />
                  <Text color="red">{errors.email?.message}</Text>
                </FormControl>
              </Box>
              <Password userReg={register} />
              <Text color="red">{errors.password?.message}</Text>
              <Box
                w="full"
                display={{ lg: "flex", md: "flex" }}
                gap={{ lg: 10 }}
                mt={{ lg: 5, md: 4, sm: 2 }}
                justifyContent="space-between"
              >
                <Box w="full">
                  <Text color="#0BAFFF" fontSize="14px" fontWeight={600} mt={3}>
                    Forgot password?
                  </Text>
                </Box>
                <Box w="full" mt={{ lg: 0, md: 2, sm: 3 }}>
                  <Button
                    h={{ lg: "8vh", md: "4vh", sm: "4vh" }}
                    bg="#0BAFFF"
                    w="100%"
                    onClick={handleSubmit(loginHandler)}
                  >
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
                  h={{ lg: "8vh", md: "4vh", sm: "4vh" }}
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
                  mt={{ lg: 5, md: 8, sm: 8 }}
                  w="full"
                  bg="#35373D"
                  h={{ lg: "8vh", md: "4vh", sm: "4vh" }}
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

export default Login;
