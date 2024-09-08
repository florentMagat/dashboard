import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Specialty {
  specialty: string;
  numberOfDoctors: number;
  satisfactionRate: string; 
}

interface DoctorSpecialtiesProps {
  specialties: Specialty[];
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

const getSatisfactionIcon = (rate: number) => {
  const imgStyle = { height: '4vh' };

  if (isNaN(rate)) {
    return null;
  }

  if (rate < 70) {
    return <img src="/thermometer-low.svg" alt="Low Satisfaction" style={imgStyle} />;
  } else if (rate >= 70 && rate < 85) {
    return <img src="/thermometer-medium.svg" alt="Medium Satisfaction" style={imgStyle} />;
  } else {
    return <img src="/thermometer-good.svg" alt="High Satisfaction" style={imgStyle} />;
  }
};

const getSatisfactionColor = (rate: number) => {
  if (rate < 70) {
    return '#cf1313';
  } else if (rate >= 70 && rate < 85) {
    return '#f99f1d';
  } else {
    return '#37a31a';
  }
};

const DoctorSpecialties: React.FC<DoctorSpecialtiesProps> = ({ specialties }) => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <NextArrow className="" style={{}} onClick={() => {}} />,
    prevArrow: <PrevArrow className="" style={{}} onClick={() => {}} />,
  };

  return (
    <div className="bg-white p-4 text-center rounded-[15px] shadow w-[50vw] max-sm:w-[90vw]">
      <div className='flex flex-row justify-center items-center gap-[1vw]  mb-[3vh]'>
        <img src='public/doctor-specialties.svg' className='h-[5vh]' />
        <h2 className="text-2xl font-bold text-primary">Doctor Specialties</h2>
      </div>
      <div className='pb-[3vh]'>
        <Slider {...settings}>
          {specialties.map((specialty, index) => {
            const rate = parseFloat(specialty.satisfactionRate.replace('%', ''));
            const rateColor = getSatisfactionColor(rate);
            return (
              <div key={index} className="flex flex-col justify-around text-center mb-2 text-primary">
                <h3 className='mb-2 text-lg'><strong>{specialty.specialty}</strong></h3> 
                <div className='flex flex-row justify-center gap-[1vw] mb-1'>
                  <p>{specialty.numberOfDoctors} doctors</p>
                  <svg xmlns="http://www.w3.org/2000/svg" width="1.25em" height="1.5em" viewBox="0 0 50 50"><path fill="currentColor" d="M42.924 13H38V7.774C38 4.038 35.052 1 31.306 1H18.695C14.947 1 12 4.038 12 7.774V13H7.075C3.719 13 1 15.591 1 18.937v23.007C1 45.289 3.719 48 7.075 48h35.849C46.279 48 49 45.289 49 41.943V18.937C49 15.591 46.279 13 42.924 13M16 7.774C16 6.375 17.292 5 18.695 5h12.611C32.705 5 34 6.375 34 7.774V13H16zM36 35h-7v7h-8v-7h-7v-8h7v-7h8v7h7z"/></svg>        
                </div>
                <div className="flex flex-row items-center justify-center" style={{ color: rateColor }}>
                  <span className='text-[#327ccb] mr-2'>Satisfaction Rate : {rate}% </span>{getSatisfactionIcon(rate)}
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default DoctorSpecialties;