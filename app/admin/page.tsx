"use client";

import React, { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { setPersistence, browserLocalPersistence } from "firebase/auth";
import { auth } from "@/firebaseConfig";

setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("Error setting persistence:", error);
});



const db = getFirestore();

const AdminPage: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    price: "",
    size: "",
    bedrooms: "",
    bathrooms: "",
    description: "",
  });
  const [imageFile, setImageFile] = useState<File | null>(null);
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
   const checkAuth = () => {
     if (user === null) {
       router.push("/auth");
     }
   };
 
   // Ensure the user state is initialized before redirecting
   const timer = setTimeout(checkAuth, 1000);
   return () => clearTimeout(timer);
 }, [user, router]);
 

  if (!user) {
    return <p>Redirecting to login...</p>;
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!imageFile) {
      toast.error("Please upload an image.");
      return;
    }

    try {
      const base64Image = await convertToBase64(imageFile);

      const docRef = await addDoc(collection(db, "properties"), {
        ...formData,
        image: base64Image,
        createdAt: new Date(),
      });

      console.log("Document written with ID: ", docRef.id);

      toast.success("Data submitted successfully!");
      setFormData({
        title: "",
        location: "",
        price: "",
        size: "",
        bedrooms: "",
        bathrooms: "",
        description: "",
      });
      setImageFile(null);
    } catch (error) {
      console.error("Error submitting data:", error);
      toast.error("Failed to submit data.");
    }
  };

const handleLogout = async () => {
  await logout();
  toast.success("Logged out successfully!");
  router.push("/auth");
};

  return (
    <div className="min-h-screen  text-rose-600 py-8 px-6">
      <ToastContainer position="top-center" autoClose={3000} />
      <button
         onClick={handleLogout}
         className="absolute mt-20 top-4 right-4 py-2 px-4 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600 transition"
      >
         Logout
      </button>

      <div className="max-w-3xl mx-auto mt-10  p-6 rounded-lg shadow-md">
        <h1 className="text-3xl text-center text-tomato font-bold mb-6">
          Add New Property
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
            <div>
               <label htmlFor="title" className="text-gray-400">
                  Title
               </label>
               <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full p-3  text-gray-400 caret-rose-200 rounded  ring-1 outline-none focus:outline-none ring-rose-100 focus:ring-2 focus:ring-rose-600"
                  placeholder="Property title"
               />
            </div>
            <div className="flex space-x-4">
               <div className="w-1/2">
                  <label htmlFor="location" className="text-gray-400">
                  Location
                  </label>
                  <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-3  text-gray-400 caret-rose-200 rounded  ring-1 outline-none focus:outline-none ring-rose-100 focus:ring-2 focus:ring-rose-600"
                  placeholder="City, State"
                  />
               </div>
               <div className="w-1/2">
                  <label htmlFor="size" className="text-gray-400">
                     Size
                  </label>
                  <input
                     type="number"
                     id="size"
                     name="size"
                     value={formData.size}
                     onChange={handleChange}
                     className="w-full p-3  text-gray-400 caret-rose-200 rounded  ring-1 outline-none focus:outline-none ring-rose-100 focus:ring-2 focus:ring-rose-600"
                     placeholder="Size"
                  />
               </div>
            </div>
            <div className="flex space-x-4">
               <div className="w-1/2">
                  <label htmlFor="price" className="text-gray-400">
                     Price
                  </label>
                  <input
                     type="number"
                     id="price"
                     name="price"
                     value={formData.price}
                     onChange={handleChange}
                     className="w-full p-3  text-gray-400 caret-rose-200 rounded  ring-1 outline-none focus:outline-none ring-rose-100 focus:ring-2 focus:ring-rose-600"
                     placeholder="Price"
                  />
               </div>
               <div className="w-1/2">
                  <label htmlFor="bedrooms" className="text-gray-400">
                     Bedrooms
                  </label>
                  <input
                     type="number"
                     id="bedrooms"
                     name="bedrooms"
                     value={formData.bedrooms}
                     onChange={handleChange}
                     className="w-full p-3  text-gray-400 caret-rose-200 rounded  ring-1 outline-none focus:outline-none ring-rose-100 focus:ring-2 focus:ring-rose-600"
                     placeholder="Bedrooms"
                  />
               </div>
            </div>
            <div className="flex space-x-4">
               <div className="w-1/2">
                  <label htmlFor="bathrooms" className="text-gray-400">
                     Bathrooms
                  </label>
                  <input
                     type="number"
                     id="bathrooms"
                     name="bathrooms"
                     value={formData.bathrooms}
                     onChange={handleChange}
                     className="w-full p-3  text-gray-400 caret-rose-200 rounded  ring-1 outline-none focus:outline-none ring-rose-100 focus:ring-2 focus:ring-rose-600"
                     placeholder="Bathrooms"
                  />
               </div>
               <div className="w-1/2">
                  <label htmlFor="image" className="text-gray-400">
                     Upload Image
                  </label>
                  <input
                     type="file"
                     id="image"
                     onChange={handleImageChange}
                     className="w-full p-3  text-gray-400 caret-rose-200 rounded  ring-1 outline-none focus:outline-none ring-rose-100 focus:ring-2 focus:ring-rose-600"
                  />
               </div>
            </div>
            <div>
            <label htmlFor="description" className="text-gray-400">
               Description
            </label>
            <textarea
               id="description"
               name="description"
               value={formData.description}
               onChange={handleChange}
               className="w-full p-3  text-gray-400 caret-rose-200 rounded  ring-1 outline-none focus:outline-none ring-rose-100 focus:ring-2 focus:ring-rose-600"
               placeholder="Property description"
               rows={5}
            ></textarea>
            </div>
            <button
            type="submit"
            className="w-full py-3 bg-rose-500 text-white rounded-lg font-medium hover:bg-rose-600 transition"
            >
            Submit
            </button>
            </form>
      </div>
    </div>
  );
};

export default AdminPage;



