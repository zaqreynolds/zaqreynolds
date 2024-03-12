"use client";
import { useEffect, useState } from "react";
import GitHubSvg from "./svgs/GitHubSvg";
import LinkedInSvg from "./svgs/LinkedInSvg";

const CustomIcon = ({
  iconType,
  link,
  initialBgColor = "bg-lightOlive",
  initialSvgColor = "#99b0a3",
}: {
  iconType: string;
  link?: string;
  initialBgColor?: string;
  initialSvgColor?: string;
}) => {
  const [bgColor, setBgColor] = useState(initialBgColor);
  const [svgColor, setSvgColor] = useState(initialSvgColor);

  const handleMouseDown = () => setBgColor("bg-olive");
  const handleMouseUp = () => setBgColor(initialBgColor);

  useEffect(() => {
    if (bgColor === "bg-olive") {
      setSvgColor("#3D4C3F");
    } else {
      setSvgColor(initialSvgColor);
    }
  }, [bgColor, initialSvgColor]);

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={`flex ${bgColor} h-[38px] w-[38px] justify-center items-center rounded hover:scale-105`}
    >
      <a href={link} target="_blank">
        {iconType === "GitHub" && <GitHubSvg bgColor={svgColor} />}
        {iconType === "LinkedIn" && <LinkedInSvg />}
      </a>
    </div>
  );
};

export default CustomIcon;
