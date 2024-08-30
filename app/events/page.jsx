"use client";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

import Photography from "../../public/Img/EventImages/photography.png";
import Cinematography from "../../public/Img/EventImages/cinematography.png";
import Animation from "../../public/Img/EventImages/animation.png";
import Outreach from "../../public/Img/EventImages/outreach.png";
import Design from "../../public/Img/EventImages/design.png";
import sample from "../../public/Img/EventImages/sculpture.png";
import bg from "../../public/Img/EventImages/bg.png";

function EventCard({ name = "Snapchase", photo = sample.src, price = "500" }) {
  return (
    <div className="bg-black rounded-lg p-4 text-white flex flex-col justify-between border border-white">
      <div className="flex items-center mb-4">
        <img
          src={photo}
          alt={name}
          className="w-1/3 h-auto object-cover rounded-lg"
        />
        <h3 className="text-xl font-semibold ml-4 flex-grow">{name}</h3>
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600 mt-2 ml-4"
        />
      </div>

      <div className="text-sm text-center">
        <pre>
          {" "}
          <big> Price {price} </big>
        </pre>
      </div>
    </div>
  );
}

function BackgroundMaker() {
  return (
    <div
      className="absolute inset-0"
      style={{
        backgroundImage: `url(${bg.src})`,
        backgroundRepeat: "repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    ></div>
  );
}

function SectionBlock({ name, children }) {
  return (
    <section className="relative py-16">
      <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-16">
        {name}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-72">
        {children}
      </div>
    </section>
  );
}

const EventsPage = ({ cardTextSize = "text-lg" }) => {
  const handleAddToCart = () => {
    const selectedEvents = [];
    const checkboxes = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    checkboxes.forEach((checkbox) => {
      const eventName = checkbox.closest(".flex").querySelector("h3").innerText;
      selectedEvents.push(eventName);
    });
    alert("Selected Events: " + selectedEvents.join(", "));
  };

  return (
    <div className="relative mt-10 bg-black text-white font-sans min-h-screen">
      <BackgroundMaker />

      <section className="relative flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="relative mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Participate in
            <br />
            exciting events
          </h1>
          <p className="text-2xl md:text-3xl max-w-md mx-auto">
            in various genres such as photography, cinematography,
            <br />
            animation, media, design, and outreach!
          </p>
        </div>

        {/* Event Cards */}
        <div className="flex space-x-4 mt-8 relative items-center">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-32 md:w-40 border-4 border-blue-500">
            <img
              src={Design.src}
              alt="Design"
              className="w-full h-40 md:h-48 object-cover"
            />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">Design</h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-40 md:w-48 border-4 border-blue-500">
            <img
              src={Cinematography.src}
              alt="Cinematography"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">
                Cinematography
              </h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-52 md:w-64 border-4 border-blue-500">
            <img
              src={Photography.src}
              alt="Photography"
              className="w-full h-56 md:h-64 object-cover"
            />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">Photography</h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-40 md:w-48 border-4 border-blue-500">
            <img
              src={Animation.src}
              alt="Animation"
              className="w-full h-48 md:h-56 object-cover"
            />
            <div className="p-2 md:p-4 text-center">
              <h3 className="text-sm md:text-lg font-semibold">Animation</h3>
            </div>
          </div>

          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-32 md:w-40 border-4 border-blue-500">
            <img
              src={Outreach.src}
              alt="Outreach"
              className="w-full h-40 md:h-48 object-cover"
            />
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

      {/* PHOTOGRAPHY Section */}
      <SectionBlock name="Photography">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </SectionBlock>

      <SectionBlock name="Cinematography">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </SectionBlock>

      <SectionBlock name="Design">
        <EventCard />
        <EventCard />
        <EventCard />
      </SectionBlock>

      <SectionBlock name="Animation">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </SectionBlock>

      <SectionBlock name="Outreach">
        <EventCard />
        <EventCard />
        <EventCard />
        <EventCard />
      </SectionBlock>

      <SectionBlock name="Media">
        <EventCard />
        <EventCard />
        <EventCard />
      </SectionBlock>
    </div>
  );
};

export default EventsPage;
