"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("All fields are required!");
      return;
    }

    try {
      await emailjs.send(
         "service_ha8w93o", // Replace with your EmailJS Service ID
         "template_crla8tb", // Replace with your EmailJS Template ID
         {
           from_name: name, // Matches {{from_name}} in your template
           to_name: "LekkIkoyi", // Static value for {{to_name}}
           message: message, // Matches {{message}} in your template
         },
         "jPY9RR0ChkfmgiHKl" // Replace with your EmailJS Public Key
       );
      

      setFormData({ name: "", email: "", message: "" });
      toast.success("Message sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send the message. Please try again.");
    }
  };

  return (
    <div className="min-h-screen  text-gray-200 py-8 px-6">
      {/* React-Toastify Container */}
      <ToastContainer position="top-center" autoClose={3000} />

      {/* Breadcrumb */}
      <div className="max-w-4xl mx-auto text-gray-400 mb-6">
        <nav className="flex items-center space-x-2 text-sm">
          <Link href="/" className="text-tomato hover:underline">
            Home
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-300">Contact Us</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-semibold text-center text-rose-600">
          Contact Us
        </h1>
        <p className="mt-4 text-center text-gray-400">
          Have a question or need assistance? We’re here to help!
        </p>

       

        {/* Form */}
        <div className="mt-12">
          <form
            onSubmit={handleSubmit}
            className=" rounded-lg p-6 shadow-md space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full mt-2 p-3  text-white rounded focus:outline-none focus:ring-2 ring-1 ring-rose-200 focus:ring-rose-600"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full mt-2 p-3  text-white rounded focus:outline-none focus:ring-2 ring-1 ring-rose-200 focus:ring-rose-600"
                placeholder="Your email"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full mt-2 p-3 text-gray-700 rounded focus:outline-none focus:ring-2 ring-1 ring-rose-200 focus:ring-rose-600"
                placeholder="Your message"
                rows={5}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-rose-500   text-white rounded-lg font-medium hover:bg-rose-600 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;



