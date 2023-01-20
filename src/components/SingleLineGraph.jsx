import React from 'react';
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
    maintainAspectRatio:true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
      },
    },
  };
  
  const labels = [
    "Dec10",
    "Dec 18",
    "Dec 26",
    "Jan 3",
    "Jan 9",
  ];

const SingleLineGraph = () => {
 

  const data = {
    labels,
    datasets: [

      {
        label: "Revenue",
        color:"white",
        data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
        borderColor: "#0BAFFF",
        backgroundColor: "#0BAFFF",
      },
    ],
  };

  return (
    <Box h="25vh" w="100%">
    <Line options={options} data={data} />
  </Box>
  )
}

export default SingleLineGraph