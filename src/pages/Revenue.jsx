import {
  Box,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { RevenueIcon } from "../assets/images/Icons";
import { recentTransactionData } from "../components/constants/Card";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import PieChartGraph from "../components/PieChartGraph";
import RevenueCard from "../components/RevenueCard";
import SingleLineGraph from "../components/SingleLineGraph";

const Revenue = () => {
  return (
    <Box bg="#1F2128" h="auto">
      <Layout>
        <Navbar title="Revenue" />
        <Box display={{ lg: "flex", md: "", sm: "" }} mt={5}>
          <Box w={{ lg: "65%", md: "100%", sm: "98%" }}>
            <Box
              bg="#35373D"
              w={{ lg: "92%", md: "98%", sm: "94%" }}
              mx="auto"
              rounded="xl"
              ml={{ lg: 10, md: 3, sm: 3 }}
            >
              <Box
                display={{ lg: "flex", md: "", sm: "grid" }}
                placeItems={{ sm: "center" }}
                h={{ sm: "30vh" }}
                justifyContent={{
                  lg: "space-evenly",
                  md: "",
                  sm: "center",
                }}
                alignItems="center"
              >
                <Box mt={{sm:2}}>
                  <Image src={RevenueIcon} />
                </Box>
                <Box>
                  <Text
                    fontSize={"12px"}
                    fontWeight={700}
                    color="#0BAFFF"
                    textAlign={"center"}
                  >
                    Total Revenue
                  </Text>
                  <Text color="white" fontSize={"30px"} fontWeight={700}>
                    ₹127,892.32
                  </Text>
                </Box>
                <Box>
                  <SingleLineGraph bgColor={"#0BAFFF"} bdColor={"#0BAFFF"} />
                </Box>
              </Box>
            </Box>

            <Box
              w={{ lg: "95%", md: "98%", sm: "100%" }}
              mx="auto"
              ml={{ lg: 10, md: 6, sm: 3 }}
            >
              <RevenueCard />
            </Box>
          </Box>

          <Box w={{ lg: "35%", md: "98%", sm: "100%" }}>
            <Box
              mt={{ lg: 5, md: 3, sm: 5 }}
              w={{ lg: "", md: "", sm: "100%" }}
              mx={{sm:"auto"}}
              h={{ lg: "60vh", md: "40vh", sm: "40vh" }}
            >
              <PieChartGraph />
            </Box>
            <Box mt={{lg:20,md:15,sm:5}}>
              <Text
                color="white"
                fontSize="24px"
                fontWeight={700}
                textAlign="center"
              >
                Recent Transaction
              </Text>
              <Box mt={10}>
                <TableContainer>
                  <Table variant={"unstyled"} size={{lg:"md",md:"md",sm:"sm"}}>
                    <Thead>
                      <Tr>
                        <Th></Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {recentTransactionData.map((item) => (
                        <Tr>
                          <Td>
                            <Box display="flex" gap={8}>
                              <Box w="30%">
                                <Image src={item.icon} w="44px" h="44px" />
                              </Box>
                              <Box w="30%">
                                <Text
                                  color="white"
                                  fontSize="14px"
                                  fontWeight={700}
                                >
                                  {item.title}
                                </Text>
                                <Text
                                  color="#8F92A1"
                                  fontSize="12px"
                                  fontWeight={500}
                                >
                                  {item.dateAndTime}
                                </Text>
                              </Box>
                            </Box>
                          </Td>

                          <Td>
                            <Text
                              color="#4FBF67"
                              fontSize="14px"
                              fontWeight={700}
                            >
                              {item.price}
                            </Text>
                          </Td>
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Revenue;
