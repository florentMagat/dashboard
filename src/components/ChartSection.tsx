import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface HospitalizationData {
  month: string;
  count: number;
  monthlyHospitalizations?: MonthlyHospitalization[];
}

interface MonthlyHospitalization {
  date: string;
  patients: number;
}

interface ChartSectionProps {
  data: HospitalizationData[];
}

const ChartSection: React.FC<ChartSectionProps> = ({ data }) => {
  if (data.length === 0) return null;

  const monthlyData = data.flatMap(hospital => hospital.monthlyHospitalizations ?? []);

  console.log('Monthly Data:', monthlyData); // Ajoutez ce log pour vérifier les données

  const lineChartData = {
    labels: monthlyData.map(h => h.date),
    datasets: [
      {
        label: 'Patients',
        data: monthlyData.map(h => h.patients),
        borderColor: '#327ccb',
        backgroundColor: 'rgba(50, 124, 203, 0.2)',
      },
    ],
  };

  console.log('Line Chart Data:', lineChartData); // Ajoutez ce log pour vérifier les données du graphique

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="bg-white p-4 rounded-[15px] shadow text-center flex flex-col items-center">
        <h2 className="text-xl font-bold text-primary">Hospitalizations</h2>
        <Line data={lineChartData} />
      </div>
      <div className="bg-white p-4 rounded-[15px] shadow text-center flex flex-col items-center">
        <h2 className="text-xl font-bold text-primary">Another Chart</h2>
        <Line data={lineChartData} />
      </div>
    </div>
  );
}

export default ChartSection;