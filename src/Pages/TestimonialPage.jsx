import React from "react";
import Header from "../components/Header";
import InfoSectiion from "../components/InfoSectiion";
import Footer from "../components/Footer";
import About from "../components/About";
import Testimony from "../components/Testimony";

export default function TestimonialPage() {
  return (
    <>
      <div class="hero_area">
        <Header routName={"testimonial"} />
        <Testimony />
        <InfoSectiion />
        <Footer />
      </div>
    </>
  );
}
