import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { DashPlus } from "../assets/images/Icons";

const Card = ({ item, key }) => {
  const {
    title,
    price,
    value,
    description,
    titleColor,
    valueColor,
    iconOne,
    iconTwo,
  } = item;
  return (
    <Box borderRight="1px solid #979797" p={3} w="90%" mx="auto">
      <Box display="flex" justifyContent="space-between" key={key}>
        <Box display="flex" gap={3} w="100%" ml={4}>
          <Image src={iconOne} />
          <Text color={titleColor} fontSize={"12px"} fontWeight={700} mt={1}>
            {title}
          </Text>
        </Box>
        <Box mt={1}>
          <Image src={DashPlus} />
        </Box>
      </Box>
      <Box  display="flex" w="100%" mt={2} pl={5} >
        <Text fontSize="30px" fontWeight={700} color="white">
          {price}
        </Text>
      </Box>
      <Box w="100%"  display="flex" mt={3} gap={3} pl={2}>
        <Image src={iconTwo} />
        <Text color={valueColor} fonSize="14px" fontWeight={600}>{value}</Text>
        <Text color="#84818A" fonSize="14px" fontWeight={400}>
          {description}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
