import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Examinations from "./components/Examinations";
import CardsSection from "./components/CardsSection";
import FAQSection from "./components/FAQSection";
import SubscribeSection from "./components/SubscribeSection";
import Footer from "./components/Footer";
import "./App.css";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Examinations />
      <CardsSection />
      <StatsSection />
      <FAQSection />
      <SubscribeSection />
      <Footer />
    </>
  );
}

export default App;
