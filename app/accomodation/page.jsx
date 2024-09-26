'use client'
import React from 'react';
import { motion } from 'framer-motion';

const GoogleFormPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Accomodation Form
        </h1>
        <motion.div 
          className="bg-white shadow-md rounded-lg overflow-hidden "
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <iframe 
             src="https://docs.google.com/forms/d/e/1FAIpQLSdqbNnwEgypCOts6geBW2C3a2lFvMmJuuZW4gGekPNQr1hw0A/viewform?embedded=true"
            width="100%" 
            height="800px" 
            title="Accomodation Form"
            className=' min-h-full'
          >
            Loading…
          </iframe>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GoogleFormPage;