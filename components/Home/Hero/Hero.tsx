// import SearchBox from '@/components/Helper/SearchBox'
// import React from 'react'
// import { FaHome, FaBuilding, FaCity } from 'react-icons/fa' 

// const Hero = () => {
//   return (
//     <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url("/images/hero.jpeg")] bg-cover bg-center'>
//       {/* BLACK OVERLAY */}
//       <div className='absolute inset-0 bg-black opacity-70'></div>

//       {/* CONTENT */}
//       <div className='flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10'>
//         <h1 className='text-white text-opacity-80 text-center text-base sm:text-l uppercase font-meduim border rounded py-2 px-2'>The Best Way To</h1>
//         <h1 className='text-center font-semibold text-3xl sm:text-5xl text-white mt-4'>Find Your Dream Home</h1>
//         <p className='mt-4 text-center text-sm sm:text-base text-gray-200'>We sell properties everywhere Ikoyi, Lekki & Epe</p>

//         <div className='mt-12 w-full'>
//             <SearchBox />
//         </div>

//         {/* ICONS FOR EXPLORE APARTMENTS */}
//         <div className='mt-10 flex space-x-3 justify-center'>
//             <div className='bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-[35px] flex items-center gap-2 justify-start w-[125px] h-[40px]'>
//                 <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
//                 <FaHome size={20} className='text-[#444]' /> {/* Lighter shade of black */}
//                 </div>
//                 <p className='text-white text-[10px]'> Modern Homes</p> {/* Reduced font size */}
//             </div>
//             <div className='bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-[35px] flex items-center gap-2 justify-start w-[120px] h-[40px]'>
//                 <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
//                 <FaBuilding size={20} className='text-[#444]' /> {/* Lighter shade of black */}
//                 </div>
//                 <p className='text-white text-[10px]'>Apartments</p> {/* Reduced font size */}
//             </div>
//             <div className='bg-white bg-opacity-20 backdrop-blur-md p-2 rounded-[35px] flex items-center gap-2 justify-start w-[120px] h-[40px]'>
//                 <div className='w-8 h-8 bg-white rounded-full flex items-center justify-center'>
//                 <FaCity size={20} className='text-[#444]' /> {/* Lighter shade of black */}
//                 </div>
//                 <p className='text-white text-[10px]'>Town Houses</p> {/* Reduced font size */}
//             </div>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Hero;


import SearchBox from '@/components/Helper/SearchBox'
import React from 'react'
import { FaHome, FaBuilding, FaCity } from 'react-icons/fa'


const Hero = () => {
  return (
    <div className='w-full pt-[4vh] md:pt-[12vh] h-screen bg-[#0f0715] overflow-hidden relative bg-[url("/images/hero.jpeg")] bg-cover bg-center'>
      {/* BLACK OVERLAY */}
      <div className='absolute inset-0 bg-black opacity-70'></div>

      {/* CONTENT */}
      <div className='flex justify-center items-center flex-col w-[95%] sm:w-[80%] h-full mx-auto relative z-10'>
        <h1 className='text-white text-opacity-80 text-center text-base sm:text-l uppercase font-medium border rounded py-2 px-2'>The Best Way To</h1>
        <h1 className='text-center font-semibold text-3xl sm:text-5xl text-white mt-4'>Find Your the Home of your dreams</h1>
        <p className='mt-4 text-center text-sm sm:text-base text-gray-200'>We sell properties everywhere. From Ikoyi to VI, and Lekki to Epe</p>

        <div className='mt-12 w-full'>
          <SearchBox  />
        </div>

        {/* ICONS FOR EXPLORE APARTMENTS */}
        <div className='mt-10 flex space-x-3 justify-center'>
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
        </div>
      </div>
    </div>
  )
}

export default Hero;
