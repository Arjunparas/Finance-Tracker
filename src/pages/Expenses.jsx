import { Box } from "@chakra-ui/react";
import React from "react";
import ExpensesCard from "../components/ExpensesCard";
import ExpensesGraph from "../components/ExpensesGraph";
import ExpensesTable from "../components/ExpensesTable";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";

const Expenses = () => {
  return (
    <Box bg="#1F2128" h="auto">
      <Layout>
        <Navbar title="Expenses" />
          <Box mt={3} pl={10}>
          <ExpensesCard />
        </Box>

        <Box display="flex" gap={5} >
        <Box mt={5} w="66%" pl={10}>
         <ExpensesTable  />
        </Box>
        <Box mr={4} mt={5} w="30%">
          <ExpensesGraph />
        </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Expenses;
