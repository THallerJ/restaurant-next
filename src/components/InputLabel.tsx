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
  patternType?: "text" | "tel" | "password";
  maxLength?: number;
  minLength?: number;
  size?: number;
  min?: string | number;
  value?: string | number | readonly string[];
  patternValue?: string | number | null;
  format?: string;
  mask?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputLabel = <T,>({
  label,
  format,
  mask,
  patternType,
  patternValue,
  value,
  type,
  ...props
}: InputLabelProps<T>) => {
  return (
    <div className="flex w-full flex-col-reverse">
      {format ? (
        <PatternFormat
          format={format}
          mask={mask}
          displayType="input"
          type={patternType}
          value={patternValue}
          {...props}
        />
      ) : (
        <input value={value} type={type} {...props} />
      )}
      <label
        htmlFor={props.id}
        className="text-sm font-bold uppercase text-dark/75"
      >
        {label}
      </label>
    </div>
  );
};

export default InputLabel;
