interface KPISectionProps {
    data: {
      overview: {
        totalPatients: number;
        totalTreatments: number;
        numberOfDoctors: number;
        numberOfNurses: number;
      };
    }[];
  }
  
  const KPISection: React.FC<KPISectionProps> = ({ data }) => {
    if (data.length === 0) return null;
  
    const totalPatients = data.reduce((sum, hospital) => sum + hospital.overview.totalPatients, 0);
    const totalTreatments = data.reduce((sum, hospital) => sum + hospital.overview.totalTreatments, 0);
    const totalDoctors = data.reduce((sum, hospital) => sum + hospital.overview.numberOfDoctors, 0);
    const totalNurses = data.reduce((sum, hospital) => sum + hospital.overview.numberOfNurses, 0);
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 w-[80%]">
          <div className="bg-white p-4 rounded-[15px] shadow text-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary">Total Patients</h2>
          <p className="text-2xl text-primary">{totalPatients}</p>
        </div>
        <div className="bg-white p-4 rounded-[15px] shadow text-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary">Total Treatments</h2>
          <p className="text-2xl text-primary">{totalTreatments}</p>
        </div>
        <div className="bg-white p-4 rounded-[15px] shadow text-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary">Total Doctors</h2>
          <p className="text-2xl text-primary">{totalDoctors}</p>
        </div>
        <div className="bg-white p-4 rounded-[15px] shadow text-center flex flex-col items-center">
          <h2 className="text-xl font-bold text-primary">Total Nurses</h2>
          <p className="text-2xl text-primary">{totalNurses}</p>
        </div>
      </div>
    );
  }
  
  export default KPISection;