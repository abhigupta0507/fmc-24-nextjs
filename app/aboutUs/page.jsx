import React from "react";

import Photography from "../../public/Img/EventImages/photography.png";
import Cinematography from "../../public/Img/EventImages/cinematography.png";
import Animation from "../../public/Img/EventImages/animation.png";
import Outreach from "../../public/Img/EventImages/outreach.png";
import Design from "../../public/Img/EventImages/design.png";
import sample from "../../public/Img/EventImages/sculpture.png";
import bg from "../../public/Img/EventImages/bg.png";

function MemberCard() {
  return (
    <div className="bg-black rounded-lg p-2 text-white flex items-center justify-between border border-white">
    <div className="flex items-center">
      <img src={sample.src} alt="Photoart" className="w-1/4 h-auto object-cover rounded-lg" />
      <h3 className="text-4xl font-semibold ml-24">Photoart</h3>
    </div>
  </div>
  );
}
const AboutUs = ({ cardTextSize = "text-lg" }) => {
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

      <section className="relative flex flex-col items-center justify-center h-screen text-center px-4">
        {/* <div className="relative z-10 mb-8">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Participate in
            <br />
            exciting events
          </h1>
          <p className="text-24 md:text-28 max-w-md mx-auto">
            in various genres such as photography, cinematography,
            <br />
            animation, media, design, and outreach!
          </p>
        </div> */}

        {/* Event Cards */}
      </section>

      {/*PHOTOGRAPHY Section*/}
      <section className="relative z-10 py-16">
        <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">
          PHOTOGRAPHY
        </h2>
        <div className="grid grid-cols-2 gap-8 px-4 md:px-72">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </section>
      <section className="relative z-10 py-16">
        <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">
          PHOTOGRAPHY
        </h2>
        <div className="grid grid-cols-2 gap-8 px-4 md:px-72">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </section>
      <section className="relative z-10 py-16">
        <h2 className="text-6xl md:text-4x1 font-bold text-center mb-16">
          PHOTOGRAPHY
        </h2>
        <div className="grid grid-cols-2 gap-8 px-4 md:px-72">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
