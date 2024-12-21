// "use client"; // Add this if the component interacts with client-side hooks/DOM

// import Image from 'next/image';
// import React from 'react';

// type Props = {
//     city: {
//         id: number;
//         image: string;
//         cityName: string;
//         numberOfProperties: number;
//     }
// };

// const CityCard = ({ city }: Props) => {
//   return (
//     <div className='relative rounded-lg overflow-hidden m-2'>
//       <Image 
//         src={city.image} 
//         alt='Image' 
//         width={700} 
//         height={700} 
//         className='rounded-lg w-full h-[450px] object-cover'
//         />
      
//     </div>
//   );
// };

// export default CityCard;


"use client";

import Image from 'next/image';
import React from 'react';

type Props = {
    city: {
        id: number;
        image: string;
        cityName: string;
        numberOfProperties: number;
    }
};

const CityCard = ({ city }: Props) => {
  return (
    <div className='relative rounded-lg overflow-hidden m-2'>
      <Image 
        src={city.image} 
        alt="Image"
        width={700} 
        height={700} 
        className='rounded-lg w-full h-[450px] object-cover'
        />

        <div className='absolute inset-0 bg-black opacity-40'></div>
        <div className='absolute p-4 top-4'>
            <h1 className='text-lg font-semibold text-white'>{city.cityName}</h1>
            <p className='text-gray-200'>{city.numberOfProperties} Properties</p>
        </div>
     
    </div>
  );
};

export default CityCard;
