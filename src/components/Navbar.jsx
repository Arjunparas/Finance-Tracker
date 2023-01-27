import {
  Box,
  Hide,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import {
  DashBell,
  DashMessage,
  NavbarIcon,
  NotificationIcon,
  Search,
} from "../assets/images/Icons";
import React from "react";
import { DashProfile } from "../assets/images";

const Navbar = ({ title }) => {
  return (
    <Box
      display="flex"
      justifyContent={"space-between"}
      w="100%"
      bg="#1F2128"
      mt={5}
    >
      <Box display="flex" mr={{sm:2}}>
        <Text
          color="white"
          pl={{ lg: 8, md: 7, sm: 4 }}
          fontSize={{ lg: "24px", md: "22px", sm: "20px" }}
          fontWeight={700}
        >
          {title}
        </Text>
        <Hide below='md'>
        <Image src={NavbarIcon} h="24px" w="24px" pt={2} />
        </Hide>
      </Box>
      <Box w={{lg:"70%",md:"70%",sm:"70%"}} display={"flex"} gap={{lg:6,md:5,sm:3}}>
        <InputGroup>
          <InputLeftElement
            children={<Image src={Search} color="gray.300" ml={{lg:3,md:2,sm:1}} mr={{lg:2,md:2,sm:0}} />}
          />
          <Input
            variant="unstyled"
            type="text"
            placeholder="Search everything..."
            h={{lg:"6vh",md:"4vh",sm:"4vh"}}
            bg="#35373D"
            rounded="full"
            style={{ color: "white" }}
            shadow="lg"
          />
          <InputRightElement
            children={
              <Image
                src={DashBell}
                color="gray.300"
                mt={1}
                mr={3}
                cursor="pointer"
              />
            }
          />
        </InputGroup>
        <Box mt={3}>
          <Box position={"relative"}>
            <Image src={DashMessage} cursor="pointer" />
          </Box>
          <Box position={"absolute"} top={{lg:3,md:3,sm:3}} right={{lg:105,md:92,sm:16}}>
            <Image src={NotificationIcon} />
          </Box>
        </Box>
        <Box mt={1}>
          <Image src={DashProfile} cursor="pointer" />
        </Box>
        <Box mt={2} mr={2}>
          <Image src={NavbarIcon} h="24px" w="24px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
