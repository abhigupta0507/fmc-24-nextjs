'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../components/logo.jpeg';
import { sendContactForm } from '../../utils/api';

const Alert = ({ type, message, onClose }) => {
  return (
    <div
      className={`mt-3 p-4 rounded-lg shadow-lg ${
        type === 'success' ? 'bg-green-500' : 'bg-red-500'
      } text-white`}
    >
      <p>{message}</p>
      <button className="mt-2 text-sm underline" onClick={onClose}>
        Close
      </button>
    </div>
  );
};

const Form = () => {
  const [alert, setAlert] = useState({ show: false, message: '', type: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    try {
      await sendContactForm({ name, email, message });
      e.target.reset();
      setSending(false);
      setAlert({ show: true, message: 'Form submitted successfully!', type: 'success' });
    } catch (error) {
      setAlert({ show: true, message: 'Error submitting form. Please try again.', type: 'error' });
    }
  };

  const closeAlert = () => {
    setAlert({ show: false, message: '', type: '' });
  };

  return (
    <div className="relative bg-black text-white py-8 w-[90vw] mx-auto justify-between rounded-2xl flex flex-col p-6 md:p-12 backdrop-blur-md bg-gray-400/10 overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Left section with Logo and QR Code */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="flex flex-col items-center mb-4">
          <div className="flex items-center mb-4">
            <Image src={logo} alt="Company Logo" width={350} height={250} />
          </div>
            {/* QR Code */}
            <div className="mt-4 bg-gray-200 w-[400px] h-[400px]">
              {/* <Image src={qrCode} alt="QR Code" width={400} height={400} /> */}
              <p className='text-black'>QR HERE</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              required
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <input
              id="email"
              name="email"
              required
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <input
              id="phone"
              name="phone"
              required
              type="text"
              placeholder="Phone"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <textarea
              id="selected items"
              name="selected items"
              required
              placeholder="Selected Items"
              rows="4"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <input
              id="upload screenshot"
              name="upload screenshot"
              required
              type="text"
              placeholder="Upload Screenshot"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <button
              type="submit"
              className="bg-red-500 p-3 rounded-lg text-white font-semibold hover:bg-red-600"
              disabled={sending}
            >
              Submit
            </button>
          </form>
          {alert.show && <Alert type={alert.type} message={alert.message} onClose={closeAlert} />}
        </div>
      </div>
    </div>
  );
};

export default Form;
