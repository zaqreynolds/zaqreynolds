"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import StyledLink from "./StyledLink";
import DropDownMenu from "./DropDownMenu";

const Header = () => {
  const pathname = usePathname();

  const [isHome, setIsHome] = useState(true);

  useEffect(() => {
    if (pathname !== "/") {
      setIsHome(false);
    } else if (pathname === "/") {
      setIsHome(true);
    }
  }, [pathname]);

  return (
    <header
      className={`${
        isHome ? `hidden` : `block`
      } w-full pt-1 w-full z-50 bg-black bg-opacity-50 `}
    >
      <div className="px-2 flex justify-center">
        <DropDownMenu />
        <div className="grow" />
        <StyledLink title="Zaq Reynolds" destination={"/"} small={true} />
        <div className="grow pr-[32px]" />
      </div>
      <div className="border-b border-gray-200 my-1 opacity-75 w-full" />
    </header>
  );
};
export default Header;
