// "use client";
// import React from 'react';
// import Tilt from "react-parallax-tilt";
// import Image from 'next/image';

// type Props = {
//     building: {
//         id: number;
//         title: string;
//         description: string;
//         image: string;
//     };
// };

// const BuildingFeaturesCard = ({ building }: Props) => {
//   return (
//     <Tilt className='rounded-lg shadow-md p-4 bg-white'>
//         <div className='w-16 h-16 ml-auto flex items-center justify-center flex-col bg-gray-100 rounded-full'>
//             <Image 
//               src={building.image}  
//               alt={building.title} 
//               width={40} 
//               height={40} 
//               className="rounded-full"
//             />
//         </div>

//         <div className='p-2'>
//             <p className='mt-6 text-red-600 font-bold text-xl'>0{building.id}</p>
//             <p className='text-lg text-gray-700 font-bold mt-2 mb-2'>{building.title}</p>
//             <p className='text-sm opacity-70 text-gray-700'>{building.description}</p>
//         </div>
//     </Tilt>
//   );
// };

// export default BuildingFeaturesCard;



"use client";
import React from 'react';
import Tilt from "react-parallax-tilt";
import { FaCar, FaSwimmingPool, FaShieldAlt, FaClinicMedical, FaBook, FaBed } from 'react-icons/fa';

type Props = {
    building: {
        id: number;
        title: string;
        description: string;
    };
};

const getBuildingIcon = (id: number) => {
    switch (id) {
        case 1:
            return <FaCar className="text-gray-600 w-10 h-10" />;
        case 2:
            return <FaSwimmingPool className="text-gray-600 w-10 h-10" />;
        case 3:
            return <FaShieldAlt className="text-gray-600 w-10 h-10" />;
        case 4:
            return <FaClinicMedical className="text-gray-600 w-10 h-10" />;
        case 5:
            return <FaBook className="text-gray-600 w-10 h-10" />;
        case 6:
            return <FaBed className="text-gray-600 w-10 h-10" />;
        default:
            return null;
    }
};

const BuildingFeaturesCard = ({ building }: Props) => {
  return (
    <Tilt className='rounded-lg shadow-md p-4 bg-white'>
        <div className='w-16 h-16 ml-auto flex items-center justify-center bg-gray-100 rounded-full'>
            {getBuildingIcon(building.id)}
        </div>

        <div className='p-2'>
            <p className='mt-6 text-red-600 font-bold text-xl'>0{building.id}</p>
            <p className='text-lg text-gray-700 font-bold mt-2 mb-2'>{building.title}</p>
            <p className='text-sm opacity-70 text-gray-700'>{building.description}</p>
        </div>
    </Tilt>
  );
};

export default BuildingFeaturesCard;
