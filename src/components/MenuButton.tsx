type MenuButtonProps = {
  toggle: boolean;
  onClick: () => void;
};

const MenuButton = ({ toggle, onClick }: MenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col gap-[6px]"
      aria-label="menu button"
    >
      <div
        className={`h-[3px] w-7 bg-fourth transition duration-700 ${
          toggle ? "translate-y-[9px] -rotate-45" : ""
        }`}
      />
      <div
        className={`h-[3px] w-7 bg-fourth transition duration-300 ${
          toggle ? "rotate-45" : ""
        }`}
      />
      <div
        className={`h-[3px] w-7 bg-fourth transition duration-300 ${
          toggle ? "translate-y-[-9px] rotate-45" : ""
        }`}
      />
    </button>
  );
};

export default MenuButton;
