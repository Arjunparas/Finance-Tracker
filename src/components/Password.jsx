import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Password = ({ userReg }) => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <FormLabel color="#808191" mt="5%" mb={-1}>
        <Text fontSize={{lg:"16px",md:"14px",sm:"12px" }}fontWeight={500}>
        Password
        </Text>
        
      </FormLabel>
      <InputGroup position="relative">
        <Input
          pl={2}
          variant="flushed"
          colorScheme="#0BAFFF"
          w="100%"
          fontSize={"14px"}
          fontWeight="500"
          color="white"
          {...userReg("password")}
          type={show ? "text" : "password"}
          focusBorderColor={"#0BAFFF"}
        />
        <InputRightElement
          onClick={handleClick}
          width="4.5rem"
          position="absolute"
          right={-5}
        >
          {show ? (
            <BsFillEyeFill color="white" />
          ) : (
            <AiOutlineEyeInvisible color="white" />
          )}
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default Password;
