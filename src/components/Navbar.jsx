import {
  Box,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { DashBell, DashMessage, NavbarIcon, NotificationIcon, Search } from "../assets/images/Icons";
import React from "react";
import { DashProfile } from "../assets/images";

const Navbar = ({title}) => {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      w="100%"
      bg="#1F2128"
      mt={5}
    >
      <Box display="flex">
        <Text color="white" pl={10} fontSize="24px" fontWeight={700}>
          {title}
        </Text>
        <Image src={NavbarIcon} h="24px" w="24px" pt={2} />
      </Box>
      <Box w="70%" display={"flex"} gap={6}>
        <InputGroup>
          <InputLeftElement
            children={<Image src={Search} color="gray.300" ml={3} mr={2} />}
          />
          <Input
            variant="unstyled"
            type="text"
            placeholder="Search everything..."
            h="9vh"
            bg="#35373D"
            rounded="full"
            style={{ color: "white" }}
            shadow="lg"
          />
          <InputRightElement
            children={<Image src={DashBell} color="gray.300" mt={1} mr={3} />}
          />
        </InputGroup>
        <Box mt={3}>
        <Box position={"relative"}>
          <Image src={DashMessage} />
          </Box>
          <Box position={"absolute"} top={3} right={105} >
            <Image src={NotificationIcon} />
          </Box>
        </Box>
        <Box mt={1}>
          <Image src={DashProfile} />
        </Box>
        <Box mt={2} mr={2}>
          <Image src={NavbarIcon} h="24px" w="24px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
