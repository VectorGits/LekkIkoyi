// import SectionHeading from '@/components/Helper/SectionHeading'
// import { properties } from '@/Data/data'
// import React from 'react'
// import PropertyCard from './PropertyCard'

// const Properties = () => {
//   return (
//     <div className='pt-16 pb-16 bg-gray-100'>
//         <div className='w-[80%] mx-auto'>
//             <SectionHeading heading='Discover Featured Properties '/>
//             <div className='mt-10 md:mt-20 grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 items-center'>
//               {properties.map((property) => {
//                 return <div key={property.id}>
//                    <PropertyCard  property={property}/>
//                 </div>
//               })}
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Properties



import SectionHeading from '@/components/Helper/SectionHeading';
import { properties } from '@/Data/data';
import React from 'react';
import PropertyCard from './PropertyCard';

const Properties = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
      {/* Container */}
      <div className='w-[90%] lg:w-[80%] mx-auto'>
        {/* Section Heading */}
        <SectionHeading heading='Featured Properties' />

        {/* Flex container to align the description and button */}
        <div className='md:flex md:items-center md:justify-between mt-4'>
          {/* Shortened and Line-Broken Description */}
          <p className='text-center md:text-left text-gray-500 leading-relaxed'>
            Explore our curated selection of premium properties, each offering a unique <br className='hidden md:block' /> glimpse into exceptional homes and investments. Click "View Details" to learn more.
          </p>

          {/* Desktop 'View All Properties' Button */}
          <div className='hidden md:block mt-4 md:mt-0'>
            <button className='bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800 h-full'>
              View All Properties
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className='mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
          {properties.map((property) => (
            <div key={property.id}>
              <PropertyCard property={property} />
            </div>
          ))}
        </div>

        {/* Mobile 'View All Properties' Button */}
        <div className='mt-6 flex justify-center md:hidden'>
          <button className='bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800'>
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default Properties;
