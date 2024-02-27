"use client";
import { useEffect, useState } from "react";
import GitHubSvg from "../svgs/GitHubSvg";

const GitHubIcon = () => {
  const [bgColor, setBgColor] = useState("bg-default");
  const [svgColor, setSvgColor] = useState("#99b0a3");

  const handleMouseDown = () => {
    setBgColor("bg-olive");
  };

  const handleMouseUp = () => {
    setBgColor("bg-default");
  };

  useEffect(() => {
    if (bgColor === "bg-olive") {
      setSvgColor("#3D4C3F");
    } else {
      setSvgColor("#99b0a3");
    }
  }, [bgColor]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`flex ${bgColor} h-[37px] w-[37px] justify-center items-center rounded md:opacity-80 hover:opacity-100`}
    >
      <GitHubSvg bgColor={svgColor} />
    </div>
  );
};

export default GitHubIcon;
