import React from 'react';
import Image from 'next/image';
import Photography from '../../public/Img/EventImages/photography.png';
import Cinematography from '../../public/Img/EventImages/cinematography.png';
import Animation from '../../public/Img/EventImages/animation.png';
import Outreach from '../../public/Img/EventImages/outreach.png';
import Design from '../../public/Img/EventImages/design.png';
import sample from '../../public/Img/EventImages/sculpture.png';
import bg from '../../public/Img/EventImages/bg.png';
import eventsimg from'./events.svg';

const EventsPage = ({ cardTextSize = 'text-lg' }) => {
  return (
    <div className="relative bg-black text-white font-sans min-h-screen">
      {/* Background*/}
      <div className="absolute inset-0" style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundColor: 'black'
      }}></div>

      
      <section className="relative flex flex-col items-center justify-center h-fit text-center px-4">
        <div className="relative mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 mt-2 leading-tight">
            Participate in<br />exciting events
          </h1>
          <p className="text-xl md:text-2xl max-w-md mx-auto">
            in various genres such as photography, cinematography,<br />
            animation, media, design, and outreach!
          </p>
        </div>

        {/* Category Cards */}
        <div className="flex space-x-4 mt-8 relative z-10 items-center">
          {/* {[{ src: Design, alt: "Design", label: "Design" },
            { src: Cinematography, alt: "Cinematography", label: "Cinematography" },
            { src: Photography, alt: "Photography", label: "Photography" },
            { src: Animation, alt: "Animation", label: "Animation" },
            { src: Outreach, alt: "Outreach", label: "Outreach" }].map((event, idx) => (
              <div key={idx} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg w-32 md:w-40 transform hover:scale-105 transition-transform duration-300 border-4 border-blue-500">
                <img src={event.src.src} alt={event.alt} className="w-full h-40 md:h-48 object-cover" />
                <div className="p-2 md:p-4 text-center">
                  <h3 className="text-sm md:text-lg font-semibold">{event.label}</h3>
                </div>
              </div>
          ))} */}
          <Image src={eventsimg} alt="Events"height={1000} width={1000} className="" />
        </div>
      </section>

      {/* Event Sections */}
      {["PHOTOGRAPHY", "CINEMATOGRAPHY", "DESIGN", "ANIMATION","OUTREACH","MEDIA"].map((sectionTitle) => (
        <section key={sectionTitle} className="relative py-16">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">{sectionTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-72">
            {Array(6).fill(0).map((_, idx) => (
              <div key={idx} className="bg-[#0B0B0B] rounded-lg p-4 flex items-center justify-between border border-white shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center">
                  <img src={sample.src} alt="Event Image" className="w-1/4 h-auto object-cover rounded-lg" />
                  <h3 className="text-xl font-semibold ml-6">Event Name</h3>
                </div>
                <label className="inline-flex items-center">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 rounded focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors duration-300" />
                  <span className="ml-2">Select</span>
                </label>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default EventsPage;
