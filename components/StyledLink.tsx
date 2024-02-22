import Link from "next/link";

const StyledLink = ({
  title,
  destination,
  small = false,
}: {
  title: string;
  destination: string;
  small?: boolean;
}) => {
  return (
    <Link href={destination} className="">
      <h2
        className={`${
          small ? `text-2xl mb-0` : `text-7xl mb-10`
        } hover:text-olive `}
      >
        {title}
        {!small && <div className="border-b border-gray-200 mt-2 opacity-75" />}
      </h2>
    </Link>
  );
};

export default StyledLink;
