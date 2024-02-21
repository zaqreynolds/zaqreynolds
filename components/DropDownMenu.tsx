import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useEffect, useRef, useState } from "react";
import Link from "./Link";
import navList from "@/app/navList";
import { usePathname } from "next/navigation";

const DropDownMenu = () => {
  const anchorRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

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

  return (
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
              <li key={navItem}>
                <Link
                  title={navItem}
                  destination={`/${navItem.toLowerCase()}`}
                  small={true}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
export default DropDownMenu;
