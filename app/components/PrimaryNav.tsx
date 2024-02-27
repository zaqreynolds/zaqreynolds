import navList from "@/app/navList";
import StyledLink from "@/app/components/StyledLink";

const PrimaryNav = () => {
  return (
    <div className="h-full flex flex-col lg:pr-44 justify-center">
      {navList.map((navItem) => (
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
