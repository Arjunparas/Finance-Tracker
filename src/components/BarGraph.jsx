import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from "@faker-js/faker";
import { Box } from '@chakra-ui/react';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };
  
  const labels = [ 'Mar', 'Apr', 'Ma', 'Jun', 'Jul',"Aug"];
  
 
  

const BarGraph = (props) => {
   const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        backgroundColor:props?.bgcolor,
        borderColor:props?.bdcolor,
      },
    ],
  };
  return (
    <Box w="100%">
    <Bar options={options} data={data} />
    </Box>
   
  )
}

export default BarGraph;