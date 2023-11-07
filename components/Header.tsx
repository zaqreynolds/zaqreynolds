"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  let pathname = usePathname();
  const paths = [
    { path: "/", name: "Home" },
    { path: "/coding", name: "Coding" },
    { path: "/audio", name: "Audio" },
    { path: "/culinary", name: "Culinary" },
  ];

  return (
    <nav className="flex w-screen justify-around">
      {paths.map((path, index) => {
        if (pathname != path.path) {
          return (
            <Link href={path.path} key={index} className="m-1">
              {path.name}
            </Link>
          );
        }
      })}
    </nav>
  );
};

export default Header;
