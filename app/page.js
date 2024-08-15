import Events from "./components/Events";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Guests from "./components/Guests";
import Sponsors from "./components/Sponsors";


export default function Home() {
  return (
    <>
    <div className="text-2xl mx-auto text-center" style={{ fontFamily: "'Clash Display', sans-serif" }}>
    FMC WEEKEND '24
   </div>
    <NavBar />
    <HeroSection />
    <Events />
    <Guests />
    <Sponsors />
    <Footer />
    </>
   
  );
}
