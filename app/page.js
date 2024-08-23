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
      {/* wrap each wrapper in div for better optimisation */}
      <div className="w-[100vw] h-[1120px]  pb-10">
        <Wrapper grid={true} height={"60vh"}>
          <HeroSection />
        </Wrapper>
      </div>
      <Events />
      {/* <Guests /> */}
      <UnleashPotential />
      <Sponsors />
      <Footer />
    </>
  );
}
