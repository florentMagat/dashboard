import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface MonthlyHospitalization {
  month: string;
  year: number;
  value: number;
}

interface HospitalizationsChartProps {
  data: MonthlyHospitalization[];
}

const HospitalizationsChart: React.FC<HospitalizationsChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(h => `${h.month} ${h.year}`),
    datasets: [
      {
        label: 'Number of Hospitalizations per month',
        data: data.map(h => h.value),
        borderColor: '#327ccb',
        backgroundColor: 'rgba(50, 124, 203, 0.2)',
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded-[15px] shadow text-center flex flex-col items-center w-[50vw] max-sm:w-[90vw]">
      <div className='flex flex-row items-center gap-[1vw] mb-[5vh]'>
        <img src='public/hospitalizations.svg' className='h-[5vh]' />
        <h2 className="text-2xl font-bold text-primary">Hospitalizations</h2>
      </div>
      <Line data={chartData} />
    </div>
  );
}

export default HospitalizationsChart;