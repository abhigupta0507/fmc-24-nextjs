import Events from "./events/page";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Guests from "./components/Guests";
import Sponsors from "./components/Sponsors";
import Wrapper from "./components/bg-wrapper/Wrapper";
import UnleashPotential from "./components/UnleashPotential";

export default function Home() {
  return (
    <>
      <div
        className="text-2xl mx-auto text-center"
        style={{ fontFamily: "'Clash Display', sans-serif" }}
      >
        FMC WEEKEND '24
      </div>
      {/* wrap each wrapper in div for better optimisation */}
      <div className="w-[100vw] h-[30vh] lg:h-[60vh] sm:h-[40vh] md:h-[50vh] pb-10">
        <Wrapper grid={true} height={"60vh"}>
          <div className="w-full h-full px-12 py-20 ">
            <h1 className="text-white left-2 text-7xl font-clash font-bold">
              Asia's Largest <br /> Digital Arts <br /> Festival{" "}
            </h1>
            <button className=" text-white bg-red-600 mt-[20px] px-4 py-2 rounded-full border-none outline-none">
              Explore More
            </button>
          </div>
        </Wrapper>
      </div>

      <HeroSection />
      <Events />
      <Guests />
      <UnleashPotential />
      <Sponsors />
      <Footer />
    </>
  );
}
