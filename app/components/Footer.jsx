import React from 'react';
import Image from 'next/image';
import logo from '../components/logo.jpeg';
import { FacebookIcon,TwitterIcon,InstagramIcon } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-black text-white py-8 w-[90vw] mx-auto justify-between rounded-2xl flex flex-col p-6 md:p-12 backdrop-blur-md bg-gray-400/10 overflow-hidden">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        {/* Company Details */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="flex items-center mb-4">
            <Image src={logo} alt="Company Logo" width={350} height={250} />
          </div>
          <p className="text-lg mb-4">IIT (BHU), Varanasi, India</p>
          <p className="text-lg mb-4">Phone: +91 98456-70890</p>
          <p className="text-lg mb-4">Email: info@fmcweekend.com</p>
          <div className="flex space-x-4">
            <a href="#" className="text-red-400 hover:underline gap-0 flex ">Facebook <FacebookIcon/></a>
            <a href="#" className="text-red-400 hover:underline gap-1 flex">Twitter <TwitterIcon/></a>
            <a href="#" className="text-red-400 hover:underline gap-1 flex">Instagram <InstagramIcon/></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-xl font-bold mb-4">Contact Us</h2>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <textarea
              placeholder="Message"
              rows="4"
              className="p-3 rounded-lg bg-gray-700 text-white border border-gray-600"
            />
            <button
              type="submit"
              className="bg-red-500 p-3 rounded-lg text-white font-semibold hover:bg-red-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <h3 className="text-2xl font-bold mb-4">Find Us</h3>
        <div className="w-full h-64">
          <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.7593178811467!2d82.98760857437907!3d25.27335683707014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e24d2f077dbbf%3A0x787b6b5174898105!2sIIT%20BHU%2C%20Varanasi!5e0!3m2!1sen!2sin!4v1638294576308!5m2!1sen!2sin"
           width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
