import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "Shipping-25%",
    "GST Tax-12%",
    "Ad Spend-35%",
    "Shopify-5%",
    "COGs-23%",
    "Mics-32%",
  ],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],

      backgroundColor: [
        "#0BAFFF",
        "#F79E1B",
        "#7663E5",
        "#4FBF67",
        "#FF5E2F",
        "#1AD492",
      ],
      borderColor: [
        "#0BAFFF",
        "#F79E1B",
        "#7663E5",
        "#4FBF67",
        "#FF5E2F",
        "#1AD492",
      ],
      borderWidth: 2,
    },
  ],
};

const ExpensesGraph = () => {
  return (
    <Box bg="#35373D" p={2} rounded="xl" h={{lg:"80vh",md:"40vh",sm:"40vh"}} pt={10}>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "white",
                font: {
                  size: 12,
                },
                padding: 10,
              },
              title: {
                display: true,
                color: "grey",
                padding: {
                  bottom: 10,
                },
                font: {
                  size: 13,
                },
              },
              position: "bottom",
            },
            legendDistance: {
              padding: 130, // dictates the space
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          maintainAspectRatio: true,
        }}
      />
    </Box>
  );
};

export default ExpensesGraph;
