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
        <Box display={"flex"} mt={5}>
          <Box w="65%">
            <Box bg="#35373D" w="92%" mx="auto" rounded="xl" ml={10}>
              <Box
                display="flex"
                justifyContent={"space-evenly"}
                alignItems="center"
              >
                <Box>
                  <Image src={RevenueIcon} />
                </Box>
                <Box>
                  <Text fontSize={"12px"} fontWeight={700} color="#0BAFFF">
                    Total Revenue
                  </Text>
                  <Text color="white" fontSize={"30px"} fontWeight={700}>
                    ₹127,892.32
                  </Text>
                </Box>
                <Box>
                  <SingleLineGraph />
                </Box>
              </Box>
            </Box>

            <Box w="95%" mx="auto" ml={10}>
              <RevenueCard />
            </Box>
          </Box>

          <Box w="35%">
            <Box mt={5}>
              <PieChartGraph />
            </Box>
            <Box mt={20}>
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
                  <Table variant={"unstyled"}>
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
                              <Box>
                                <Image src={item.icon} w="44px" h="44px" />
                              </Box>
                              <Box>
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
