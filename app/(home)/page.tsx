import React from "react";
import LandingPage from "@/components/landing";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import AboutUs from "@/components/Aboutus";
import Contactus from "@/components/Contactus";
export default function Home() {
  return (
    <div className="w-full">
      <LandingPage />
      <div className="grid relative bg-white dark:bg-black w-full ">
        <AboutUs />
        <WobbleCardDemo />
        <Contactus />
      </div>
    </div>
  );
}
