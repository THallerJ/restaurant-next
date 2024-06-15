import Link from "next/link";

const PhoneNumber = ({ className }: { className?: string }) => {
  return (
    <Link
      aria-label="phone"
      href="tel:1-123-555-6789"
      className={
        className
          ? className
          : "text-center hover:text-third hover:underline lg:text-start"
      }
    >
      1-123-555-6789
    </Link>
  );
};

export default PhoneNumber;
