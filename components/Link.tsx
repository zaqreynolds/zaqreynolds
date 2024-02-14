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
      <h2 className="text-7xl hover:text-olive mb-10">
        {title}
        <div className="border-b border-gray-200 mt-2 opacity-75" />
      </h2>
    </NextLink>
  );
};

export default Link;
