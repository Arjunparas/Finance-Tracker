import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";

import {
  Dashboard,
  SidebarIcon,
  Expenses,
  Report,
  Revenue,
  Logout,
} from "../assets/images/Icons";

const sidebarData = [
  { title: "Dashboard", icon: Dashboard, pathname: "/" },
  { title: "Expenses", icon: Expenses, pathname: "/expenses" },
  { title: "Revenue", icon: Revenue, pathname: "/revenue" },
  { title: "Report", icon: Report, pathname: "/report" },
];

const Sidebar = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // console.log("location",location);
  const { pathname } = useLocation();

  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <>
      <Box bg="#1F2128" h="auto" pl={0}>
        <Box pt={6} w="90%" mx="auto">
          <Image src={SidebarIcon} />
        </Box>
        <Box mt={20} w="90%" mx="auto">
          <Text color="#818591" fontSize={"10px"} fontWeight={400}>
            ADMIN TOOLS
          </Text>
          <Box mt={6} justifyContent="center">
            {sidebarData.map((item, index) => (
              <Box  >
                <Link to={item.pathname}>
                  <Box
                    key={index}
                    w="full"
                    bg={item.pathname === pathname ? "#233c53" : "transparent"}
                    rounded="xl"
                   
                  >
                    <Box
                      display="flex"
                      gap={3}
                      cursor="pointer"
                      w="full"
                      p={3}
                      rounded="xl"
                    >
                      <Image src={item.icon} />
                      <Text
                        fontSize={"14px"}
                        fontWeight={600}
                        color={
                          item.pathname === pathname ? "#32A9FF" : "#808191"
                        }
                      >
                        {item.title}
                      </Text>
                    </Box>
                  </Box>
                </Link>
              </Box>
            ))}
          </Box>
        </Box>
        <Box mt={160}>
          <Button
            bg="none"
            _hover={{ bgColor: "rgba(0, 165, 255, 0.1)" }}
            w="full"
            onClick={logoutHandler}
          >
            <Image src={Logout} />
            <Text fontSize={"14px"} fontWeight={600} color="#808191" ml={2}>
              Logout
            </Text>
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Sidebar;
