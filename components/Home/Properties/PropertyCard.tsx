// /* eslint-disable react/no-unescaped-entities */
// import Image from 'next/image';
// import React from 'react';
// import { FaBath, FaBed, FaSquare } from 'react-icons/fa6';
// import { MdElectricBolt } from 'react-icons/md';

// type Props = {
//   property: {
//     id: number;
//     propertyName: string;
//     location: string;
//     bedrooms: number;
//     bathrooms: number;
//     size: number;
//     price: number;
//     imageUrl: string;
//   };
// };

// const PropertyCard = ({ property }: Props) => {
//   return (
//     <div className='bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg'>
//       {/* Image */}
//       <div className='relative'>
//         <Image
//           src={property.imageUrl}
//           alt={property.propertyName}
//           width={350}
//           height={250}
//           className='w-full object-cover h-[220px] group-hover:scale-110 transition-all duration-300'
//         />
//         {/* Price */}
//         <h1 className='px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black text-white rounded-lg'>
//           <span className='text-lg font-bold'>${property.price}</span>
//         </h1>
//         {/* Featured */}
//         <div className='flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-rose-600 text-white rounded-md font-bold'>
//           <MdElectricBolt />
//           <span>Featured</span>
//         </div>
//       </div>

//       {/* Property Info */}
//       <div className='p-5'>
//         <h1 className='text-lg font-bold text-gray-900 group-hover:underline'>{property.propertyName}</h1>
//         <p className='text-sm text-gray-500 mt-2'>{property.location}</p>
//         {/* Property Details */}
//         <div className='flex justify-between mt-4'>
//           <div className='flex items-center space-x-2'>
//             <FaBed className='text-rose-600' />
//             <p className='text-sm text-gray-600'>{property.bedrooms} Beds</p>
//           </div>
//           <div className='flex items-center space-x-2'>
//             <FaBath className='text-rose-600' />
//             <p className='text-sm text-gray-600'>{property.bathrooms} Baths</p>
//           </div>
//           <div className='flex items-center space-x-2'>
//             <FaSquare className='text-rose-600' />
//             <p className='text-sm text-gray-600'>{property.size} Sq Ft</p>
//           </div>
//         </div>
//         <div className='w-full h-[1px] my-4 bg-gray-300 opacity-50'></div>
//         {/* Call to Action */}
//         <div className='flex justify-between items-center'>
//           <h1 className='text-sm text-gray-600'>For Sale</h1>
//           <button className='bg-rose-600 text-white py-2 px-4 rounded-lg'>
//             View Property Details
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;

/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import React from 'react';
import { FaBath, FaBed, FaSquare } from 'react-icons/fa6';
import { MdElectricBolt } from 'react-icons/md';

type Props = {
  property: {
    id: number;
    title: string;
    location: string;
    bedrooms: number;
    bathrooms: number;
    size: number;
    price: number;
    images: string[]; // Array of image URLs
  };
};

const PropertyCard = ({ property }: Props) => {
  // Get the first image or a placeholder
  const imageUrl = property.images?.[0] || '/placeholder-image.jpg';

  return (
    <div className='bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg'>
      {/* Image */}
      <div className='relative'>
        <Image
          src={imageUrl}
          alt={property.title}
          width={350}
          height={250}
          className='w-full object-cover h-[220px] group-hover:scale-110 transition-all duration-300'
        />
        {/* Price */}
        <h1 className='px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black text-white rounded-lg'>
          <span className='text-lg font-bold'>${property.price}</span>
        </h1>
        {/* Featured */}
        <div className='flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-rose-600 text-white rounded-md font-bold'>
          <MdElectricBolt />
          <span>Featured</span>
        </div>
      </div>

      {/* Property Info */}
      <div className='p-5'>
        <h1 className='text-lg font-bold text-gray-900 group-hover:underline'>{property.title}</h1>
        <p className='text-sm text-gray-500 mt-2'>{property.location}</p>
        {/* Property Details */}
        <div className='flex justify-between mt-4'>
          <div className='flex items-center space-x-2'>
            <FaBed className='text-rose-600' />
            <p className='text-sm text-gray-600'>{property.bedrooms} Beds</p>
          </div>
          <div className='flex items-center space-x-2'>
            <FaBath className='text-rose-600' />
            <p className='text-sm text-gray-600'>{property.bathrooms} Baths</p>
          </div>
          <div className='flex items-center space-x-2'>
            <FaSquare className='text-rose-600' />
            <p className='text-sm text-gray-600'>{property.size} Sq Ft</p>
          </div>
        </div>
        <div className='w-full h-[1px] my-4 bg-gray-300 opacity-50'></div>
        {/* Call to Action */}
        <div className='flex justify-between items-center'>
          <h1 className='text-sm text-gray-600'>For Sale</h1>
          <button className='bg-rose-600 text-white py-2 px-4 rounded-lg'>
            View Property Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
