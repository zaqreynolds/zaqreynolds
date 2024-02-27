"use client";
import { useState } from "react";
import LinkedInSvg from "../svgs/LinkedInSvg";

const LinkedInIcon = () => {
  const [bgColor, setBgColor] = useState("bg-default");

  const handleMouseDown = () => {
    setBgColor("bg-olive");
  };

  const handleMouseUp = () => {
    setBgColor("bg-default");
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`flex ${bgColor} h-[37px] w-[37px] justify-center items-center rounded md:opacity-80 hover:opacity-100`}
    >
      <LinkedInSvg />
    </div>
  );
};

export default LinkedInIcon;
