import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface ClinicalTrial {
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  totalPatients: number;
}

interface ClinicalTrialsProps {
  trials: ClinicalTrial[];
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

const ClinicalTrials: React.FC<ClinicalTrialsProps> = ({ trials }) => {
  return (
    <div className="bg-white p-4 text-center rounded-[15px] shadow w-[50vw] max-sm:w-[90vw]">
      <div className='flex flex-row justify-center items-center gap-[1vw] mb-[3vh] max-sm:block'>
        <img src='/clinical-trials.svg' className='h-[5vh] max-sm:mx-auto max-sm:mb-3' />
        <h2 className="text-2xl font-bold text-primary">Clinical Trials</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white text-center">
          <thead>
            <tr className='text-primary'>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Start Date</th>
              <th className="py-2 px-4 border-b">End Date</th>
              <th className="py-2 px-4 border-b">Total Patients</th>
            </tr>
          </thead>
          <tbody>
            {trials.map((trial, index) => (
              <tr key={index} className="text-primary">
                <td className="py-2 px-4 border-b font-semibold">{trial.name}</td>
                <td className="py-2 px-4 border-b">{trial.status === "In progress" ? 
                  <span className="text-orange-500 font-semibold">{trial.status}</span> : 
                  <span className="text-green-600 font-semibold">{trial.status}</span>}
                </td>
                <td className="py-2 px-4 border-b">{formatDate(trial.startDate)}</td>
                <td className="py-2 px-4 border-b">{formatDate(trial.endDate)}</td>
                <td className="py-2 px-4 border-b font-semibold">{trial.totalPatients.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ClinicalTrials;