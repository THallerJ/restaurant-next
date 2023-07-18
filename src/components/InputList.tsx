"use client";
import { useState } from "react";
import ClickAway from "@/wrappers/ClickAway";
import { DownArrow } from "@/assets";

type InputListProps<T> = {
  id?: string;
  items: T[] | null;
  text?: string | null;
  placeholder?: string;
  onSelect: (item: T) => void;
  format?: (item: T) => string;
  style?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

const InputList = <T,>({
  id,
  items,
  text,
  placeholder,
  onSelect,
  format,
  style,
  Icon,
}: InputListProps<T>) => {
  const [toggled, setToggled] = useState(false);

  const displayItem = (item: T): string => {
    if (!format && typeof item === "string") return item;
    if (format) return format(item);
    return "";
  };

  const iconStyle = "ml-4 h-5 w-5  stroke-dark";

  const content = (
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
                className="p-3 tracking-wider text-white hover:bg-third  hover:text-black"
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

  return (
    <div className="flex flex-col">
      <ClickAway callback={() => setToggled(false)}>
        <button
          id={id}
          className={`group relative bg-white ${style} `}
          onClick={() => setToggled((prev) => !prev)}
        >
          <div className="flex h-full items-center justify-between">
            {text ? text : <span className="text-gray-400">{placeholder}</span>}
            {Icon ? (
              <Icon className={iconStyle} />
            ) : (
              <DownArrow className={iconStyle} />
            )}
          </div>
          {content}
        </button>
      </ClickAway>
    </div>
  );
};

export default InputList;
