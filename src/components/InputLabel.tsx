import { PatternFormat } from "react-number-format";

interface InputLabelProps<T> extends React.ComponentPropsWithRef<"input"> {
  label: string;
  patternType?: "text" | "tel" | "password";
  value?: string | number | readonly string[];
  patternValue?: string | number | null;
  format?: string;
  mask?: string;
}

const InputLabel = <T,>({
  defaultValue,
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
