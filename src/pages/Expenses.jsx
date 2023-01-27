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
        <Box mt={3} pl={{ lg: 10, md: 5, sm: 3 }}>
          <ExpensesCard />
        </Box>

        <Box display={{ lg: "flex", md: "", sm: "" }} gap={5}>
          <Box
            mt={5}
            w={{ lg: "66%", md: "97%", sm: "97%" }}
            pl={{ lg: 10, md: 3, sm: 3 }}
          >
            <ExpensesTable />
          </Box>

          <Box
            mt={5}
            w={{ lg: "30%", md: "96%", sm: "92%" }}
            ml={{ lg: 0, md: 2, sm: 4 }}
          >
            <ExpensesGraph />
          </Box>
        </Box>
      </Layout>
    </Box>
  );
};

export default Expenses;
