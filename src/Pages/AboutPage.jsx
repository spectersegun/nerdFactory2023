import React from "react";
import Header from "../components/Header";
import InfoSectiion from "../components/InfoSectiion";
import Footer from "../components/Footer";
import About from "../components/About";

export default function AboutPage() {
  return (
    <>
      <div class="hero_area">
        <Header routName={"about"} />
        <About />
        <InfoSectiion />
        <Footer />
      </div>
    </>
  );
}
