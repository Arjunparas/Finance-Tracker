import React from "react";
import {
  Box,
  Grid,
  GridItem,
  Image,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import { revenueGraphData } from "./constants/Card";
import BarGraph from "./BarGraph";
import { revenuePlus } from "../assets/images/Icons";

const RevenueCard = () => {
  return (
    <Box display="flex">
      <Grid templateColumns={{lg:"repeat(2, 1fr)",md:"repeat(2, 1fr)",sm:"repeat(1, 1fr)"}} gap={6} mt={{lg:8,md:6,sm:4}}>
        {revenueGraphData.map((item) => (
          <GridItem w="100%" gap={8} key={item.value}>
            <Box bg="rgba(255, 255, 255, 0.1)" pl={3} rounded="xl" pt={{lg:5,md:3,sm:3}}>
              <Box display={"flex"} justifyContent="space-between">
                <Box mt={2}>
                  <Image src={item.icon} w="57.93px" h="24.62px" />
                </Box>
                <Box>
                  <Select
                    borderRadius="2xl"
                    bg="rgba(255, 255, 255, 0.1)"
                    w="85%"
                    h={{lg:"7vh",md:"4vh",sm:"4vh"}}
                    color="white"
                    style={{ border: "none" }}
                    placeholder="Week"
                    shadow="lg"
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </Select>
                </Box>
              </Box>
              <Box>
                <Text color="white" fontSize="30px" fontWeight={700}>
                  {item.value}
                </Text>
              </Box>
              <Box  w="285px" ml={1}>
                <BarGraph bgcolor={item?.bgColor} bdcolor={item?.bdColor} />
              </Box>
            </Box>
          </GridItem>
        ))}
        <Box bg="rgba(255, 255, 255, 0.1)" rounded="xl">
          <VStack justifyContent="center" alignItem="center" mt={20} mb={{sm:20}}>
            <Image src={revenuePlus} />
            <Text color="#8F92A1" fontSize="12px" fontWeight={500}>
              Add New Income Source
            </Text>
          </VStack>
        </Box>
      </Grid>
    </Box>
  );
};

export default RevenueCard;
