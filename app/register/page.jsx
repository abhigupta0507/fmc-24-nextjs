"use client"

import React, { useState } from "react";
import backgroundImage from "../components/bg.jpeg";
import logoImage from "../components/logo.png";


export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Replace 'https://example.com/submit' with your actual URL
    const url = "https://fmcw2024-backend.onrender.com/api/user/new";
    
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      // Handle successful submission
      console.log(response);
      console.log("Form submitted successfully!");
    } else {
      // Handle submission error
      console.error("Form submission failed!");
    }
  };

  return (
    <section
      className="bg-fixed bg-cover bg-center overflow-y-hidden"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "repeat",
      }}
    >
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6">
          <img src={logoImage.src} alt="Logo" className="h-16" />
        </a>
        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-white md:text-2xl">
              Register
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] block w-full p-2.5"
                  placeholder="Username"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="age"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Age
                </label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] block w-full p-2.5"
                  placeholder="18"
                  min="15"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] block w-full p-2.5"
                  placeholder="+91-XXX-XXX-XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
