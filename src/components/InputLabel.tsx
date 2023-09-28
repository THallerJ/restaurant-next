type InputLabelProps<T> = {
  id: string;
  text?: string | null;
  placeholder?: string;
  className?: string;
  label: string;
  required?: boolean;
  type?: string;
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
