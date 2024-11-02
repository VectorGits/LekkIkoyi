"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { listingsData } from '../../Data/data';
import Image from 'next/image';
import { MdElectricBolt } from 'react-icons/md';
import { FaBed } from 'react-icons/fa';
import { FaBath, FaSquare } from 'react-icons/fa6';
import { toast } from 'react-toastify';
const Listings = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   toast.info('Loading listings...', { className: 'toast-gradient', theme: 'rose' });
   setLoading(true);

   setTimeout(() => setLoading(false), 1000); // Simulate async fetch delay

   return () => toast.dismiss(); // Clear toasts on unmount
 }, [query]);

  const filteredListings = listingsData.filter((listing) => {
    const searchQuery = query.toLowerCase();
    
    // Check if any field in the listing matches the search query
    const matchQuery =
      listing.location.city.toLowerCase().includes(searchQuery) ||
      listing.type.toLowerCase().includes(searchQuery) ||
      listing.price.toString().includes(searchQuery);

    return matchQuery;
  });

  return (
      <div className='p-6'> 
         <h2 className='text-2xl mt-16 mb-4'>
            Search Results
         </h2> 
         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'> 
            {filteredListings.length > 0 ? ( filteredListings.map((listing) => (
               <div key={listing.id} onClick={() => router.push(`/details/${listing.id}`)}
               className='bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg' 
               >
                  {/* <img src={listing.images[0]} alt={listing.title} className='w-full h-40 object-cover' /> */}
                  {/* Image */}
                  <div className='relative'>
                     <Image
                        src={listing.images[0]}
                        alt={listing.title}
                        width={350}
                        height={250}
                        className='w-full object-cover h-[220px] group-hover:scale-110 transition-all duration-300'
                     />
                     {/* Price */}
                     <h1 className='px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black text-white rounded-lg'>
                        <span className='text-lg font-bold'>${listing.price.toLocaleString()}</span>
                     </h1>
                     {/* Featured */}
                     <div className='flex items-center space-x-1 px-6 absolute top-4 left-4 py-2 text-sm bg-rose-600 text-white rounded-md font-bold'>
                        <MdElectricBolt />
                        <span>Featured</span>
                     </div>
                  </div>
                  {/* Property Info */}
                  <div className='p-5'>
                  <h1 className='text-lg font-bold text-gray-900 group-hover:underline'>{listing.title}</h1>
                  <p className='text-sm text-gray-500 mt-2'> {listing.location.city}, {listing.location.state}</p>
                  {/* Property Details */}
                  <div className='flex justify-between mt-4'>
                     <div className='flex items-center space-x-2'>
                        <FaBed className='text-rose-600' />
                        <p className='text-sm text-gray-600'>{listing.bedrooms} Beds</p>
                     </div>
                     <div className='flex items-center space-x-2'>
                        <FaBath className='text-rose-600' />
                        <p className='text-sm text-gray-600'>{listing.bathrooms} Baths</p>
                     </div>
                     <div className='flex items-center space-x-2'>
                        <FaSquare className='text-rose-600' />
                        <p className='text-sm text-gray-600'>{listing.size_sqft} Sq Ft</p>
                     </div>
                  </div>
                  <div className='w-full h-[1px] my-4 bg-gray-300 opacity-50'></div>
                  {/* Call to Action */}
                  <div className='flex justify-between items-center'>
                     <h1 className='text-sm text-gray-600'>For Sale</h1>
                     <button onClick={() => router.push(`/details/${listing.id}`)} className='bg-rose-600 text-white py-2 px-4 rounded-lg'>
                        View Property Details
                     </button>
                  </div>
                  </div>
               </div>
             ))
            ): (
                <p>No listings found</p>
            )} 
         </div> 
         
      </div> 
   );
};

export default Listings;
