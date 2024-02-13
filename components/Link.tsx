import NextLink from "next/link";

const Link = ({
  title,
  destination,
}: {
  title: string;
  destination: string;
}) => {
  return (
    <NextLink href={destination} className="">
      <h2 className="text-7xl hover:text-olive mb-10">{title}</h2>
    </NextLink>
  );
};

export default Link;
