import React from "react";
import { FaHome, FaKey, FaShieldAlt } from "react-icons/fa"; // Importing icons from react-icons

const WhyWorkWithUs = () => {
  return (
    <div className="py-12 bg-white"> {/* Increased top and bottom padding */}
      <div className="container mx-auto px-8"> {/* Increased left and right padding */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          Why You Should Work With Us
        </h2>
        <p className="text-center text-gray-500 mb-10">
        Your trusted partner in real estate. We offer a wide selection of properties, expert advice, and personalized service to help you buy, sell, or rent with confidence.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-16">
          {/* Wide Range of Properties */}
          <div className="text-center flex flex-col items-center w-full md:w-1/3 px-6"> {/* Increased padding for each element */}
            <div className="mb-4">
              {/* Icon */}
              <FaHome className="h-10 w-10 text-gray-700" /> {/* Reduced icon size */}
            </div>
            <h3 className="text-lg font-semibold">Wide Range Of Properties</h3>
            <p className="text-gray-500">
              We offer a lot of property choices that would definetely cover your needs.
            </p>
          </div>
          
          {/* Buy or Rent Homes */}
          <div className="text-center flex flex-col items-center w-full md:w-1/3 px-6"> {/* Increased padding for each element */}
            <div className="mb-4">
              {/* Icon */}
              <FaKey className="h-10 w-10 text-gray-700" /> {/* Reduced icon size */}
            </div>
            <h3 className="text-lg font-semibold">Buy or Rent Homes</h3>
            <p className="text-gray-500">
              We sell you homes at the best market price and very quickly as well.
            </p>
          </div>

          {/* Trusted by Thousands */}
          <div className="text-center flex flex-col items-center w-full md:w-1/3 px-6"> {/* Increased padding for each element */}
            <div className="mb-4">
              {/* Icon */}
              <FaShieldAlt className="h-10 w-10 text-gray-700" /> {/* Reduced icon size */}
            </div>
            <h3 className="text-lg font-semibold">Trusted by Thousands</h3>
            <p className="text-gray-500">
              We are trusted by many customers for speedy and quality homes at affordable prices.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWorkWithUs;

