interface Overview {
    totalPatients: number;
    satisfactionRate: string;
    totalTreatments: number;
    numberOfDoctors: number;
    numberOfNurses: number;
  }
  
  interface HospitalInfoProps {
    name: string;
    location: string;
    overview: Overview;
  }
  
  const HospitalInfo: React.FC<HospitalInfoProps> = ({ name, overview }) => {

    return (
      <div className="bg-[#1e3e56] text-[#f7fbff] flex flex-row justify-around p-6 items-center rounded shadow-md w-[70vw] max-sm:w-[90vw] max-sm::flex-col max-sm::items-center max-sm::text-center rounded-[15px]">
        <div>
          <h2 className="text-3xl font-bold mb-2">{name}</h2>  
        </div>
        <div className="grid grid-cols-1 gap-4">
        <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m9 16h1c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66c-.43-.22-.89-.43-1.39-.62zm-4.66-5L15 11.33c-.93-.21-1.93-.33-3-.33c-2.53 0-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 15.22V22h2.34c-.22-.45-.34-.96-.34-1.5C6 18.57 7.57 17 9.5 17zM10 22l1.41-3H9.5c-.83 0-1.5.67-1.5 1.5S8.67 22 9.5 22z"/></svg>
            <div className="ml-[1vw]">{overview.totalPatients.toLocaleString()} Patients</div>
          </div>
          <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M211.1 33c-25.9 0-49.4 2.68-65.7 6.76c-8.2 2.04-14.6 4.51-18.2 6.65c-1.3.78-1.7 1.18-2.1 1.59c.4.41.8.81 2.1 1.59c3.6 2.14 10 4.61 18.2 6.65c16.3 4.08 39.8 6.76 65.7 6.76s49.4-2.68 65.7-6.76c8.2-2.04 14.6-4.51 18.2-6.65c1.3-.78 1.7-1.18 2.1-1.59c-.4-.41-.8-.81-2.1-1.59c-3.6-2.14-10-4.61-18.2-6.65C260.5 35.68 237 33 211.1 33m-87 35.13v40.07c6.5 3.3 15 6.6 21.3 8.2c16.3 4.1 39.8 6.8 65.7 6.8s49.4-2.7 65.7-6.8c12-2.9 13.4-3.2 21.3-8.2V68.13c-4.9 2.16-10.5 3.97-16.9 5.57c-18.5 4.61-43 7.3-70.1 7.3s-51.6-2.69-70.1-7.3c-6.4-1.6-12-3.41-16.9-5.57m8.6 63.47c-8.3 2.9-16.5 8.1-23.2 14.8C98.88 156.9 92.1 171 92.1 184v64c0 5 2.2 9.3 7.86 14.2c5.64 4.8 14.74 9.5 25.94 13.3c22.6 7.5 53.9 11.5 85.2 11.5c31.2 0 62.6-4 85.2-11.5c11.2-3.8 20.3-8.5 25.9-13.3c5.7-4.9 7.9-9.2 7.9-14.2v-64c0-13-6.8-27.1-17.4-37.6c-6.7-6.7-14.8-11.9-23.2-14.8c-2.6.8-5.4 1.6-8.3 2.3c-18.5 4.6-43 7.3-70.1 7.3s-51.6-2.7-70.1-7.3c-2.9-.7-5.7-1.5-8.3-2.3M92.1 278.9V344c0 5 2.2 9.3 7.86 14.2c5.64 4.8 14.74 9.5 25.94 13.3c22.6 7.5 53.9 11.5 85.2 11.5c31.2 0 62.6-4 85.2-11.5c11.2-3.8 20.3-8.5 25.9-13.3c5.7-4.9 7.9-9.2 7.9-14.2v-65.1c-7.8 5.6-17.3 10-28.2 13.6c-25.4 8.5-58.1 12.5-90.8 12.5c-32.8 0-65.4-4-90.8-12.5c-10.9-3.6-20.45-8-28.2-13.6m0 96V440c0 5 2.2 9.3 7.86 14.2c5.64 4.8 14.74 9.5 25.94 13.3c22.6 7.5 53.9 11.5 85.2 11.5c17.5 0 35.2-1.3 51.2-3.7c-3.2-4.5-5.2-9.6-5.2-15.4c0-11.8 8.3-21.1 18.7-26.9c6.3-3.6 13.8-6.1 22-7.6c2.2-8.9 9.4-16 17.9-20.8c4.3-2.4 9.2-4.4 14.4-5.9v-23.8c-7.8 5.6-17.3 10-28.2 13.6c-25.4 8.5-58.1 12.5-90.8 12.5c-32.8 0-65.4-4-90.8-12.5c-10.9-3.6-20.45-8-28.2-13.6M354 413.6c-11.9 0-22.6 2.8-29.5 6.7c-2.3 1.3-4 2.6-5.4 3.8c12.6.7 24.2 3.8 33.3 8.9c6.2 3.5 11.7 8.2 15 13.9c3-7.5 9.4-13.6 17-17.8c2-1.1 4.1-2.1 6.3-3.1c-1.5-1.8-3.8-3.8-7.2-5.7c-6.9-3.9-17.6-6.7-29.5-6.7m68.7 24.5c-11.9 0-22.6 2.8-29.5 6.7c-7 3.9-9.5 8.1-9.5 11.2s2.5 7.3 9.5 11.2c6.9 3.9 17.6 6.7 29.5 6.7s22.6-2.8 29.5-6.7c7-3.9 9.5-8.1 9.5-11.2s-2.5-7.3-9.5-11.2c-6.9-3.9-17.6-6.7-29.5-6.7M314.1 442c-11.9 0-22.6 2.8-29.5 6.7c-7 3.9-9.5 8.1-9.5 11.2s2.5 7.3 9.5 11.2c6.9 3.9 17.6 6.7 29.5 6.7s22.6-2.8 29.5-6.7c7-3.9 9.5-8.1 9.5-11.2s-2.5-7.3-9.5-11.2c-6.9-3.9-17.6-6.7-29.5-6.7"/></svg>
            <div className="ml-[1vw]">{overview.totalTreatments.toLocaleString()} Treatments</div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex flex-row">
            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 50 50"><path fill="currentColor" d="M42.924 13H38V7.774C38 4.038 35.052 1 31.306 1H18.695C14.947 1 12 4.038 12 7.774V13H7.075C3.719 13 1 15.591 1 18.937v23.007C1 45.289 3.719 48 7.075 48h35.849C46.279 48 49 45.289 49 41.943V18.937C49 15.591 46.279 13 42.924 13M16 7.774C16 6.375 17.292 5 18.695 5h12.611C32.705 5 34 6.375 34 7.774V13H16zM36 35h-7v7h-8v-7h-7v-8h7v-7h8v7h7z"/></svg>
            <div className="ml-[1vw]">{overview.numberOfDoctors.toLocaleString()} Doctors</div>
          </div>
          <div className="flex flex-row">
          <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 16 16"><path fill="currentColor" d="M15.2 12a4.08 4.08 0 0 0-3.931-2.37L8 13.53l-3.28-3.9a4.16 4.16 0 0 0-3.909 2.345a9.1 9.1 0 0 0-.808 2.988L2 15v1h12v-1h2a9.2 9.2 0 0 0-.824-3.057z"/><path fill="currentColor" d="M6.57 8.73a.82.82 0 0 1-.685.729L8 12l2.12-2.52a.82.82 0 0 1-.69-.727c0-.613.8-.413 1.43-1.453C10.86 7.27 13.74 0 8 0S5.14 7.27 5.14 7.27c.63 1.05 1.44.85 1.43 1.46"/></svg>
            <div className="ml-[1vw]">{overview.numberOfNurses.toLocaleString()} Nurses</div>
          </div>
        </div>
        <div className="flex flex-row text-align font-semibold">Satisfaction Rate :  {overview.satisfactionRate}</div>
      </div>
    );
  }
  
  export default HospitalInfo;