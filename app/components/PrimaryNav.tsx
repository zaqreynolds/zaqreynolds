"use client";
import navList from "@/app/navList";
import StyledLink from "@/app/components/StyledLink";
import { usePathname } from "next/navigation";

const PrimaryNav = () => {
  const pathname = usePathname();

  const activeNavList = navList.filter(
    (navItem) => navItem.destination !== pathname.slice(1)
  );

  return (
    <div className="h-full flex flex-col lg:pr-44 md:pr-20 justify-center">
      {activeNavList.map((navItem) => (
        <StyledLink
          title={navItem.title}
          destination={`/${navItem.destination}`}
          key={navItem.title}
        />
      ))}
    </div>
  );
};

export default PrimaryNav;
