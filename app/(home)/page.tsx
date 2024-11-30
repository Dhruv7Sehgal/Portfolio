import React from "react";
import LandingPage from "@/components/landing";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import AboutUs from "@/components/Aboutus";
import Contactus from "@/components/Contactus";
import CustomCursor from "@/components/customcursor";

export default function Home() {
  return (
    <div className="w-full">
      <CustomCursor />
      <LandingPage />
      <div className="grid relative bg-white dark:bg-black w-full ">
        <AboutUs />
        <WobbleCardDemo />
        <Contactus />
      </div>
    </div>
  );
}
