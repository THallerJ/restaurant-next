import { ClickAway } from "@/hocs";
import { DownArrow } from "@/assets";
import List from "./List";

type ContentProps<T> = {
  toggled: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
  text?: string | null;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  placeholder?: string;
  onSelect: (item: T) => void;
  format?: (item: T) => string;
  center?: boolean;
  items: T[] | null;
};

const Content = <T,>({
  setToggled,
  placeholder,
  text,
  Icon,
  ...otherProps
}: ContentProps<T>) => {
  const iconStyle = "ml-4 h-5 w-5 stroke-dark";

  return (
    <ClickAway callback={() => setToggled(false)}>
      <div className="flex h-full items-center justify-between">
        {text ? text : <span className="text-gray-400">{placeholder}</span>}
        {Icon ? (
          <Icon className={iconStyle} />
        ) : (
          <DownArrow className={iconStyle} />
        )}
      </div>
      <List {...otherProps} setToggled={setToggled} />
    </ClickAway>
  );
};

export default Content;
