import NextLink from "next/link";

const Link = ({
  title,
  destination,
  small = false,
}: {
  title: string;
  destination: string;
  small?: boolean;
}) => {
  return (
    <NextLink href={destination} className="">
      <h2
        className={`${
          small ? `text-xl mb-0` : `text-7xl mb-10`
        } hover:text-olive `}
      >
        {title}
        {!small && <div className="border-b border-gray-200 mt-2 opacity-75" />}
      </h2>
    </NextLink>
  );
};

export default Link;
