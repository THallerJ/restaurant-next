const ListItem = ({
  children,
  selected = false,
}: {
  children: React.ReactNode;
  selected?: boolean;
}) => {
  return (
    <li
      className={`flex h-full w-full items-center justify-center rounded-t-lg 
        text-center text-sm md:text-lg ${selected ? "bg-primary" : null}`}
    >
      {children}
    </li>
  );
};

export default ListItem;
