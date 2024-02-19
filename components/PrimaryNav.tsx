import navList from "@/app/navList";
import Link from "@/components/Link";

const PrimaryNav = () => {
  return (
    <div className="h-full flex flex-col lg:pr-44 justify-center">
      {navList.map((navItem) => (
        <Link
          title={navItem}
          destination={`/${navItem.toLowerCase()}`}
          key={navItem}
        />
      ))}
    </div>
  );
};

export default PrimaryNav;
