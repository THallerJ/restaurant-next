import InputList from "./InputList";

type InputLabelProps<T> = {
  id?: string;
  items: T[] | null;
  text?: string | null;
  placeholder?: string;
  onSelect: (item: T) => void;
  format?: (item: T) => string;
  className?: string;
  Icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  center?: boolean;
  label: string;
};

const InputLabel = <T,>({ label, ...props }: InputLabelProps<T>) => {
  return (
    <div className="flex w-full flex-col-reverse">
      <InputList {...props} />
      <label className=" text-sm font-bold uppercase text-dark/75">
        {label}
      </label>
    </div>
  );
};

export default InputLabel;
