import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Box } from "@chakra-ui/react";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [
    "AD Spend — 35% ",
    "COG — 25%",
    "Shipping — 12% ",
    "Tax — 20%",
    "Salary — 12%",
    "Domain — 42%",
  ],

  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "#0BAFFF",
        "#F79E1B",
        "#7663E5",
        "#1AD492",
        "#F20ECE",
        "#FF523D",
      ],
      borderColor: [
        "#0BAFFF",
        "#F79E1B",
        "#7663E5",
        "#1AD492",
        "#F20ECE",
        "#FF523D",
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutGraph = () => {
  return (
    <Box w="100%" h="33vh" pt={6}>
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
              position: "right",
            },
            // this is the id that is specified below
            legendDistance: {
              padding: 130, // dictates the space
            },
          },
          elements: {
            arc: {
              borderWidth: 0,
            },
          },
          responsive: false,
          maintainAspectRatio: true,
        }}
      />
    </Box>
  );
};

export default DoughnutGraph;
