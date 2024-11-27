'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
// import { toast } from 'react-toastify';

const SearchBox = () => {
  const [localQuery, setLocalQuery] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (localQuery.trim()) {
      // toast.info('Searching...', { className: 'toast-gradient', theme: 'rose' });
      router.push(`/listings?query=${localQuery}`);
    } 
  };

  return (
    <div className="w-full md:w-[50%] mx-auto bg-whit py-4 sm:py-6 px-4 sm:px-8 flex flex-col sm:flex-row justify-center rounded-lg shadow-md space-y-4 sm:space-y-0">
      <div className="flex items-center w-full">
        <input
          type="text"
          placeholder="Enter an address or city to buy"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.target.value)}
          className="flex-grow bg-gray-100 py-2 px-4 rounded-l-lg outline-none placeholder:text-sm text-gray-900 focus:ring-2 focus:from-rose-600 focus:to-rose-500"
        />
        <div onClick={handleSearch} className="w-12 h-12 bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] flex items-center hover:from-rose-500 hover:to-rose-600 transition-all duration-150 cursor-pointer justify-center text-white rounded-r-lg shadow-lg transform hover:scale-105">
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default SearchBox;
