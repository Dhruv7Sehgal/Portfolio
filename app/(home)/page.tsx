import React from "react";

import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { WobbleCardDemo } from "@/components/WobbleCardDemo";
import AboutUs from "@/components/Aboutus";
import { VortexDemo } from "@/components/VortexDemo";

const Page = () => {
  return (
    <>
      <section className="w-full dark:bg-black">
        <BackgroundLinesDemo />
        <AboutUs />
        <div className="mb-44">
          <WobbleCardDemo />
        </div>
        <div className="mb-44 w-full">
          <VortexDemo />
        </div>
      </section>
    </>
  );
};

export default Page;
