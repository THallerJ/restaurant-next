"use client";
import { useState } from "react";
import { Checkmark } from "@/assets";

interface AnimatedButtonProps extends React.ComponentPropsWithRef<"button"> {
  children: React.ReactNode;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  fullSize?: boolean;
  className?: string;
}

const AnimatedButton = ({
  children,
  onClick,
  Icon,
  fullSize,
  className,
}: AnimatedButtonProps) => {
  const [clicked, setClicked] = useState(false);

  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setClicked(true);
    if (onClick) onClick(e);
  };

  return (
    <button
      type="button"
      className={`rounded-lg border px-3 py-2 font-bold uppercase text-white 
        shadow-md transition-colors duration-700 hover:border-dark ${
          clicked ? "bg-primaryLight" : "bg-primary"
        }  ${fullSize ? "w-full" : "w-48"} ${className}`}
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
