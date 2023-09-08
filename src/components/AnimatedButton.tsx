"use client";
import { useState } from "react";
import { Checkmark } from "@/assets";

type AnimatedButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  Icon?: null;
};
const AnimatedButton = ({ children, onClick, Icon }: AnimatedButtonProps) => {
  const [clicked, setClicked] = useState(false);

  const onButtonCLick = () => {
    setClicked(true);
    onClick();
  };

  return (
    <button
      className={`btn mt-3 font-bold uppercase text-white shadow-md 
      transition-colors duration-700 hover:border-dark ${
        clicked ? "bg-primaryLight" : "bg-primary"
      }`}
      onClick={onButtonCLick}
      onTransitionEnd={() => setClicked(false)}
    >
      {clicked ? (
        <div className="flex justify-center">
          <Checkmark className="h-6 w-6 fill-white stroke-white" />
        </div>
      ) : (
        <span>{children}</span>
      )}
    </button>
  );
};

export default AnimatedButton;
