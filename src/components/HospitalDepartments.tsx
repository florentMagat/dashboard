import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Arrows.css';

interface HospitalDepartment {
  department: string;
  patientsPerDay: number;
  averageWaitTime: string;
}

interface HospitalDepartmentsProps {
  departments: HospitalDepartment[];
}

interface ArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const NextArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-next-arrow`}
      style={{ ...style, display: 'block', right: '10px' }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-right"></i>
    </div>
  );
}

const PrevArrow: React.FC<ArrowProps> = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} custom-arrow custom-prev-arrow`}
      style={{ ...style, display: 'block', left: '10px' }}
      onClick={onClick}
    >
      <i className="fas fa-chevron-left"></i>
    </div>
  );
}

const HospitalDepartments: React.FC<HospitalDepartmentsProps> = ({ departments }) => {
  const [slidesToShow, setSlidesToShow] = useState(2);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(2);
      }
    };

    window.addEventListener('resize', handleResize);

    // Initial check
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-white p-4 text-center rounded-[15px] shadow w-[50vw] max-sm:w-[90vw]">
      <div className='flex flex-row justify-center items-center gap-[1vw] mb-[3vh] max-sm:text-center max-sm:block'>
        <img src='/hospital-departments.svg' className='h-[5vh] max-sm:h-[3vh] max-sm:mx-auto max-sm:mb-3' />
        <h2 className="text-2xl max-sm:text-lg font-bold text-primary">Hospital Departments</h2>
      </div>
      <div className='pb-[3vh]'>
        <Slider {...settings}>
        {departments.map((department, index) => {
            const waitTimeMatch = department.averageWaitTime.match(/(\d+)/);
            const waitTime = waitTimeMatch ? Number(waitTimeMatch[1]) : NaN;

            return (
              <div key={index} className="flex flex-col justify-around mb-2 text-primary">
                <h3 className='mb-2 text-lg'><strong>{department.department}</strong></h3> 
                <div className='flex flex-row justify-center gap-[1vw] mb-1 max-sm:flex max-sm:flex-col max-sm:items-center'>
                  <p>Patients per Day: {department.patientsPerDay}</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M8 6c0-2.21 1.79-4 4-4s4 1.79 4 4s-1.79 4-4 4s-4-1.79-4-4m9 16h1c1.1 0 2-.9 2-2v-4.78c0-1.12-.61-2.15-1.61-2.66c-.43-.22-.89-.43-1.39-.62zm-4.66-5L15 11.33c-.93-.21-1.93-.33-3-.33c-2.53 0-4.71.7-6.39 1.56A2.97 2.97 0 0 0 4 15.22V22h2.34c-.22-.45-.34-.96-.34-1.5C6 18.57 7.57 17 9.5 17zM10 22l1.41-3H9.5c-.83 0-1.5.67-1.5 1.5S8.67 22 9.5 22z"/>
                  </svg>
                </div>
                <div className='flex flex-row justify-center items-center gap-[0.5vw] max-sm:block'>
                  <p>Average waiting time : {department.averageWaitTime}</p>
                  {isNaN(waitTime) ? (
                    <p>Waiting time not available</p>
                  ) : waitTime < 30 ? (
                    <img src="/chronometer-green.svg" alt="Chronomètre vert" className='h-[3vh] max-sm:mx-auto' />
                  ) : waitTime < 45 ? (
                    <img src="/chronometer-orange.svg" alt="Chronomètre orange" className='h-[3vh] max-sm:mx-auto' />
                  ) : (
                    <img src="/chronometer-red.svg" alt="Chronomètre rouge" className='h-[3vh] max-sm:mx-auto' />
                  )}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default HospitalDepartments;
