type InputListProps<T> = {
  items: T[] | null;
  text?: string | null;
  onSelect: (item: T) => void;
  format?: (item: T) => string;
  center?: boolean;
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

const List = <T,>({
  items,
  text,
  onSelect,
  format,
  center,
  toggled,
  setToggled,
}: InputListProps<T>) => {
  const displayItem = (item: T): string => {
    if (!format && typeof item === "string") return item;
    if (format) return format(item);
    return "";
  };

  console.log(onSelect);

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`right-0 top-full z-10 flex max-h-96 w-full
      flex-col overflow-auto bg-dark shadow-lg
      ease-in-out ${toggled ? "absolute" : "hidden"}`}
    >
      {items
        ? items.map((item, i) => {
            return (
              <span
                className={`p-3 text-white hover:bg-third hover:text-black ${
                  center ? "text-center" : "text-start"
                }`}
                key={(text ? text : "") + i}
                onClick={() => {
                  onSelect(item);
                  setToggled(false);
                }}
              >
                {displayItem(item)}
              </span>
            );
          })
        : null}
    </div>
  );
};

export default List;
