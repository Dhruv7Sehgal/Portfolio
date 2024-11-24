import Footer from "@/components/Footer";
import Navbar from "@/components/Nav";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col w-full min-h-screen">
      <Navbar />
      <div className="flex flex-1 w-full">{children}</div>
      <Footer />
    </main>
  );
};

export default layout;
