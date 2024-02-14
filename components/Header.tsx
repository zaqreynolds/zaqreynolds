import Link from "./Link";

const Header = () => {
  return (
    <header className="w-full px-1 pt-1">
      <Link title="Zaq Reynolds" destination={"/"} small={true} />
      <div className="border-b border-gray-200 my-1 opacity-75 w-full" />
    </header>
  );
};
export default Header;
