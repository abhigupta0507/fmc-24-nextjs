"use client";

import React, { useEffect, useState } from "react";
import bg from "./bg.png";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    setUserData({
      name: "John Doe",
      email: "john.doe@example.com",
      mobile: "+1234567890",
      age: "18",
      events: [
        { id: 1, name: "Design" },
        { id: 2, name: "Cinematography" },
        { id: 3, name: "Photography" },
        { id: 4, name: "Animation" },
        { id: 5, name: "Outreach" },
      ],
    });
  }, []);

  return (
    <div className="relative bg-black text-white font-sans min-h-screen">
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
              <p className="text-lg md:text-xl max-w-md mx-auto mb-4">
                Email: <span className="font-semibold">{userData.email}</span>
              </p>
              <p className="text-lg md:text-xl max-w-md mx-auto mb-4">
                Age: <span className="font-semibold">{userData.age}</span>
              </p>
              <p className="text-lg md:text-xl max-w-md mx-auto mb-8">
                Mobile: <span className="font-semibold">{userData.mobile}</span>
              </p>
              <p className="text-lg md:text-xl max-w-md mx-auto">
                Here are the events you are registered for:
              </p>
            </div>

            <div className="">
              {userData.events.map((event) => (
                <div
                  key={event.id}
                  className="mt-2 bg-black rounded-lg p-4 text-white flex flex-col items-center justify-center border border-white"
                >
                  <h3 className="text-4xl font-semibold text-center">
                    {event.name}
                  </h3>
                </div>
              ))}
            </div>
            <section className="mb-20"></section>
          </>
        ) : (
          <p className="relative text-lg">Loading...</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;
