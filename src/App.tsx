import React, { useEffect, useState } from 'react';
import HospitalInfo from './components/HospitalInfo';
import HospitalizationsChart from './components/HospitalizationsChart';
import DoctorSpecialties from './components/DoctorSpecialties';
import ClinicalTrials from './components/ClinicalTrials';
import HospitalDepartments from './components/HospitalDepartments';
import Sidebar from './components/Sidebar.tsx';

interface HospitalData {
  name: string;
  location: string;
  overview: {
    totalPatients: number;
    satisfactionRate: string;
    totalTreatments: number;
    numberOfDoctors: number;
    numberOfNurses: number;
  };
  monthlyHospitalizations: {
    month: string;
    year: number;
    value: number;
  }[];
  doctorSpecialties: {
    specialty: string;
    numberOfDoctors: number;
    satisfactionRate: string;
  }[];
  clinicalTrials: {
    name: string;
    status: string;
    startDate: string;
    endDate: string;
    totalPatients: number;
  }[];
  hospitalDepartments: {
    department: string;
    patientsPerDay: number;
    averageWaitTime: string;
  }[];
}

const App: React.FC = () => {
  const [hospitalData, setHospitalData] = useState<HospitalData[]>([]);
  const [selectedHospitalIndex, setSelectedHospitalIndex] = useState<number>(0);

  useEffect(() => {
    fetch('/assets/data/data_exemple1.json')
      .then(response => response.json())
      .then(data => setHospitalData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (hospitalData.length === 0) return <div>Loading...</div>;

  const selectedHospital = hospitalData[selectedHospitalIndex];

  return (
    <div className="container">
      <Sidebar hospitals={hospitalData} onSelectHospital={setSelectedHospitalIndex} />
      <div className="main-content">
        <div className="flex flex-col items-center space-y-8 mb-8">
        <HospitalInfo name={selectedHospital.name} location={selectedHospital.location} overview={selectedHospital.overview} />
          {selectedHospital.doctorSpecialties && selectedHospital.doctorSpecialties.length > 0 ? (
            <DoctorSpecialties specialties={selectedHospital.doctorSpecialties} />
          ) : (
            <div>No doctor specialties data available</div>
          )}
          {selectedHospital.clinicalTrials && selectedHospital.clinicalTrials.length > 0 ? (
            <ClinicalTrials trials={selectedHospital.clinicalTrials} />
          ) : (
            <div>No clinical trials data available</div>
          )}
          {selectedHospital.hospitalDepartments && selectedHospital.hospitalDepartments.length > 0 ? (
            <HospitalDepartments departments={selectedHospital.hospitalDepartments} />
          ) : (
            <div>No hospital departments data available</div>
          )}
          {selectedHospital.monthlyHospitalizations && selectedHospital.monthlyHospitalizations.length > 0 ? (
            <HospitalizationsChart data={selectedHospital.monthlyHospitalizations} />
          ) : (
            <div>No hospitalization data available</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;