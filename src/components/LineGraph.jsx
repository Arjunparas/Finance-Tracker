import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import { faker } from "@faker-js/faker";
import { Box } from '@chakra-ui/react';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Income  Vs Expences",
        color: "white",
      },
    },
  };
  
  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  
  export const data = {
    labels,
    datasets: [
      {
        label: "Income",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
        borderColor: "#5542F6",
        backgroundColor: "#5542F6",
      },
      {
        label: "Expences",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
        borderColor: "#00A5FF",
        backgroundColor: "#00A5FF",
      },
    ],
  };

const LineGraph = () => {
  return (
    <Box h="40vh" w="100%">
    <Line options={options} data={data} />
  </Box>
  )
}

export default LineGraph;