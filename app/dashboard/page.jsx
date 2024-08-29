// "use client";

// import React, { useEffect, useState } from "react";
// import Design from "./design.png"; // Import your card images
// import Cinematography from "./cinematography.png";
// import Photography from "./photography.png";
// import Animation from "./animation.png";
// import Outreach from "./outreach.png";
// import bg from "./bg.png"; // Background image

// const Dashboard = () => {
//   // State to hold user data
//   const [userData, setUserData] = useState(null);

//   useEffect(() => {
//     // Replace this with your API call
//     // For demo purposes, we'll use hardcoded data
//     setUserData({
//       name: "John Doe",
//       email: "john.doe@example.com",
//       mobile: "+1234567890",
//       age:"18",
//       events: [
//         { id: 1, name: "Design", img: Design.src },
//         { id: 2, name: "Cinematography", img: Cinematography.src },
//         { id: 3, name: "Photography", img: Photography.src },
//         { id: 4, name: "Animation", img: Animation.src },
//         { id: 5, name: "Outreach", img: Outreach.src },
//       ],
//     });
//   }, []);

//   return (<>
//   <section
//         className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16"
//         style={{ paddingTop: "5" }}
//       ></section>
//     <div className="relative bg-black text-white font-sans min-h-screen">
//       <div
//         className="absolute inset-0"
//         style={{
//           backgroundImage: `url(${bg.src})`,
//           backgroundRepeat: "repeat",
//           backgroundSize: "contain",
//           backgroundPosition: "center",
//           backgroundColor: "black",
//         }}
//       ></div>

//       <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16">
//         {userData ? (
//           <>
//             <div className="relative z-10 mb-8">
//               <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
//                 Welcome, {userData.name}
//               </h1>
//               <p className="text-lg md:text-xl max-w-md mx-auto mb-4">
//                 Email: <span className="font-semibold">{userData.email}</span>
//               </p>
//               <p className="text-lg md:text-xl max-w-md mx-auto mb-4">
//                 Age: <span className="font-semibold">{userData.age}</span>
//               </p>
//               <p className="text-lg md:text-xl max-w-md mx-auto mb-8">
//                 Mobile: <span className="font-semibold">{userData.mobile}</span>
//               </p>
//               <p className="text-lg md:text-xl max-w-md mx-auto">
//                 Here are the events you are registered for:
//               </p>
//             </div>

//             {/* Event Cards */}
//             <div className="relative z-10">
//               {userData.events.map((event) => (
//                 <div
//                   key={event.id}
//                   className=" mt-2 bg-black rounded-lg p-2 text-white flex items-center border border-white"
//                 >
//                   <img
//                     src={event.img}
//                     alt={event.name}
//                     className="w-1/4 h-auto object-cover rounded-lg"
//                   />
//                   <h3 className="text-4xl font-semibold ml-24">{event.name}</h3>
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <p className="relative z-10 text-lg">Loading...</p>
//         )}
//       </section>
//     </div>
//   </>
    
//   );
// };

// export default Dashboard;
"use client";

import React, { useEffect, useState } from "react";
import Design from "./design.png";
import Cinematography from "./cinematography.png";
import Photography from "./photography.png";
import Animation from "./animation.png";
import Outreach from "./outreach.png";
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
        { id: 1, name: "Design", img: Design.src },
        { id: 2, name: "Cinematography", img: Cinematography.src },
        { id: 3, name: "Photography", img: Photography.src },
        { id: 4, name: "Animation", img: Animation.src },
        { id: 5, name: "Outreach", img: Outreach.src },
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

      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 pt-16" style={{ paddingTop: '5rem' }}>
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
                  className=" mt-2 bg-black rounded-lg p-2 text-white flex items-center border border-white"
                >
                  <img
                    src={event.img}
                    alt={event.name}
                    className="w-1/4 h-auto object-cover rounded-lg"
                  />
                  <h3 className="text-4xl font-semibold ml-24">{event.name}</h3>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p className="relative text-lg">Loading...</p>
        )}
      </section>
    </div>
  );
};

export default Dashboard;

