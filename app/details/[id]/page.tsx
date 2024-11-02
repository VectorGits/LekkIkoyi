"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { listingsData } from '../../../Data/data';
import { Listing } from '../../../types/listing';
import { FaLocationDot } from 'react-icons/fa6';
import { IoBed } from 'react-icons/io5';
import { GiBathtub } from 'react-icons/gi';
import { AiOutlineGroup } from 'react-icons/ai';
import { MdElectricBolt } from 'react-icons/md';
import { toast } from 'react-toastify';

const Page: React.FC = () => {
  const { id } = useParams();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);

  // Two states to hold the two main images displayed side-by-side
  const [mainImageLeft, setMainImageLeft] = useState<string | null>(null);
  const [mainImageRight, setMainImageRight] = useState<string | null>(null);
  
  // State to alternate image updates
  const [toggleImage, setToggleImage] = useState(true);

  const [isSmallScreen, setIsSmallScreen] = useState(false);

useEffect(() => {
  const mediaQuery = window.matchMedia('(max-width: 768px)');
  setIsSmallScreen(mediaQuery.matches);
  mediaQuery.addEventListener('change', () => setIsSmallScreen(mediaQuery.matches));
}, []);

  useEffect(() => {
    if (id) {
      const foundListing = listingsData.find(
        (listing: Listing) => listing.id === parseInt(id as string)
      );
      setListing(foundListing || null);

      // Set initial main images if images are available
      if (foundListing) {
        setMainImageLeft(foundListing.images[0] || null);
        setMainImageRight(foundListing.images[1] || null);
      }
    }
  }, [id]);

  useEffect(() => {
    toast.info('Loading property details...', { className: 'toast-gradient', theme: 'colo' });
    const foundListing = listingsData.find((listing) => listing.id === parseInt(id));
    setListing(foundListing || null);

    setLoading(false);
  }, [id]);

  if (!listing || !mainImageLeft || !mainImageRight) {
    return <p>Loading...</p>;
  }

  // Handle thumbnail click to change one of the main images
  const handleThumbnailClick = (image: string) => {
    if (isSmallScreen) {
      setMainImageLeft(image);
    } else {
      if (toggleImage) {
        setMainImageLeft(image);
      } else {
        setMainImageRight(image);
      }
      setToggleImage(!toggleImage);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      
      {/* Header with Title, Location, and Price */}
      <div className="flex mt-16 flex-col md:flex-row md:items-center space-x-4 space-y-4 md:space-y-0">
        <h1 className="text-xl text-nowrap font-semibold">{listing.title}</h1>
        <div className="flex w-full items-center md:justify-between space-x-2">
          <div className="flex items-center space-x-1 border-[1px] border-[#262626] p-2 rounded-md text-gray-600">
            <FaLocationDot className="text-lg" />
            <p className="text-sm">{listing.location.city}, {listing.location.state}</p>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-medium text-gray-500">Price</span>
            <span className="text-lg font-semibold">${listing.price.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="bg-black rounded-lg p-6">
         {/* Thumbnails */}
         <div className="md:flex flex-col lg:order-1 bg-black overflow-x-auto hidden lg:space-y-4">
          <div className="flex space-x-2 overflow-x-auto   border-gray-500 border-[0.1px]    bg-[#262626] bg-opacity-50 p-2 rounded-lg lg:mb-4">
              {listing.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`thumbnail-${idx}`}
                  onClick={() => handleThumbnailClick(image)} // Change main image on click
                  className={`w-28 h-20 object-cover rounded cursor-pointer border-2 ${
                    (mainImageLeft === image || mainImageRight === image) ? 'border-white' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Main Images Display */}
          <div className="flex space-x-4 lg:flex-row lg:space-y-0 lg:justify-center">
            {/* Left Main Image */}
            <div className="md:w-1/2 h-80 lg:h-[400px] bg-black rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={mainImageLeft}
                alt={`${listing.title} - left view`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Right Main Image */}
            {!isSmallScreen && (
              <div className="w-1/2 h-80 lg:h-[400px] bg-black rounded-lg overflow-hidden md:flex items-center justify-center">
                <img
                  src={mainImageRight}
                  alt={`${listing.title} - right view`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            )}
          </div>

          <div className="flex flex-col lg:order-1 bg-black overflow-x-auto md:hidden lg:space-y-4">
          <div className="flex space-x-2 overflow-x-auto   border-gray-500 border-[0.1px]  mt-8  bg-[#262626] bg-opacity-50 p-2 rounded-lg lg:mb-4">
              {listing.images.map((image, idx) => (
                <img
                  key={idx}
                  src={image}
                  alt={`thumbnail-${idx}`}
                  onClick={() => handleThumbnailClick(image)} // Change main image on click
                  className={`w-28 h-20 object-cover rounded cursor-pointer border-2 ${
                    (mainImageLeft === image || mainImageRight === image) ? 'border-white' : 'border-transparent'
                  }`}
                />
              ))}
            </div>
          </div>
      </div>

      {/* Description and Property Details */}
      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">

        {/* Description Section */}
        <div className="flex-1 bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Description</h2>
          <p className="text-gray-600 mb-6">{listing.description}</p>
          <div className="grid grid-cols-3 gap-4 text-center">
           <div >
           
            <div className="flex space-x-1">
              <IoBed />
              <p className="text-gray-500 text-xs md:text-sm">Bedrooms</p>
              
            </div>
            <p className="md:text-xl text-sm text-left font-bold">{listing.bedrooms}</p>
           </div>
            <div>
              <div className="flex space-x-1">
                <GiBathtub />
                <p className="text-gray-500 text-xs md:text-sm">Bathrooms</p>
              </div>
              <p className="md:text-xl text-sm text-left font-bold">{listing.bathrooms}</p>
            </div>
            <div>
              <div className="flex space-x-1">
                <AiOutlineGroup />
                <p className="text-gray-500 text-xs md:text-sm">Area</p>
              </div>
              <p className="md:text-xl text-sm text-left font-bold">{listing.size_sqft.toLocaleString()} Sq Ft</p>
            </div>
          </div>
        </div>

        {/* Key Features and Amenities Section */}
        <div className="flex-1 bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Key Features and Amenities</h2>
          <ul className="space-y-3">
            {listing.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-3 bg-black text-white rounded-md p-3">
                 <MdElectricBolt />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;

