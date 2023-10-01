import { ChangeEventHandler } from "react";
import { PatternFormat } from "react-number-format";

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
  format?: string;
  mask?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputLabel = <T,>({
  label,
  format,
  mask,
  ...props
}: InputLabelProps<T>) => {
  return (
    <div className="flex w-full flex-col-reverse">
      {format ? (
        <PatternFormat
          id={props.id}
          className="input"
          format={format}
          mask={mask}
          placeholder={props.placeholder}
          displayType="input"
        />
      ) : (
        <input {...props} />
      )}
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
