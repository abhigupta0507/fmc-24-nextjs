"use client";

import React, { useEffect, useState } from "react";
import bg from "./bg.png";

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

function DisplayInfo({ dataType, value }) {
  return (
    <p className="text-lg md:text-xl max-w-md mx-auto mb-8">
      {dataType} <span className="font-semibold">{value}</span>
    </p>
  );
}

function EventCardOfUser({ eventCard }) {
  return (
    <li
      key={eventCard.id}
      className="mt-2 bg-black rounded-lg p-4 text-white flex flex-col items-center justify-center border border-white"
    >
      <h3 className="text-2xl md:text-3xl font-semibold text-center">
        {eventCard.type}
      </h3>
      <p className="text-lg md:text-xl font-normal text-center mt-2">
        {eventCard.name}
      </p>
    </li>
  );
}

function Loader() {
  return <p className="relative text-lg">Loading...</p>;
}

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData({
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "+1234567890",
      age: "18",
      events: [
        { id: 1, type: "Design", name: "Event of design" },
        { id: 2, type: "Cinematography", name: "Event of cinematography" },
        { id: 3, type: "Photography", name: "Event of photography" },
        { id: 4, type: "Animation", name: "Event of animation" },
        { id: 5, type: "Outreach", name: "Event of outreach" },
      ],
    });
  }, []);

  return (
    <div className="relative bg-black text-white font-sans min-h-screen">
      <BackgroundMaker />
      <section
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16"
        style={{ paddingTop: "5rem" }}
      >
        {userData ? (
          <>
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
                Welcome, {userData.name}
              </h1>
              <DisplayInfo dataType="Mobile Number" value={userData.mobile} />
              <DisplayInfo dataType="Age" value={userData.age} />

              <p className="text-lg md:text-xl max-w-md mx-auto">
                Here are the events you are registered for:
              </p>
            </div>

            <ul>
              {userData.events.map((event) => (
                <EventCardOfUser eventCard={event} />
              ))}
            </ul>
            <section className="mb-20"></section>
          </>
        ) : (
          <Loader />
        )}
      </section>
    </div>
  );
};

export default Dashboard;
