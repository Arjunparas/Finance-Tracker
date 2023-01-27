import {
  Box,
  HStack,
  Select,
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
import { expensesMainData } from "./constants/Card";

const ExpensesTable = () => {
  return (
    <Box>
      <Box bg="#35373D" p={{lg:2,md:2,sm:1}} rounded="xl">
        <Box display={"flex"} justifyContent="space-between">
          <Box>
            <Text color="white" fontSize={{lg:"16px",md:"14px",sm:"13px"}} fontWeight={700} mt={3} ml={3}>
              Recent Entries
            </Text>
          </Box>
          <Box>
            <Select
              mt={{sm:2}}
              borderRadius="2xl"
              bg="rgba(255, 255, 255, 0.1)"
              w="85%"
              h={{lg:"7vh",md:"4  vh",sm:"4vh"}}
              color="white"
              style={{ border: "none" }}
              placeholder="Show: This Month"
              shadow="lg"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>

        <Box mt={5}>
          <TableContainer>
            <Table variant="unstyled" size={{lg:"md",md:"md",sm:"sm"}}>
              <Thead>
                <Tr bg="rgba(255, 255, 255, 0.1)" shadow="lg">
                  <Th borderBottomLeftRadius={25} borderTopLeftRadius={25}>
                    <Text color="white" fontSize={"12px"} fontWeight={700}>
                      EXPENSE
                    </Text>
                  </Th>
                  <Th>
                    <Text
                      color="white"
                      fontSize={"12px"}
                      fontWeight={700}
                      textAlign="center"
                    >
                      TYPE
                    </Text>
                  </Th>
                  <Th>
                    <Text
                      color="white"
                      fontSize={"12px"}
                      fontWeight={700}
                      textAlign="center"
                    >
                      EXECUTE BY
                    </Text>
                  </Th>
                  <Th borderBottomRightRadius={25} borderTopRightRadius={25}>
                    <Text color="white" fontSize={"12px"} fontWeight={700}>
                      AMOUNT
                    </Text>
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {expensesMainData.map((item) => (
                  <Tr>
                    <Td>
                      <HStack>
                        <Box display="flex">
                          <Box
                            p={1}
                            bg={
                              item.title === "Zendesk - Aug"
                                ? "white"
                                : item.title === "Nagpur - ELM Project"
                                ? "#109FE5"
                                : item.title === "Ad - Facebook"
                                ? "#7B61FF"
                                : item.title === "Salary - Alex"
                                ? "#FFA043"
                                : "#4FBF67"
                            }
                            rounded="lg"
                          ></Box>
                        </Box>
                        <Box>
                          <Text color="white" fontSize={{lg:"16px",md:"14px",sm:"12px"}} fontWeight={600}>
                            {item.title}
                          </Text>
                        </Box>
                      </HStack>
                      <Text
                        color="#84818A"
                        fontSize={{lg:"12px",md:'12px',sm:"10px"}}
                        fontWeight={500}
                        ml={3.5}
                      >
                        {item.date}
                      </Text>
                    </Td>
                    <Td>
                      <Box
                        bg={
                          item.type === "Zendesk"
                            ? "rgba(0, 165, 255, 0.1)"
                            : item.type === "Shipping"
                            ? "rgba(85, 66, 246, 0.1)"
                            : item.type === "Ad Spend"
                            ? "rgba(255, 160, 67, 0.1)"
                            : item.type === "Mics"
                            ? "rgba(32, 201, 172, 0.1)"
                            : "rgba(79, 191, 103, 0.1)"
                        }
                        textAlign={"center"}
                        borderRadius="4px"
                        p={1}
                      >
                        <Text
                          color={
                            item.type === "Zendesk"
                              ? "#00A5FF"
                              : item.type === "Shipping"
                              ? "#5542F6"
                              : item.type === "Ad Spend"
                              ? "#FFA043"
                              : item.type === "Mics"
                              ? "#20C9AC"
                              : "#4FBF67"
                          }
                          fontSize={{lg:"12px",md:"12px",sm:"10px"}}
                          fontWeight={600}
                        >
                          {item.type}
                        </Text>
                      </Box>
                    </Td>
                    <Td>
                      <Box>
                        <Text
                          color="white"
                          fontSize={{lg:"14px",md:"12px",sm:"12px"}}
                          fontWeight={600}
                          textAlign="center"
                        >
                          {item.executedBy}
                        </Text>
                      </Box>
                    </Td>
                    <Td>
                      <Text color="white" fontSize={{lg:"14px",md:"12px",sm:"12px"}} fontWeight={600}>
                        {item.amount}
                      </Text>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <Box
              bg="rgba(255, 255, 255, 0.1)"
              shadow="lg"
              textAlign="center"
              w="full"
              borderRadius="16px"
            >
              <Text fontSize="12px" fontWeight="700" color="white" p={2}>
                Load more
              </Text>
            </Box>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default ExpensesTable;
