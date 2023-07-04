import React from "react";
import Header from "../components/Header";
import InfoSectiion from "../components/InfoSectiion";
import Footer from "../components/Footer";
import Project from "../components/Project";

export default function ProjectPage() {
  return (
    <>
      <div class="hero_area">
        <Header routName={"portfolio"} />
        <Project />
        <InfoSectiion />
        <Footer />
      </div>
    </>
  );
}
