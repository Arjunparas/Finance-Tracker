import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: [ '30%', '35%', '8%', '15%', '12%'],
  color:"white",
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        '#39B9FB',
        '#F5B006',
        '#2BCE84',
        '#737DEA',
        '#F85626',
      ],
      borderColor: [
   
        '#39B9FB',
        '#F5B006',
        '#2BCE84',
        '#737DEA',
        '#F85626',
      ],
      borderWidth: 1,
    },
  ],
};

const PieChartGraph = () => {
  return (
    <Pie data={data} />
  )
}

export default PieChartGraph