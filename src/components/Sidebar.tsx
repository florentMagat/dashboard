interface SidebarProps {
    hospitals: {
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
    }[];
    onSelectHospital: (index: number) => void;
  }
  
  const Sidebar: React.FC<SidebarProps> = ({ hospitals, onSelectHospital }) => {
    return (
      <div className="flex flex-col items-center bg-hachure p-4 w-[20vw] h-screen max-sm:h-auto fixed top-0 left-0 overflow-y-auto border-r-1 border-[#1e3e56] 
      max-sm:relative max-sm:w-[100vw]">
        <img src="/logo.png" className="w-[50%] mt-[3vh] max-sm:mt-[1vh] max-sm:w-[35%]"></img>
        <h1 className="text-3xl text-[#1e3e56] font-bold mb-4 mt-[3vh] max-sm:mt-[1.5vh] mb-[5vh] max-sm:mb-[1vh]">Dashboard</h1>
        <div className="p-2 w-full">
          {hospitals.map((hospital, index) => (
            <div
              key={index}
              className="bg-[#1e3e56] text-white text-center p-4 rounded-[12px] mb-4 max-sm:mb-2 cursor-pointer hover:bg-[#2a4a6a] max-sm:mb-[1.5vh]"
              onClick={() => onSelectHospital(index)}
            >
              <h3 className="text-lg font-bold">{hospital.name}</h3>
              <p className="text-sm">{hospital.location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Sidebar;