import Link from "next/link";

const StyledLink = ({
  title,
  destination,
  small = false,
  onClick,
}: {
  title: string;
  destination: string;
  small?: boolean;
  onClick?: () => void;
}) => {
  return (
    <Link href={destination} className="" onClick={onClick}>
      <h2
        className={`${
          small
            ? `text-2xl mb-0 px-2 hover:border-green-100 hover:border-x-2 hover:border-opacity-20 transition-all duration-400`
            : `text-7xl mb-10`
        } hover:text-green-200 cursor-pointer hover:opacity-50 hover:bg-white hover:bg-opacity-10 transition-all duration-400`}
      >
        {title}
        {!small && <div className="border-b border-gray-200 mt-2 opacity-75" />}
      </h2>
    </Link>
  );
};

export default StyledLink;
