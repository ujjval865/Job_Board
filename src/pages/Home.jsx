import React from "react";
import Hero from "../section/Hero";
import Stats from "../section/Stats";
import Work from "../section/Work";
import Features from "../section/Features";
import Testimonials from "../section/testimonials";
import FAQS from "../section/FAQS";
import CTA from "../section/CTA";

function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Stats/>
      <Work/>
      <Features/>
      <Testimonials/>
      <FAQS/>
      <CTA/>
    </div>
  );
}

export default Home;