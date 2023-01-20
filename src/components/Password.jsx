import {
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { BsFillEyeFill } from "react-icons/bs";
import { AiOutlineEyeInvisible } from "react-icons/ai";

const Password = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);
  return (
    <>
      <FormLabel color="#808191" mt="5%" mb={-1}>
        Password
      </FormLabel>
      <InputGroup position="relative">
        <Input
          variant="flushed"
          colorScheme="#0BAFFF"
          w="100%"
          fontSize={"14px"}
          fontWeight="500"
          color="white"
          // h={5}
          type={show ? "text" : "password"}
          focusBorderColor={"#0BAFFF"}
        />
        <InputRightElement
          onClick={handleClick}
          width="4.5rem"
          position="absolute"
          right={-5}
        >
          {show ? <BsFillEyeFill color="white" /> : <AiOutlineEyeInvisible color="white" />}
        </InputRightElement>
      </InputGroup>
    </>
  );
};

export default Password;
