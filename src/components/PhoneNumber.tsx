const PhoneNumber = ({ className }: { className?: string }) => {
  return (
    <a
      href="tel:1-123-555-6789"
      className={
        className
          ? className
          : "text-center hover:text-third hover:underline lg:text-start"
      }
    >
      1-123-555-6789
    </a>
  );
};

export default PhoneNumber;
