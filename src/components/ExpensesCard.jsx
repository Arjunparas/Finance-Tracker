import { Box, Grid, GridItem, Image, Select, Text } from "@chakra-ui/react";
import React from "react";
import { editIcon } from "../assets/images/Icons";
import { expensesGraphData } from "./constants/Card";
import SingleLineGraph from "./SingleLineGraph";

const ExpensesCard = ({bdColor,bgColor}) => {

  return (
    <>
      <Box display="flex">
        <Grid templateColumns="repeat(3, 1fr)" gap={5} mt={5}>
             {expensesGraphData.map((item) => (
          <GridItem w="100%" gap={5} >
              <Box  bg="rgba(255, 255, 255, 0.1)" p={2} rounded="xl"pt={5}>
                <Box display={"flex"} justifyContent="space-between">
                  <Box display="flex" gap={5} mt={2} >
                    <Image src={item.icon} w="16px" h="16px" />
                    <Text color={item.bdColor} fontSize="12px" fontWeight={700}>
                      {item.title}
                    </Text>       
                    <Image src={editIcon} w="12px" h="12px" mt={1} />
                  </Box>
                  <Box>
                    <Select
                      borderRadius="2xl"    
                      bg="rgba(255, 255, 255, 0.1)"
                      w="85%"
                      h="7vh"
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
                  <Text
                    textAlign={"center"}
                    color="white"
                    fontSize="30px"
                    fontWeight={700}
                  >
                    {item.value}
                  </Text>
                </Box>
                <Box>
                  <SingleLineGraph bgColor={item.bgColor} bdColor={item.bdColor} />
                </Box>
              </Box>
           
          </GridItem>
           ))}
        </Grid>
      </Box>
    </>
  );
};

export default ExpensesCard;
