import Link from "next/link";

type DirectionProp = {
  className?: string;
  children?: React.ReactNode;
};

const Directions = ({ className, children }: DirectionProp) => (
  <Link
    className={className ? className : "text-primaryLight hover:underline"}
    href="http://maps.google.com/?q=1600 Pennsylvania Avenue NW, Washington, DC 20500"
    target="_blank"
    rel="noreferrer noopener"
    aria-label="address"
  >
    {children ? children : "1600 Pennsylvania Avenue NW, Washington, DC"}
  </Link>
);

export default Directions;
