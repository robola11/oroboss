import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LenisScroll from "./components/LenisScroll";
import AboutUs from "./components/AboutUs";
import CardSection from "./components/CardData";

const App = () => {
  return (
    <>
      <LenisScroll />
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default App;
