import React from "react";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Header from "../components/Header";
import About from "../components/About";
import Project from "../components/Project";
import Testimony from "../components/Testimony";
import WhyUs from "../components/WhyUs";
import ContactUs from "../components/ContactUs";
import InfoSectiion from "../components/InfoSectiion";
import Footer from "../components/Footer";
// import logo from "./../logo.svg";

export default function Home() {
  return (
    <div>
      <div class="hero_area">
        <Header routName={"home"} />
        <Hero />
      </div>
      <Services />
      <About />
      <Project />
      <Testimony />
      <WhyUs />
      <ContactUs />
      <InfoSectiion />
      <Footer />
    </div>
  );
}
