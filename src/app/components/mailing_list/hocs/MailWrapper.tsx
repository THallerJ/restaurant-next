"use client";
import { useRef, useState } from "react";

type MailWrapperProps = {
  submitted: React.ReactNode;
  label: React.ReactNode;
  input: React.ReactNode;
};

const MailWrapper = ({ submitted, label, input }: MailWrapperProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <form
      ref={ref}
      className="page-scale flex flex-col items-center justify-center bg-second py-20"
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmitted(true);
      }}
    >
      {isSubmitted ? (
        <div className="flex h-48 items-center justify-center text-center">
          {submitted}
        </div>
      ) : (
        <div className="flex h-48 flex-col">
          {label}
          {input}
          <button type="submit" className="btn w-full xsm:w-80">
            Submit
          </button>
        </div>
      )}
    </form>
  );
};

export default MailWrapper;
