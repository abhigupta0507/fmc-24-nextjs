import React from "react";

const Guest = ({ title, imageUrl }) => {
  return (
    <div className="flex flex-col items-center mb-4">
      <div className="border rounded-full overflow-hidden w-[180px] h-[180px] flex items-center justify-center">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2 text-center h-[34px] flex items-center justify-center">
        <h2 className="text-lg text-white">{title}</h2>
      </div>
    </div>
  );
};

const guestData = [
  { title: "Guest 1", imageUrl: "https://via.placeholder.com/300" },
  { title: "Guest 2", imageUrl: "https://via.placeholder.com/300" },
  { title: "Guest 3", imageUrl: "https://via.placeholder.com/300" },
  { title: "Guest 4", imageUrl: "https://via.placeholder.com/300" },
  { title: "Guest 5", imageUrl: "https://via.placeholder.com/300" },
  { title: "Guest 6", imageUrl: "https://via.placeholder.com/300" },
  { title: "Guest 7", imageUrl: "https://via.placeholder.com/300" },
  // { title: "Guest 1", imageUrl: "https://via.placeholder.com/300" },
  // { title: "Guest 2", imageUrl: "https://via.placeholder.com/300" },
  // { title: "Guest 3", imageUrl: "https://via.placeholder.com/300" },
  // { title: "Guest 4", imageUrl: "https://via.placeholder.com/300" },
  // { title: "Guest 5", imageUrl: "https://via.placeholder.com/300" },
  // { title: "Guest 6", imageUrl: "https://via.placeholder.com/300" },
];

const Guests = () => {
  return (
    <div className=" mt-[20px]  w-full h-full overflow-hidden flex flex-col md:justify-center justify-start">
      <h1
        className="text-5xl lg:text-7xl text-white font-extrabold  text-center mb-0"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        Our Previous Guests
      </h1>
      <div
        className={`flex flex-col items-center left-0 right-0 w-full pointer-events-none mt-5`}
        // style={{
        //   height: "900px",
        //   backgroundImage: `url(/assets/images/Frame.svg)`,
        //   backgroundSize: "110%",
        //   backgroundPosition: "top",
        //   backgroundRepeat: "no-repeat",
        //   backgroundAttachment: "fixed",
        //   scale: "100%",
        //   objectFit: "contain",
        // }}
      >
        <div className="flex flex-wrap justify-evenly gap-5 md:gap-8 mr-4 ml-4">
          {guestData.map((card, index) => (
            <Guest key={index} title={card.title} imageUrl={card.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guests;
