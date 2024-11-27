"use client";

import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { Listing } from '../../../types/listing';
import { FaBed, FaBath, FaSquare } from "react-icons/fa6";


const Listings = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const router = useRouter();
  const [properties, setProperties] = useState<Listing[]>([]); // Explicit type added

  const db = getFirestore();

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
            price: data.price || "N/A",
            size: data.size || "Unknown Size",
            image: data.images?.[0] || "/placeholder-image.jpg", // First image or placeholder
            bedrooms: data.bedrooms || 0,
            bathrooms: data.bathrooms || 0,
            description: data.description || "No description available",
          };
        });
        setProperties(fetchedProperties);
      } catch (err) {
        console.error("Error fetching properties:", err);
      }
    };

    fetchProperties();
  }, [db]);

  const filteredListings = properties.filter((listing) => {
    const searchQuery = query.toLowerCase();
    return (
      listing.title.toLowerCase().includes(searchQuery) ||
      listing.location.toLowerCase().includes(searchQuery) ||
      listing.price.toString().includes(searchQuery) ||
      listing.size.toLowerCase().includes(searchQuery)
    );
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl mt-16 mb-4">Search Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredListings.length > 0 ? (
          filteredListings.map((listing) => (
            <div
              key={listing.id}
              onClick={() => router.push(`/details/${listing.id}`)}
              className="bg-white overflow-hidden group rounded-lg cursor-pointer shadow-lg"
            >
              <div className="relative">
                <Image
                  src={listing.image}
                  alt={listing.title}
                  width={350}
                  height={250}
                  className="w-full object-cover h-[220px] group-hover:scale-110 transition-all duration-300"
                />
                <h1 className="px-6 absolute bottom-4 left-4 py-1.5 text-sm bg-black text-white rounded-lg">
                  <span className="text-lg font-bold">${listing.price}</span>
                </h1>
              </div>
              <div className="p-5">
                <h1 className="text-lg font-bold text-gray-900 group-hover:underline">
                  {listing.title}
                </h1>
                <p className="text-sm text-gray-500 mt-2">{listing.location}</p>
                <div className="flex justify-between mt-4">
                  <div className="flex items-center space-x-2">
                    <FaBed className="text-rose-600" />
                    <p className="text-sm text-gray-600">
                      {listing.bedrooms} Beds
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaBath className="text-rose-600" />
                    <p className="text-sm text-gray-600">
                      {listing.bathrooms} Baths
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaSquare className="text-rose-600" />
                    <p className="text-sm text-gray-600">{listing.size}</p>
                  </div>
                </div>
                <div className="w-full h-[1px] my-4 bg-gray-300 opacity-50"></div>
                <div className="flex justify-between items-center">
                  <h1 className="text-sm text-gray-600">For Sale</h1>
                  <button
                    onClick={() => router.push(`/details/${listing.id}`)}
                    className="bg-rose-600 text-white py-2 px-4 rounded-lg"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No listings found</p>
        )}
      </div>
    </div>
  );
};

export default Listings;
