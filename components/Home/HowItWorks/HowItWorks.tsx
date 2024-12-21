import Image from "next/image";
import { FaHome, FaUserTie, FaKey } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <div className="w-full flex flex-col md:flex-row bg-gray-100 py-16 px-4">
      {/* Left Side (Images) */}
      <div className="relative flex flex-col gap-4 md:w-1/2">
        {/* First Row */}
        <div className="flex gap-4 relative">
          <div className="relative w-1/2 h-48">
            <Image
              src="/images/p1.jpg"
              alt="Family Outdoors"
              fill
              className="rounded-lg object-cover"
            />
          </div>
          <div className="relative w-1/2 h-48">
            <Image
              src="/images/p2.jpg"
              alt="Family in Home"
              fill
              className="rounded-lg object-cover"
            />
          </div>

          {/* Badge in the middle of the images */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-2 rounded-lg flex items-center">
            <FaHome className="text-green-600" />
            <span className="ml-2 text-sm font-bold">14K Properties For Sale</span>
          </div>
        </div>

        {/* Second Row */}
        <div className="relative h-64">
          <Image
            src="/images/p3.jpg"
            alt="Modern House"
            fill
            className="rounded-lg object-cover"
          />
        </div>
      </div>

      {/* Right Side (Text & Icons) */}
      <div className="text-left md:w-1/2 md:pl-8 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">How It works? Find a perfect home</h2>
        <p className="text-gray-600 mb-8">
        We make finding your perfect property in Lagos easy and stress-free. Our streamlined process ensures a smooth and successful experience from start to finish.
        </p>

        {/* List of Steps */}
        <div className="flex flex-col gap-6">
          {/* Step 1 */}
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full border-2 border-yellow-500">
              <FaHome className="text-yellow-500 text-2xl sm:text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-base">Find Real Estate</h3>
              <p className="text-gray-500 text-sm">Browse Properties: Explore our extensive listings of homes, apartments, and land for sale and rent across Lagos.</p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full border-2 border-yellow-500">
              <FaUserTie className="text-yellow-500 text-2xl sm:text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-base">Meet Realtor</h3>
              <p className="text-gray-500 text-sm">Expert Guidance: Get personalized support from our team of knowledgeable real estate professionals who understand the Lagos market.</p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-4 p-4 rounded-lg">
            <div className="flex items-center justify-center w-12 h-12 sm:w-10 sm:h-10 rounded-full border-2 border-yellow-500">
              <FaKey className="text-yellow-500 text-2xl sm:text-xl" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-base">Take The Keys</h3>
              <p className="text-gray-500 text-sm">Your Dream Home Awaits: We'll help you finalize the purchase or rental agreement and get you ready to move in.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;










