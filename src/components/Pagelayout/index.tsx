import Navbar from "@components/Navbar";
import React from "react";

interface PagelayoutProps {
  children: React.ReactNode;
}

const Pagelayout: React.FC<PagelayoutProps> = ({ children }) => {
  return (
    <div>
      <h1>I am pagelayout</h1>
      <Navbar />
      {children}
    </div>
  );
};

export default Pagelayout;
