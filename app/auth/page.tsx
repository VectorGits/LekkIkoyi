"use client";

import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "@/firebaseConfig";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AuthPage: React.FC = () => {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      toast.success(`Welcome, ${user.displayName}!`);
      router.push("/admin");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Failed to sign in. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 text-gray-800">
      <ToastContainer position="top-center" autoClose={3000} />
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center mb-6 text-gray-600">
          Sign in to access your admin dashboard.
        </p>
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Sign in with Google
        </button>
        {/* <div className="mt-4 text-center text-sm text-gray-500">
          <p>
            Don’t have an account? <a href="#" className="text-blue-600 underline">Sign up here</a>.
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default AuthPage;
