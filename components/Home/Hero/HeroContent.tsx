// HeroContent.jsx
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import SearchBox from '@/components/Helper/SearchBox';
import { FaHome, FaBuilding, FaCity } from 'react-icons/fa';

const HeroContent = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className='text-white text-opacity-80 text-center text-base sm:text-l uppercase font-medium border rounded py-2 px-2'
      >
        The Best Way To
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className='text-center font-semibold text-3xl sm:text-5xl text-white mt-4'
      >
        Find Your Dream Home
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className='mt-4 text-center text-sm sm:text-base text-gray-200'
      >
        We sell properties everywhere Ikoyi, Lekki & Epe
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className='mt-12 w-full'
      >
        <SearchBox />
      </motion.div>

      {/* ICONS FOR EXPLORE APARTMENTS */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4 }}
        className='mt-10 flex space-x-3 justify-center'
      >
        <div className='bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-[35px] flex items-center gap-2 justify-start w-[100px] h-[35px] sm:w-[125px] sm:h-[40px]'>
          <div className='w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center'>
            <FaHome size={18} className='text-[#444]' /> {/* Lighter shade of black */}
          </div>
          <p className='text-white text-[9px] sm:text-[10px]'>Modern Homes</p> {/* Reduced font size */}
        </div>
        <div className='bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-[35px] flex items-center gap-2 justify-start w-[100px] h-[35px] sm:w-[120px] sm:h-[40px]'>
          <div className='w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center'>
            <FaBuilding size={18} className='text-[#444]' /> {/* Lighter shade of black */}
          </div>
          <p className='text-white text-[9px] sm:text-[10px]'>Apartments</p> {/* Reduced font size */}
        </div>
        <div className='bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-[35px] flex items-center gap-2 justify-start w-[100px] h-[35px] sm:w-[120px] sm:h-[40px]'>
          <div className='w-7 h-7 sm:w-8 sm:h-8 bg-white rounded-full flex items-center justify-center'>
            <FaCity size={18} className='text-[#444]' /> {/* Lighter shade of black */}
          </div>
          <p className='text-white text-[9px] sm:text-[10px]'>Town Houses</p> {/* Reduced font size */}
        </div>
      </motion.div>
    </>
  );
};

export default HeroContent;
