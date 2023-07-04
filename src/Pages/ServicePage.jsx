import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import InfoSectiion from "../components/InfoSectiion";
import Footer from "../components/Footer";

export default function ServicePage() {
  return (
    <>
      <div class="hero_area">
        <Header routName={"services"} />
        <Services />
        <InfoSectiion />
        <Footer />
      </div>
    </>
  );
}
