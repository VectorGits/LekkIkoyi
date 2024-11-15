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
            Explore our curated selection of premium properties, each offering a unique <br className='hidden md:block' /> glimpse into exceptional homes and investments. Click &quot;View Details&quot; to learn more.
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

// "use client"
// import SectionHeading from "@/components/Helper/SectionHeading";
// import React, { useEffect, useState } from "react";
// import PropertyCard from "./PropertyCard";
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// const Properties = () => {
//   const [properties, setProperties] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const db = getFirestore();

//   useEffect(() => {
//     const fetchProperties = async () => {
//       try {
//         const querySnapshot = await getDocs(collection(db, "properties"));
//         const fetchedProperties = querySnapshot.docs.map((doc) => ({
//           id: doc.id,
//           ...doc.data(),
//         }));
//         setProperties(fetchedProperties);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching properties:", err);
//         setError("Failed to load properties.");
//         setLoading(false);
//       }
//     };

//     fetchProperties();
//   }, [db]);

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p>Loading properties...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="flex justify-center items-center h-screen">
//         <p className="text-red-500">{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="pt-16 pb-16 bg-gray-100">
//       {/* Container */}
//       <div className="w-[90%] lg:w-[80%] mx-auto">
//         {/* Section Heading */}
//         <SectionHeading heading="Featured Properties" />

//         {/* Flex container to align the description and button */}
//         <div className="md:flex md:items-center md:justify-between mt-4">
//           <p className="text-center md:text-left text-gray-500 leading-relaxed">
//             Explore our curated selection of premium properties, each offering a
//             unique <br className="hidden md:block" /> glimpse into exceptional
//             homes and investments. Click &quot;View Details&quot; to learn more.
//           </p>

//           {/* Desktop 'View All Properties' Button */}
//           <div className="hidden md:block mt-4 md:mt-0">
//             <button className="bg-black text-white py-2 px-4 rounded-lg shadow hover:bg-gray-800 h-full">
//               View All Properties
//             </button>
//           </div>
//         </div>

//         {/* Property Cards */}
//         <div className="mt-10 md:mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
//           {properties.map((property) => (
//             <div key={property.id}>
//               <PropertyCard property={property} />
//             </div>
//           ))}
//         </div>

//         {/* Mobile 'View All Properties' Button */}
//         <div className="mt-6 flex justify-center md:hidden">
//           <button className="bg-black text-white py-2 px-6 rounded-lg shadow hover:bg-gray-800">
//             View All Properties
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Properties;
