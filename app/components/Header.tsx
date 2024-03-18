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
    <header className={`${isHome ? `hidden` : `block`} pt-1 w-full z-50`}>
      <div className="px-2 flex justify-center">
        <DropDownMenu />
        <div className="grow" />
        <StyledLink title="Zaq Reynolds" destination={"/"} small={true} />
        <div className="grow pr-[32px]" />
      </div>
      <div className="border-b border-lightOlive pt-1 opacity-60 w-full" />
    </header>
  );
};
export default Header;
