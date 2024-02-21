"use client";
import { use, useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "./Link";
import navList from "@/app/navList";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const dropdownRef = useRef<HTMLDivElement>(null);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const pathname = usePathname();

  const activeNavList = navList.filter(
    (navItem) => navItem.toLowerCase() !== pathname.slice(1)
  );

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
      className={`${isHome ? `hidden` : `block`} w-full pt-1 w-full z-50`}
    >
      <div className="px-2 flex justify-center">
        {/* Burger Menu */}
        <div>
          <button className="w-6 h-6 mr-2" onClick={toggleMenu} ref={anchorRef}>
            {!open && <HamburgerMenuIcon width="20" height="20" />}
            {open && <Cross1Icon width="20" height="20" />}
          </button>
          {open && (
            <div
              id="dropdown"
              ref={dropdownRef}
              className="z-10 absolute rounded-lg w-40 border border-defaultText pl-2 backdrop-blur-lg "
            >
              <ul className="py-2 text-sm ">
                {activeNavList.map((navItem) => (
                  <Link
                    title={navItem}
                    destination={`/${navItem.toLowerCase()}`}
                    key={navItem}
                    small={true}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className="grow" />
        <Link title="Zaq Reynolds" destination={"/"} small={true} />
        <div className="grow pr-[32px]" />
      </div>
      <div className="border-b border-gray-200 my-1 opacity-75 w-full" />
    </header>
  );
};
export default Header;
