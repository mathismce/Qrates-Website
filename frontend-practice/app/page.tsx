"use client";

import Image from "next/image";
import Navbar from "./ui/Navbar";
import ArtistSection from "./ui/ArtistSection";
import FormatsSection from "./ui/FormatsSection";
import StepsSection from "./ui/StepsSection";
import { useState } from "react";
import TestimonialSection from "./ui/TestimonialSection";
import Footer from "./ui/Footer";
import ProjetSection from "./ui/ProjetSection";

export default function Home() {
  

  return (
    <div className="overflow-clip">
      <Navbar />
      <ArtistSection />
      <FormatsSection />
      <StepsSection />
      <ProjetSection />
      <TestimonialSection /> 
      <Footer />
    </div>
  );
}
