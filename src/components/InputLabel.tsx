import { ChangeEventHandler } from "react";

type InputLabelProps<T> = {
  id: string;
  text?: string | null;
  placeholder?: string;
  className?: string;
  label: string;
  required?: boolean;
  type?: string;
  maxLength?: number;
  minLength?: number;
  size?: number;
  min?: string | number;
  value?: string | number | readonly string[];
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputLabel = <T,>({ label, ...props }: InputLabelProps<T>) => {
  return (
    <div className="flex w-full flex-col-reverse">
      <input {...props} />
      <label
        htmlFor={props.id}
        className=" text-sm font-bold uppercase text-dark/75"
      >
        {label}
      </label>
    </div>
  );
};

export default InputLabel;
