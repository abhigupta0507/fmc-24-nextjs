import Events from "./events/page";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Guests from "./components/Guests";
import Sponsors from "./sponsors/page";
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
      <div className="w-[100vw] h-[30vh] lg:h-[70vh] sm:h-[40vh] md:h-[50vh]">
        <Wrapper grid={true}>
          <NavBar />
        </Wrapper>
      </div>
      <Wrapper>
        <NavBar />
      </Wrapper>
      <HeroSection />
      <Events />
      <Guests />
      <UnleashPotential />
      <Sponsors />
      <Footer />
    </>
  );
}
