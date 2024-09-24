import React from "react";
import sample from "../../public/Img/EventImages/sculpture.png";
import bg from "../../public/Img/EventImages/bg.png";
import NavBar from "../components/NavBar";

const data = [
  "Atmadeep Bhattacharya",
  "Meet Kotadiya",
  "Nandini Dhakaan",
  "Suhani Garg",
  "Suyash Vijay",
  "Utkarsh raj",
];

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

function Header({ children }) {
  return (
    <header className="relative py-16 text-center">
      <h1 className="text-white text-4xl">{children}</h1>
    </header>
  );
}

function Teamblock({ teamName, children }) {
  return (
    <section className="relative py-16">
      <h2 className="text-4xl md:text-4x1 font-bold text-center mb-16">
        {teamName}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4 md:px-72">
        {children}
      </div>
    </section>
  );
}

function MemberCard({ name = "unknown", photo = sample.src }) {
  return (
    <div className="bg-black rounded-lg p-4 text-white flex items-center justify-between border border-white">
      <img
        src={photo}
        alt={name}
        className="w-16 h-16 object-cover rounded-lg"
      />
      <div className="flex-1 flex justify-center">
        <h3 className="text-2xl font-semibold">{name}</h3>
      </div>
    </div>
  );
}

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="relative bg-black text-white font-sans min-h-screen">
        <BackgroundMaker />
        <Header>Meet the heroes who organised this event</Header>
        <Teamblock teamName="Helm">
          {data.map((member, index) => (
            <MemberCard
              key={index}
              name={member}
              photo={`/helm/${index}.jpg`}
            />
          ))}
        </Teamblock>
        <Teamblock teamName="Design">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </Teamblock>
        <Teamblock teamName="Technical">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </Teamblock>
        <Teamblock teamName="Marketing">
          <MemberCard />
          <MemberCard />
          <MemberCard />
          <MemberCard />
        </Teamblock>
      </div>
    </>
  );
};

export default AboutUs;
