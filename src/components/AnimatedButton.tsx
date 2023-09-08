"use client";
import { useState } from "react";
import { Checkmark } from "@/assets";

type AnimatedButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};
const AnimatedButton = ({ children, onClick, Icon }: AnimatedButtonProps) => {
  const [clicked, setClicked] = useState(false);

  const onButtonClick = () => {
    setClicked(true);
    onClick();
  };

  return (
    <button
      className={`mt-3 border px-[1em] py-[0.5em] font-bold uppercase text-white shadow-md 
        transition-colors duration-700 hover:border-dark ${
          clicked ? "bg-primaryLight" : "bg-primary"
        }`}
      onClick={onButtonClick}
      onTransitionEnd={() => setClicked(false)}
    >
      {clicked ? (
        <div className="flex justify-center">
          {Icon ? (
            <Icon className="h-6 w-6" />
          ) : (
            <Checkmark className="h-6 w-6 fill-white stroke-white" />
          )}
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export default AnimatedButton;
