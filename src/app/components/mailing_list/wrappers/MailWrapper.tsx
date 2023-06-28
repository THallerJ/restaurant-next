"use client";
import { useState, useRef, ComponentType } from "react";

type MailWrapperProps = {
  submitted: React.ReactNode;
  label: React.ReactNode;
  input: React.ReactNode;
};

const MailWrapper = ({ submitted, label, input }: MailWrapperProps) => {
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);
  const [isValid, setValid] = useState<boolean | undefined>(undefined);

  const onSubmit = (): void => {
    const valid = ref.current?.checkValidity();

    setValid(valid);
    setTimeout(() => setValid(true), 1500);
    if (valid) setIsSubmitted(true);
  };

  return (
    <form
      ref={ref}
      className="flex h-[35vh] flex-col items-center justify-center bg-second"
    >
      {isSubmitted ? (
        submitted
      ) : (
        <>
          {label}
          <div className="relative">
            {isValid === undefined || isValid ? null : (
              <label
                className="absolute bottom-0 rounded-full border-2 
                border-primary bg-dark px-4 py-1 text-third"
              >
                Please enter a valid email address
              </label>
            )}
            {input}
          </div>
          <button type="button" className="btn w-[19rem]" onClick={onSubmit}>
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default MailWrapper;
