import {
  Box,
  Image,
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
import {
  BluedotIcon,
  ClockIcon,
  GraydotIcon,
  YellowdotIcon,
} from "../assets/images/Icons";
import Card from "../components/Card";
import { card, TransationData,} from "../components/constants/Card";
import DoughnutGraph from "../components/DoughnutGraph";
import Layout from "../components/Layout";
import LineGraph from "../components/LineGraph";
import Navbar from "../components/Navbar";
 

const Dashboard = () => {
  return (
    <Box bg="#1F2128" h="auto">
      <Layout>
        <Navbar title="Dashboard" />
        <Box display="flex" justifyContent={"space-between"} pl={8}  mt={5}>
          <Box>
            <Text fontSize="36px" fontWeight={600} color="white">
              Good afternoon, Kushagrah
            </Text>
            <Text color="white" fontSize="14px" fontWeight={600}>
              Friday, 08 September 2021.
              <span style={{ color: "#84818A" }}>
                Today you have new notification. See you monthly{" "}
                <span style={{ color: "#32A9FF" }}> Report</span>
              </span>
            </Text>
          </Box>
          <Box mt={5} w="25%">
            <Select
              borderRadius="2xl"
              bg="#35373D"
              w="90%"
              h="7vh"
              mt={4}
              color="white"
              style={{ border: "none" }}
              placeholder="Shows stats: Monthly"
              shadow="lg"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </Box>
        </Box>

        <Box mt={5} display="flex" justifyContent={"space-between"}>
        {card?.map((item) => (
       <Card item={item} key={item.title} />
      ))}
        </Box>

        <Box display="flex" w="95%" mt={3} gap={5} mx="auto">
          <Box h="42vh" w="70%" bg="#35373D" rounded="xl" pl={16} mt={2}>
            <LineGraph />
          </Box>
          <Box
            h="42vh"
            w="35%"
            bg="#35373D"
            rounded="xl"
            pl={2}
            mt={2}
          >
            <Box display="flex" justifyContent={"space-between"} mt={2}>
              <Box>
                <Text color="white" fontSize={"16px"} fontWeight={600}>
                  Statictics
                </Text>
                <Box display="flex">
                  <Image src={ClockIcon} />
                  <Text fontSize="10px" fontWeight={500} ml={2} color="#828487">
                    Updated Saturday, Sep 03, 2021
                  </Text>
                </Box>
              </Box>
              <Box w="40%">
                <Select
                  borderRadius="2xl"
                  bg="rgba(255, 255, 255, 0.1)"
                  w="90%"
                  h="6vh"
                  color="white"
                  style={{ border: "none" }}
                  placeholder="Shows stats: Monthly"
                  shadow="lg"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Box>
            </Box>
            <Box w="100%">
              <DoughnutGraph />
            </Box>
          </Box>
        </Box>

        <Box display={"flex"} justifyContent={"space-between"} mt={5} w="95%" mx="auto" gap={5}>
          <Box w="35%" p={3} border="1px" bg="#35373D" borderRadius="xl"pt={3}>
            <Box display="flex" justifyContent={"space-between"} mt={2}>
              <Text fontSize={"14px"} fontWeight={600} color="white">
                Recent Notes
              </Text>
              <Text fontSize={"14px"} fontWeight={600} color="#0BAFFF">
                View All
              </Text>
            </Box>

            <Box display="flex" gap={3} mt={2}>
              <Image src={BluedotIcon} />
              <Text fontSize="14px" fontWeight={500} color="white" mb={-1}>
                Need to Check the new product model.
              </Text>
            </Box>
            <Box display={"flex"} gap={5} mt={2} ml={5}>
              <Text fontSize="12px" fontWeight={400} color="#8F92A1">
                by Kushagrah
              </Text>
              <Image src={GraydotIcon} />
              <Text fontSize="12px" fontWeight={400} color="#8F92A1">
                10min ago
              </Text>
            </Box>
            <Box display="flex" gap={3} mt={4}>
              <Image src={YellowdotIcon} />
              <Text fontSize="14px" fontWeight={500} color="white">
                Update feedback from new client #2497 generate new link
              </Text>
            </Box>
            <Box display={"flex"} gap={5} mt={2} ml={5}>
              <Text fontSize="12px" fontWeight={400} color="#8F92A1">
                by Nirob
              </Text>
              <Image src={GraydotIcon} />
              <Text fontSize="12px" fontWeight={400} color="#8F92A1">
                3h ago
              </Text>
            </Box>
            <Box display="flex" gap={3} mt={2}>
              <Image src={BluedotIcon} />
              <Text fontSize="14px" fontWeight={500} color="white">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium
              </Text>
            </Box>
            <Box display={"flex"} gap={5} mt={2} ml={5}>
              <Text fontSize="12px" fontWeight={400} color="#8F92A1">
                by Kushagrah
              </Text>
              <Image src={GraydotIcon} />
              <Text fontSize="12px" fontWeight={400} color="#8F92A1">
                Yesterday
              </Text>
            </Box>
          </Box>

          <Box
            w="63%"
            p={3}
            border="1px"
            bg="#35373D"
            borderRadius="xl"
            mx="auto"
            pt={4}
          >
            <Box>
              <Text fontSize="14px" fontWeight={600} color="white">
                Recent Transection
              </Text>
            </Box>

            <Box mt={2}>
              <TableContainer>
                <Table variant="unstyled">
                  <Thead shadow="xl" bg="rgba(255, 255, 255, 0.1)">
                    <Tr>
                      <Th borderBottomLeftRadius={25} borderTopLeftRadius={25}>
                        <Text color="white" fontSize="12px" fontWeight={700}>
                          Payment Number
                        </Text>
                      </Th>
                      <Th>
                        <Text color="white" fontSize="12px" fontWeight={700}>
                          Amount
                        </Text>
                      </Th>
                      <Th
                        borderBottomRightRadius={25}
                        borderTopRightRadius={25}
                      >
                        <Text color="white" fontSize="12px" fontWeight={700}>
                          Status
                        </Text>
                      </Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {TransationData.map((item) => (
                      <Tr>
                        <Box mt={2}>
                          <Box display="flex" gap={4}>
                            <Box>
                              <Image src={item.icon} />
                            </Box>
                            <Box mt={1}>
                              <Text
                                color="white"
                                fontSize={"14px"}
                                fontWeight={700}
                              >
                                {item.text}
                                <span style={{ color: "#0052CC" }}>
                                  #{item.number}
                                </span>
                              </Text>
                            </Box>
                          </Box>
                          <Text
                            ml={12}
                            color="#8F92A1"
                            fontSize="12px"
                            fontWeight={500}
                          >
                            {item.dayAndTime}
                          </Text>
                        </Box>
                        <Td>
                          <Text
                            color="white"
                            fontSize={"14px"}
                            fontWeight={700}
                          >
                            {item.amount}
                          </Text>
                        </Td>
                        <Td>
                          <Box
                            bg={
                              item.status === "Completed"
                                ? "#3a5245"
                                : "#573733"
                            }
                            rounded="xl"
                            py={2}
                          >
                            <Text
                              textAlign="center"
                              fontSize="14px"
                              fontWeight={500}
                              color={
                                item.status === "Completed"
                                  ? "#4FBF67"
                                  : "#DE350B"
                              }
                            >
                              {item.status}
                            </Text>
                          </Box>
                        </Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Dashboard;
