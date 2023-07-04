import React from "react";
import Header from "../components/Header";
import InfoSectiion from "../components/InfoSectiion";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactUs";

export default function ContactPage() {
  return (
    <>
      <div class="hero_area">
        <Header routName={"contact"} />
        <ContactUs />
        <InfoSectiion />
        <Footer />
      </div>
    </>
  );
}
