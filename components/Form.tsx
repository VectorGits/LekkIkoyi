"use client";
import React, { useState } from 'react';

const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    information: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    propertyType: '',
    maxPrice: '',
    numberOfBeds: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="relative flex flex-col md:flex-row bg-cover bg-center bg-fixed p-8" style={{ backgroundImage: "url('/images/hero.jpeg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-70"></div>

      {/* Left section */}
      <div className="md:w-1/2 z-10 p-4 space-y-6">
        <h2 className="text-3xl font-semibold text-white">Why You Should Deal With Lekkikoyi</h2>
        
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-200">01. Attention to Detail</h3>
          <p className="text-sm font-medium text-orange-50">
            You might be far out of your element when it comes to reviewing and understanding the multiple documents involved in a real estate deal. Luckily, we are far more familiar with all this paperwork than you are.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-200">02. We Know What to Look For</h3>
          <p className="text-sm font-medium text-orange-50">
            Buyers usually have a pretty firm idea in mind of what they want in a property, from the number of bedrooms to an attached garage to other must-have and must-not-have factors.
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-orange-200">03. We Have Superior Negotiating Skills</h3>
          <p className="text-sm font-medium text-orange-50">
            You might not be a negotiation shark if you aren’t an attorney, mediator, union rep, or real estate agent.
          </p>
        </div>
      </div>

      {/* Right section */}
      <div className="md:w-1/2 z-10 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-orange-700">Got Any Inquiry?</h2>
        <p className="mb-4 text-gray-600">Start here</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Inquiry Type *</label>
            <select name="inquiryType" value={formData.inquiryType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200">
              <option value="">Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Information *</label>
            <select name="information" value={formData.information} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200">
              <option value="">Select</option>
              {/* Add options here */}
            </select>
          </div>
          <div className="flex space-x-4">
            <div>
              <label className="block mb-2 font-semibold text-gray-700">First Name *</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200" />
            </div>
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Last Name *</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200" />
            </div>
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Email Address *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200" />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Your Phone *</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200" />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Property *</label>
            <select name="propertyType" value={formData.propertyType} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200">
              <option value="">Select type</option>
              {/* Add options here */}
            </select>
          </div>
          <div className="flex space-x-4">
            <input type="text" name="maxPrice" value={formData.maxPrice} onChange={handleChange} placeholder="Max Price" className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200" />
            <input type="text" name="numberOfBeds" value={formData.numberOfBeds} onChange={handleChange} placeholder="No. of Beds" className="w-full p-3 border border-gray-300 rounded focus:ring focus:ring-orange-200" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-orange-700 text-white p-3 rounded font-semibold hover:from-orange-700 hover:to-orange-800 transition">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InquiryForm;
