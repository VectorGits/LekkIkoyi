// "use client"

// import React, { useEffect, useState } from 'react'
// import { FaHouse } from 'react-icons/fa6'
// import { FaWhatsapp } from 'react-icons/fa';
// import Link from 'next/link'  // Import the Next.js Link component
// import { HiBars3BottomRight } from 'react-icons/hi2';
// import { navLinks } from '@/constant/Constant';




// type Props = {
//     openNav: () => void
// }

// const Nav = ({openNav}: Props) => {

//     const [navBg, setNavBg] = useState(false);

//     useEffect(() => {
//         const handler =() => {
//             if(window.scrollY >= 90) setNavBg(true);
//             if(window.scrollY < 90) setNavBg(false);
//         }

//         window.addEventListener('scroll', handler);
//         return() => {
//             window.removeEventListener('scroll', handler);
//         }

//     }, []);


//   return (
//     <div className={`fixed ${navBg ? 'bg-black' : ""} h-[10vh] z-[100] w-full transition-all duration-20 `}>
//       <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
//             {/* LOGO */}
//             <div className='flex items-center space-x-2'>
//                 <div className='md:w-10  md:h-10 w-7 h-7 rounded-full bg-rose-700 text-white flex items-center justify-center flex-col'>
//                     <FaHouse />
//                 </div>
//                 <h1 className='text-white font-bold text-sm sm:text-base md:text-xl '>LEI</h1>
//             </div>
//             {/* NAVIGATION LINKS */}
//             <div className='lg:flex items-center space-x-14 text-white hidden '>
//                 {navLinks.map((navLink) => (
//                     <Link key={navLink.id} href={navLink.url}>
//                         <p className='font-medium text-white hover:text-yellow-300 cursor-pointer'>{navLink.label}</p>
//                     </Link>
//                 ))}
//             </div>
//             {/* LOGIN AND RESPONSIVE MENU */}
//             <div className='flex items-center space-x-4'>
//                 {/* LOGINBUTTON */}
//                 <div className='flex items-center cursor-pointer rounded-full text-white space-x-2 hover:text-rose-400 transition-all duration-200'><FaWhatsapp className='w-5 h-5 '/> <p className='font-bold text-xs sm:text-base'> 888-888-888</p></div>
//                 {/* RESPONSIVE MENU */}
//                 <HiBars3BottomRight  onClick={openNav}  className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden'/>
//             </div>
//       </div>
//     </div>
//   );
// };

// export default Nav;



"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaPhone} from 'react-icons/fa';
import Link from 'next/link';
import { HiBars3BottomRight } from 'react-icons/hi2';

// Updated navLinks based on your request
const navLinks = [
  { id: 1, label: "Home", url: "/" },
  { id: 2, label: "About Us", url: "/about" },
  { id: 3, label: "Properties", url: "/properties" },
  { id: 4, label: "Contact", url: "/contact" }
];

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      else setNavBg(false);
    };

    window.addEventListener('scroll', handler);
    return () => {
      window.removeEventListener('scroll', handler);
    };
  }, []);

  return (
    <div className={`fixed ${navBg ? 'bg-gray-600' : 'bg-gray-400'} h-[10vh] z-[100] w-full transition-all duration-200`}>
      <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
        
        {/* LOGO */}
        <div className='flex items-center space-x-2'>
          <div className='relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden '>
            <Image 
              src="/images/1.png" // Ensure this path is correct in your public folder
              alt="Logo"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        
        {/* NAVIGATION LINKS */}
        <div className='lg:flex items-center space-x-14 text-white hidden'>
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url}>
              <p className='font-medium text-white hover:text-yellow-300 cursor-pointer'>{navLink.label}</p>
            </Link>
          ))}
        </div>
        
        {/* LOGIN AND RESPONSIVE MENU */}
        <div className='flex items-center space-x-4'>
          {/* WHATSAPP BUTTON */}
          <div className='flex items-center cursor-pointer rounded-full text-white space-x-2 hover:text-rose-400 transition-all duration-200'>
            <FaPhone className='w-5 h-5' /> 
            <p className='font-bold text-xs sm:text-base'>+234-813-008-2248</p>
          </div>
          
          {/* RESPONSIVE MENU */}
          <HiBars3BottomRight onClick={openNav} className='sm:w-8 sm:h-8 w-6 h-6 cursor-pointer text-white lg:hidden' />
        </div>
      </div>
    </div>
  );
};

export default Nav






