"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Listing } from '../../../types/listing';
import { FaLocationDot } from 'react-icons/fa6';
import { IoBed } from 'react-icons/io5';
import { GiBathtub } from 'react-icons/gi';
import { AiOutlineGroup } from 'react-icons/ai';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import Image from 'next/image';
// import { MdElectricBolt } from 'react-icons/md';

const Page: React.FC = () => {
  const { id } = useParams(); // Get the ID from the URL
  const [listing, setListing] = useState<Listing | null>(null);
  const [mainImageLeft, setMainImageLeft] = useState<string | null>(null);
  const [mainImageRight, setMainImageRight] = useState<string | null>(null);
  const [toggleImage, setToggleImage] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [properties, setProperties] = useState<Listing[]>([]);
  // const [error, setError] = useState("");

  const db = getFirestore();

  // Fetch all properties from Firebase
  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "properties"));
        const fetchedProperties: Listing[] = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title || "Untitled",
            location: data.location || "Unknown Location",
            price: data.price || 0,
            size: data.size || "Unknown Size",
            bedrooms: data.bedrooms || 0,
            bathrooms: data.bathrooms || 0,
            description: data.description || "No description available",
            images: data.images || [],
            type: data.type || "Unknown Type", // Default for missing fields
            size_sqft: data.size_sqft || 0,
            features: data.features || [],
            image: data.image || "",
          };
        });
        setProperties(fetchedProperties);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };
  
    fetchProperties();
  }, [db]);
  
  

  // Detect screen size changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsSmallScreen(mediaQuery.matches);
    const handleChange = () => setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Find and set the current listing based on the ID
  useEffect(() => {
    if (id && properties.length > 0) {
      const foundListing = properties.find((listing) => listing.id === id);
      setListing(foundListing || null);
  
      if (foundListing && Array.isArray(foundListing.images) && foundListing.images.length > 0) {
        setMainImageLeft(foundListing.images[0] || null);
        setMainImageRight(foundListing.images[1] || null);
      }
    }
  }, [id, properties]);
  

  // Handle thumbnail click to update main images
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

  if (!listing) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      <div className="flex mt-16 flex-col md:flex-row md:items-center space-x-4 space-y-4 md:space-y-0">
        <h1 className="text-xl font-semibold">{listing.title}</h1>
        <div className="flex w-full items-center md:justify-between space-x-2">
          <div className="flex items-center space-x-1 border-[1px] border-[#262626] p-2 rounded-md text-gray-600">
            <FaLocationDot className="text-lg" />
            <p className="text-sm">{listing.location}</p>
          </div>
          <div className="flex flex-col text-left">
            <span className="text-xs font-medium text-gray-500">Price</span>
            <span className="text-lg font-semibold">${listing.price.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="bg-black rounded-lg p-6">
        <div className="md:flex hidden flex-col lg:space-y-4">
          <div className="flex space-x-2 overflow-x-auto border-gray-500 bg-[#262626] p-2 rounded-lg">
            {listing.images?.map((image, idx) => (
              <Image
                width={100}
                height={100}
                key={idx}
                src={image}
                alt={`Thumbnail ${idx}`}
                onClick={() => handleThumbnailClick(image)}
                className={`w-28 h-20 object-cover rounded cursor-pointer border-2 ${
                  mainImageLeft === image || mainImageRight === image ? 'border-white' : 'border-transparent'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="flex space-x-4 lg:flex-row lg:space-y-0">
          <div className="md:w-1/2 h-80 bg-black rounded-lg overflow-hidden">
            <Image 
              width={100}
              height={100}
              src={mainImageLeft || ''}
              alt={`${listing.title} - left view`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          {!isSmallScreen && (
            <div className="w-1/2 h-80 bg-black rounded-lg overflow-hidden">
              <Image
                width={100}
                height={100}
                src={mainImageRight || ''}
                alt={`${listing.title} - right view`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="flex-1  bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Description</h2>
          <p className="text-gray-600 mb-6">{listing.description}</p>
          <div className="grid w-1/2 grid-cols-3 gap-4 ">
            <div>
              <IoBed />
              <p className="text-xs text-gray-500">Bedrooms</p>
              <p className="text-xl font-bold">{listing.bedrooms}</p>
            </div>
            <div>
              <GiBathtub />
              <p className="text-xs text-gray-500">Bathrooms</p>
              <p className="text-xl font-bold">{listing.bathrooms}</p>
            </div>
            <div>
              <AiOutlineGroup />
              <p className="text-xs text-gray-500">Size</p>
              <p className="text-xl font-bold">{listing.size}</p>
            </div>
          </div>
        </div>
      

        {/* Key Features and Amenities Section */}
        {/* <div className="flex-1 bg-white p-6 border border-gray-200 rounded-lg shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Key Features and Amenities</h2>
          <ul className="space-y-3">
            {listing.features.map((feature, idx) => (
              <li key={idx} className="flex items-center space-x-3 bg-black text-white rounded-md p-3">
                 <MdElectricBolt />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Page;

