"use client";
import React, { useState } from "react";
import backgroundImage from "../components/bg.jpeg";
import { sendContactForm } from "../../utils/api";
import { NavBar } from "../components/Navbar.jsx";

const Alert = ({ type, message, onClose }) => {
  return (
    <div
      className={`mt-3 p-4 rounded-lg shadow-lg ${
        type === "success" ? "bg-green-500" : "bg-red-500"
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
  const [alert, setAlert] = useState({ show: false, message: "", type: "" });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    const formData = new FormData(e.target);

    try {
      await sendContactForm(formData);
      e.target.reset();
      setSending(false);
      setAlert({
        show: true,
        message: "Form submitted successfully!",
        type: "success",
      });
    } catch (error) {
      setAlert({
        show: true,
        message: "Error submitting form. Please try again.",
        type: "error",
      });
    }
  };

  const closeAlert = () => {
    setAlert({ show: false, message: "", type: "" });
  };

  return (
    <>
      <NavBar />
      <section
        className="bg-fixed bg-cover bg-center overflow-y-hidden"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundRepeat: "repeat",
        }}
      >
        <div className="relative bg-black text-white py-8 w-[90vw] mx-auto justify-between rounded-2xl flex flex-col p-6 md:p-12 backdrop-blur-md bg-gray-400/10 overflow-hidden">
          <div className="container mx-auto flex flex-wrap justify-center items-center px-4">
            <div className="w-full flex flex-col items-center mb-6 lg:mb-0">
              <div className="bg-gray-200 w-[400px] h-[400px] flex items-center justify-center">
                {/* <Image src={qrCode} alt="QR Code" width={400} height={400} /> */}
                <p className="text-black">QR HERE</p>
              </div>

              <form
                className="flex flex-col space-y-4 mt-4 w-[400px] max-w-full"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  name="upload screenshot"
                  id="upload screenshot"
                  className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] w-full p-2.5"
                  placeholder="Upload Screenshot"
                  required
                />
                <input
                  type="text"
                  name="add file"
                  id="add file"
                  className="bg-gray-200 border border-[#A52A2A] text-black text-sm rounded-lg focus:ring-red-500 focus:border-[#A52A2A] w-full p-2.5"
                  placeholder="Add File"
                  required
                />
                <button
                  type="submit"
                  className="bg-red-500 p-3 rounded-lg text-white font-semibold hover:bg-red-600"
                  disabled={sending}
                >
                  Submit
                </button>
              </form>
              {alert.show && (
                <Alert
                  type={alert.type}
                  message={alert.message}
                  onClose={closeAlert}
                />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
