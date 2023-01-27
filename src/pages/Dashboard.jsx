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
import { card, TransationData } from "../components/constants/Card";
import DoughnutGraph from "../components/DoughnutGraph";
import Layout from "../components/Layout";
import LineGraph from "../components/LineGraph";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <Box bg="#1F2128" h="auto">
      <Layout>
        <Navbar title="Dashboard" />
        <Box
          display="flex"
          justifyContent={"space-between"}
          pl={{ lg: 8, md: 6, sm: 4 }}
          mt={5}
        >
          <Box>
            <Text
              fontSize={{ lg: "36px", md: "32px", sm: "28px" }}
              fontWeight={600}
              color="white"
            >
              Good afternoon, Kushagrah
            </Text>
            <Text
              color="white"
              fontSize={{ lg: "14px", md: "12px", sm: "10px" }}
              fontWeight={600}
            >
              Friday, 08 September 2021.
              <span style={{ color: "#84818A" }}>
                Today you have new notification. See you monthly{" "}
                <span style={{ color: "#32A9FF" }}> Report</span>
              </span>
            </Text>
          </Box>
          <Box mt={5} w={{ lg: "25%", md: "24%", sm: "50%" }}>
            <Select
              borderRadius="2xl"
              bg="#35373D"
              w="90%"
              h={{ lg: "7vh", md: "4vh", sm: "4vh" }}
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

        <Box
          mt={5}
          display={{ lg: "flex", md: "flex", sm: "column" }}
          justifyContent={"space-between"}
        >
          {card?.map((item) => (
            <Card item={item} key={item.title} />
          ))}
        </Box>

        <Box
          display={{ lg: "flex", md: "", sm: "" }}
          w="95%"
          mt={3}
          gap={5}
          mx="auto"
        >
          <Box
            h={{ lg: "42vh", md: "30vh", sm: "20vh" }}
            w={{ lg: "70%", md: "100%", sm: "100%" }}
            bg="#35373D"
            rounded="xl"
            pl={{ lg: 16, md: 2 }}
            mt={2}
          >
            <LineGraph />
          </Box>
          <Box
            h={{ lg: "42vh", md: "28vh", sm: "30vh" }}
            w={{ lg: "35%", md: "100%", sm: "100%" }}
            bg="#35373D"
            rounded="xl"
            pl={2}
            mt={2}
          >
            <Box display="flex" justifyContent={"space-between"} mt={{lg:2,md:4,sm:4}}>
              <Box ml={{sm:2}}>
                <Text color="white" fontSize={"16px"} fontWeight={600} mt={{sm:2}}>
                  Statictics
                </Text>
                <Box display="flex">
                  <Image src={ClockIcon} />
                  <Text fontSize="10px" fontWeight={500} ml={{lg:2,md:1}} color="#828487">
                    Updated Saturday, Sep 03, 2021
                  </Text>
                </Box>
              </Box>
              <Box w={{lg:"40%",md:"30%",sm:"40%"}}>
                <Select
                  mt={{sm:2}}
                  borderRadius="2xl"
                  bg="rgba(255, 255, 255, 0.1)"
                  w="90%"
                  h={{lg:"6vh",md:"4vh",sm:"4vh"}}
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

        <Box
          display={{lg:"flex",md:"",sm:""}}
          justifyContent={"space-between"}
          mt={5}
          w="95%"
          mx="auto"
          gap={5}
        >
          <Box w={{lg:"35%",md:"100%",sm:"100%"}} p={3} border="1px" bg="#35373D" borderRadius="xl" pt={3}>
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
          mt={{lg:0,md:4,sm:4}}
            w={{lg:"63%",md:"",sm:""}}
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
                                fontSize={{lg:"14px",md:"12px",sm:"11px"}}
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
                            fontSize={{lg:"12px",md:"12px",sm:"10px"}}
                            fontWeight={500}
                          >
                            {item.dayAndTime}
                          </Text>
                        </Box>
                        <Td>
                          <Text
                            color="white"
                            fontSize={{lg:"14px",md:"12px",sm:"12px"}}
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
                            py={{lg:2,md:3,sm:2}}
                            px={{lg:0,md:0,sm:2}}
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
