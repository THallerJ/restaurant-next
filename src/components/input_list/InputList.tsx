"use client";
import { useState } from "react";
import Content from "./components/Content";

type InputListProps<T> = {
  id?: string;
  items: T[] | null;
  text?: string | null;
  placeholder?: string;
  onSelect: (item: T) => void;
  format?: (item: T) => string;
  className?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  center?: boolean;
  label?: string;
};

const InputList = <T,>({
  id,
  text,
  format,
  className,
  label,
  ...otherProps
}: InputListProps<T>) => {
  const [toggled, setToggled] = useState(false);

  return (
    <div className="flex flex-col-reverse">
      <div
        className={`relative flex items-center hover:cursor-pointer ${className} `}
        onClick={() => setToggled((prev) => !prev)}
      >
        <input
          id={id}
          type="text"
          contentEditable={false}
          className="absolute top-0 w-1 opacity-0"
          required
          value={text || ""}
          onChange={() => {}}
        />
        <Content
          {...otherProps}
          toggled={toggled}
          setToggled={setToggled}
          format={format}
          text={text}
        />
      </div>
      {label ? (
        <label
          htmlFor={id}
          className=" text-sm font-bold uppercase text-dark/75"
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default InputList;
