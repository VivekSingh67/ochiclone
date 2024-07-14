import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Cards from "./components/Cards";
import Footer from "./Footer";
import LocomotiveScroll from "locomotive-scroll";
import Review from "./components/Review";
import Ready from "./components/Ready";
function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen text-white">
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Review />
      <Cards />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
