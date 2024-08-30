"use client";
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

import Photography from '../../public/Img/EventImages/photography.png';
import Cinematography from '../../public/Img/EventImages/cinematography.png';
import Animation from '../../public/Img/EventImages/animation.png';
import Outreach from '../../public/Img/EventImages/outreach.png';
import Design from '../../public/Img/EventImages/design.png';
import sample from '../../public/Img/EventImages/sculpture.png';
import bg from '../../public/Img/EventImages/bg.png';


const EventsPage = ({ cardTextSize = 'text-lg' }) => {
  
  const handleAddToCart = () => {
    const selectedEvents = [];
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    checkboxes.forEach((checkbox) => {
      const eventName = checkbox.closest('.flex').querySelector('h3').innerText;
      selectedEvents.push(eventName);
    });
    alert('Selected Events: ' + selectedEvents.join(', '));
  };
  return (
    
    <div className="relative bg-black text-white font-sans min-h-screen">
      <div className="absolute inset-0" style={{
         backgroundImage: `url(${bg.src})`,
         backgroundRepeat: 'repeat',
         backgroundSize: 'contain', 
         backgroundPosition: 'center', 
         backgroundColor: 'black' 
      }}></div>

      <section className="relative flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="relative z-10 mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Participate in<br />exciting events
          </h1>
          <p className="text-24 md:text-28 max-w-md mx-auto">
            in various genres such as photography, cinematography,<br />
            animation, media, design, and outreach!
          </p>
        </div>

        {/* Event Cards */}
        <div className="flex space-x-4 mt-8 relative z-10 items-center">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-32 md:w-40 border-4 border-blue-500">
            <img src={Design.src} alt="Design" className="w-full h-40 md:h-48 object-cover" />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">Design</h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-40 md:w-48 border-4 border-blue-500">
            <img src={Cinematography.src} alt="Cinematography" className="w-full h-48 md:h-56 object-cover" />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">Cinematography</h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-52 md:w-64 border-4 border-blue-500">
            <img src={Photography.src} alt="Photography" className="w-full h-56 md:h-64 object-cover" />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">Photography</h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-40 md:w-48 border-4 border-blue-500">
            <img src={Animation.src} alt="Animation" className="w-full h-48 md:h-56 object-cover" />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">Animation</h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-32 md:w-40 border-4 border-blue-500">
            <img src={Outreach.src} alt="Outreach" className="w-full h-40 md:h-48 object-cover" />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">Outreach</h3>
            </div>
          </div>
        </div>
      </section>

      <button
      onClick={handleAddToCart}
      className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 z-50"
    >
      <FaShoppingCart />
      <span>Add to Cart</span>
    </button>

      {/*PHOTOGRAPHY Section*/}
      <section className="relative z-10 py-16">
  <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">PHOTOGRAPHY</h2>
  <div className="grid grid-cols-2 gap-8 px-4 md:px-72">

          <div className="bg-black rounded-lg p-2 text-white flex flex-col justify-between border border-white ">
          <div className="flex items-center">
            <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
            <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
            <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 mt-2 ml-4" />
          </div>
          
          <div className="text-sm text-center align-text-bottom ml-8 mt-2">
           <pre> <big> Price  XXXXX  </big></pre> 
          </div>
        </div>


        <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
          <div className="flex items-center">
            <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
            <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
          </div>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>

        <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
          <div className="flex items-center">
            <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
            <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
          </div>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>

        <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
          <div className="flex items-center">
            <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
            <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
          </div>
          <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        </div>

    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
  </div>
</section>


      {/*CINEMATOGRAPHY Section*/}
      <section className="relative z-10 py-16">
  <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">CINEMATOGRAPHY</h2>
  <div className="grid grid-cols-2 gap-8 px-4 md:px-72">
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
  </div>
</section>

      {/*DESIGN Section*/}
      <section className="relative z-10 py-16">
  <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">DESIGN</h2>
  <div className="grid grid-cols-2 gap-8 px-4 md:px-72">
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
  </div>
</section>

      {/*ANIMATION Section*/}
      <section className="relative z-10 py-16">
  <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">ANIMATION</h2>
  <div className="grid grid-cols-2 gap-8 px-4 md:px-72">
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>  
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
  </div>
</section>

      {/*OUTREACH Section*/}
      <section className="relative z-10 py-16">
  <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">OUTREACH</h2>
  <div className="grid grid-cols-2 gap-8 px-4 md:px-72">
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
  </div>
</section>

      {/*MEDIA Section*/}
      <section className="relative z-10 py-16">
  <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">MEDIA</h2>
  <div className="grid grid-cols-2 gap-8 px-4 md:px-72">
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Snapchase" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Snapchase</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
      <div className="flex items-center">
        <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
        <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
      </div>
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
    </div>
  </div>
</section>

      <button
        onClick={handleAddToCart}
        className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2"
      >
        <FaShoppingCart />
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default EventsPage;
