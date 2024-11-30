"use client";

import { motion } from "framer-motion";
import { Code } from "lucide-react";
import React, { useEffect, useState } from "react";

const CursorWrapper = ({ children }: { children: React.ReactNode }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-50"
      animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    >
      {children}
    </motion.div>
  );
};

export const CodeCursor = () => (
  <CursorWrapper>
    <div className="relative flex h-8 w-8 items-center justify-center">
      <div className="absolute h-10 w-10 animate-ping rounded-full bg-emerald-500 opacity-80" />
      <div className="absolute h-8 w-8 rounded-full bg-emerald-500 opacity-40" />
      <Code className="h-5 w-5 text-white" />
    </div>
  </CursorWrapper>
);

export const CustomCursor = () => {
  return <CodeCursor />;
};

export default CustomCursor;
