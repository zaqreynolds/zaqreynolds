import navList from "@/app/navList";
import StyledLink from "@/components/StyledLink";

const PrimaryNav = () => {
  return (
    <div className="h-full flex flex-col lg:pr-44 justify-center">
      {navList.map((navItem) => (
        <StyledLink
          title={navItem}
          destination={`/${navItem.toLowerCase()}`}
          key={navItem}
        />
      ))}
    </div>
  );
};

export default PrimaryNav;
