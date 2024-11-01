// import Image from 'next/image';
// import React from 'react';
// import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
// import { FaX, FaXTwitter } from 'react-icons/fa6';

// const Footer = () => {
//   return (
//     <div className='pt-20 pb-12 bg-black'>
//         <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-8 border-b-[1.5px] border-white border-opacity-20'>
//             {/* LEFT FOOTER PART */}
//             <div>
//                 {/* <div className='flex items-center space-x-2'> */}
//                     <div className='relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-gray-200'>
//                         <Image
//                             src="/images/1.png" 
//                             alt="Logo"
//                             fill
//                             priority
//                             className="object-cover"
//                         />
//                     </div>

//                     <p className='text-gray-300 mt-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, sunt?</p>
//                     <p className='text-gray-300 mt-4 font-semibold'>example@gmail.com</p>
//                     <p className='text-gray-300 mt-2'>888 888 888</p>

//                     {/* SOCIAL LINKS  */}
//                     <div className='flex items-center space-x-4 mt-6'>
//                         <FaFacebook className='w-6 h-6 text-blue-600'/>
//                         <FaTiktok className='w-6 h-6 text-white'/>
//                         <FaXTwitter className='w-6 h-6 text-gray-100'/>
//                         <FaInstagram className='w-6 h-6 text-pink-600'/>
//                     </div>
//                 </div>
//             {/* </div> */}

//             {/* 2nd Part */}
//             <div className='md:mx-auto'>
//                 <h1 className='footer__heading'>
//                     <p></p>
//                     <p></p>
//                     <p></p>
//                     <p></p>
//                 </h1>
//             </div>
//         </div>
//     </div>
//   );
// }

// export default Footer;





import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black'>
      <div className='w-[80%] mx-auto grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-12'>
        
        {/* Discover Section */}
        <div>
          <h2 className='text-white font-semibold mb-4'>Discover</h2>
          <ul className='text-gray-400 space-y-2'>
            <li>Lagos Island</li>
            <li>Lekki</li>
            <li>Ikoyi</li>
            <li>Banana</li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className='text-white font-semibold mb-4'>Contact Us</h2>
          <p className='text-gray-400 mb-2'>
            <span className='block'>📍Plot 7B, Ondo Street,</span>
            <span className='block'> Osborne Foreshore Estate, Ikoyi</span>
            <span className='block'>Lagos, Nigeria</span>
          </p>
          <p className='text-gray-400'>✉️ info@lekkikoyi.com</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className='bg-gray-900 py-6'>
        <div className='w-[80%] mx-auto flex flex-col md:flex-row justify-between items-center'>
          
          {/* Logo Section */}
          <div className='flex items-center space-x-2 mb-4 md:mb-0'>
            <div className='relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden'>
              <Image
                src="/images/1.png" // Ensure this path is correct in your public folder
                alt="Logo"
                fill
                priority
                className="object-cover"
              />
            </div>
            <p className='text-gray-400'>© Lekkikoyi - All rights reserved</p>
          </div>

          {/* Social Media Icons */}
          <div className='flex space-x-4 text-gray-400'>
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
