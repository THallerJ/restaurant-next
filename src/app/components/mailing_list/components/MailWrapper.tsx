"use client";
import { useRef } from "react";
import { useNotify } from "@/hooks";

type MailWrapperProps = {
  submitted: React.ReactNode;
  label: React.ReactNode;
  input: React.ReactNode;
};

const MailWrapper = ({ submitted, label, input }: MailWrapperProps) => {
  const ref = useRef<HTMLFormElement>(null);
  const [notified, notify] = useNotify();

  return (
    <form
      ref={ref}
      className="page-scale flex flex-col items-center justify-center bg-second py-20"
      onSubmit={(e) => {
        e.preventDefault();
        notify();
      }}
    >
      {notified ? (
        submitted
      ) : (
        <>
          {label}
          {input}
          <button type="submit" className="btn w-full xsm:w-80">
            Submit
          </button>
        </>
      )}
    </form>
  );
};

export default MailWrapper;
